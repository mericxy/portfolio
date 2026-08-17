import { site } from "./site";

const githubApiUrl = "https://api.github.com";
const requestTimeout = 5_000;

export interface GitHubRepository {
  id: number;
  html_url: string;
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  pushed_at: string | null;
  fork: boolean;
  archived: boolean;
}

export interface GitHubPublicActivity {
  id: string;
  type: string;
  repo: { name: string };
  created_at: string | null;
}

export interface GitHubData<T> {
  data: T;
  available: boolean;
  rateLimited: boolean;
  rateLimitRemaining: number | null;
}

export interface GitHubLanguageSummary {
  language: string;
  repositories: number;
}

export interface GitHubLanguageDistribution {
  language: string;
  bytes: number;
  percentage: number;
}

export interface GitHubLanguageData {
  languages: GitHubLanguageDistribution[];
  repositoriesAnalyzed: number;
}

const repositoryRequests = new Map<string, Promise<GitHubData<GitHubRepository[]>>>();
const activityRequests = new Map<string, Promise<GitHubData<GitHubPublicActivity[]>>>();
const languageRequests = new Map<string, Promise<GitHubData<GitHubLanguageData>>>();

function unavailable<T>(fallback: T): GitHubData<T> {
  return {
    data: fallback,
    available: false,
    rateLimited: false,
    rateLimitRemaining: null,
  };
}

async function requestGitHub<T>(path: string, fallback: T): Promise<GitHubData<T>> {
  try {
    const token = import.meta.env.GITHUB_TOKEN;
    const response = await fetch(`${githubApiUrl}${path}`, {
      headers: {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      signal: AbortSignal.timeout(requestTimeout),
    });
    const remainingHeader = response.headers.get("x-ratelimit-remaining");
    const rateLimitRemaining = remainingHeader === null ? null : Number(remainingHeader);

    if (!response.ok) {
      return {
        ...unavailable(fallback),
        rateLimited: response.status === 403 || response.status === 429,
        rateLimitRemaining: Number.isFinite(rateLimitRemaining) ? rateLimitRemaining : null,
      };
    }

    return {
      data: (await response.json()) as T,
      available: true,
      rateLimited: false,
      rateLimitRemaining: Number.isFinite(rateLimitRemaining) ? rateLimitRemaining : null,
    };
  } catch {
    return unavailable(fallback);
  }
}

function isLanguageResponse(value: unknown): value is Record<string, number> {
  return (
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value) &&
    Object.entries(value).every(
      ([language, bytes]) => language.length > 0 && typeof bytes === "number" && Number.isFinite(bytes) && bytes >= 0,
    )
  );
}

export function getGitHubLanguageDistribution(
  username = site.githubUsername,
  repositoryLimit = 12,
): Promise<GitHubData<GitHubLanguageData>> {
  const safeLimit = Math.max(1, Math.min(20, Math.floor(repositoryLimit)));
  const cacheKey = `${username}:${safeLimit}`;
  const cached = languageRequests.get(cacheKey);
  if (cached) return cached;

  const request = getGitHubRepositories(username).then(async (repositoriesResult) => {
    if (!repositoriesResult.available) {
      return {
        ...repositoriesResult,
        data: { languages: [], repositoriesAnalyzed: 0 },
      };
    }

    const authoredRepositories = repositoriesResult.data
      .filter((repository) => !repository.fork && !repository.archived)
      .sort((a, b) => {
        const aDate = Date.parse(a.pushed_at ?? a.updated_at);
        const bDate = Date.parse(b.pushed_at ?? b.updated_at);
        return bDate - aDate;
      })
      .slice(0, safeLimit);

    const responses = await Promise.all(
      authoredRepositories.map((repository) =>
        requestGitHub<unknown>(
          `/repos/${encodeURIComponent(username)}/${encodeURIComponent(repository.name)}/languages`,
          {},
        ),
      ),
    );

    const totals = new Map<string, number>();
    let repositoriesAnalyzed = 0;
    let rateLimited = repositoriesResult.rateLimited;
    let rateLimitRemaining = repositoriesResult.rateLimitRemaining;

    responses.forEach((response) => {
      rateLimited ||= response.rateLimited;
      if (response.rateLimitRemaining !== null) {
        rateLimitRemaining =
          rateLimitRemaining === null
            ? response.rateLimitRemaining
            : Math.min(rateLimitRemaining, response.rateLimitRemaining);
      }

      if (!response.available || !isLanguageResponse(response.data)) return;
      const entries = Object.entries(response.data).filter(([, bytes]) => bytes > 0);
      if (entries.length === 0) return;

      repositoriesAnalyzed += 1;
      entries.forEach(([language, bytes]) => {
        totals.set(language, (totals.get(language) ?? 0) + bytes);
      });
    });

    const totalBytes = Array.from(totals.values()).reduce((sum, bytes) => sum + bytes, 0);
    if (totalBytes === 0 || repositoriesAnalyzed === 0) {
      return {
        data: { languages: [], repositoriesAnalyzed: 0 },
        available: false,
        rateLimited,
        rateLimitRemaining,
      };
    }

    const sorted = Array.from(totals, ([language, bytes]) => ({ language, bytes }))
      .sort((a, b) => b.bytes - a.bytes || a.language.localeCompare(b.language));
    const leading = sorted.slice(0, 5);
    const remainder = sorted.slice(5).reduce((sum, item) => sum + item.bytes, 0);
    if (remainder > 0) leading.push({ language: "Other", bytes: remainder });

    return {
      data: {
        languages: leading.map(({ language, bytes }) => ({
          language,
          bytes,
          percentage: Number(((bytes / totalBytes) * 100).toFixed(1)),
        })),
        repositoriesAnalyzed,
      },
      available: true,
      rateLimited,
      rateLimitRemaining,
    };
  });

  languageRequests.set(cacheKey, request);
  return request;
}

export function getGitHubRepositories(
  username = site.githubUsername,
): Promise<GitHubData<GitHubRepository[]>> {
  const cached = repositoryRequests.get(username);
  if (cached) return cached;

  const request = requestGitHub<unknown>(
    `/users/${encodeURIComponent(username)}/repos?sort=updated&type=owner&per_page=100`,
    [],
  ).then((result) => ({
    ...result,
    data: Array.isArray(result.data)
      ? result.data.filter(
          (repository): repository is GitHubRepository =>
            typeof repository === "object" &&
            repository !== null &&
            typeof (repository as GitHubRepository).id === "number" &&
            typeof (repository as GitHubRepository).name === "string" &&
            typeof (repository as GitHubRepository).html_url === "string",
        )
      : [],
  }));

  repositoryRequests.set(username, request);
  return request;
}

export function getRecentGitHubActivity(
  username = site.githubUsername,
): Promise<GitHubData<GitHubPublicActivity[]>> {
  const cached = activityRequests.get(username);
  if (cached) return cached;

  const request = requestGitHub<unknown>(
    `/users/${encodeURIComponent(username)}/events/public?per_page=20`,
    [],
  ).then((result) => ({
    ...result,
    data: Array.isArray(result.data)
      ? result.data.filter(
          (activity): activity is GitHubPublicActivity =>
            typeof activity === "object" &&
            activity !== null &&
            typeof (activity as GitHubPublicActivity).id === "string" &&
            typeof (activity as GitHubPublicActivity).type === "string",
        )
      : [],
  }));

  activityRequests.set(username, request);
  return request;
}

export function summarizeRepositoryLanguages(
  repositories: readonly GitHubRepository[],
): GitHubLanguageSummary[] {
  const totals = new Map<string, number>();

  repositories.forEach((repository) => {
    if (!repository.language || repository.fork || repository.archived) return;
    totals.set(repository.language, (totals.get(repository.language) ?? 0) + 1);
  });

  return Array.from(totals, ([language, repositories]) => ({ language, repositories }))
    .sort((a, b) => b.repositories - a.repositories || a.language.localeCompare(b.language));
}
