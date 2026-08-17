import type { Locale } from "../i18n/ui";

type LocalizedText = Record<Locale, string>;
type LocalizedList = Record<Locale, readonly string[]>;

export interface ExperienceEntry {
  id: string;
  organization: string;
  role: LocalizedText;
  description: LocalizedText;
  technologies: LocalizedList;
  start: `${number}-${number}`;
  end: `${number}-${number}` | null;
  featured: boolean;
  order: number;
}

export const experienceEntries: readonly ExperienceEntry[] = [
  {
    id: "mob4ai",
    organization: "MOB4AI / Motorola + UFAM",
    role: {
      "pt-BR": "Frontend Developer",
      en: "Frontend Developer",
    },
    description: {
      "pt-BR":
        "Desenvolvimento frontend de dashboards analíticos e interfaces orientadas a dados, participação em decisões de UI/UX e arquitetura frontend, além de suporte ao deploy e à infraestrutura das aplicações.",
      en: "Frontend development of analytical dashboards and data-oriented interfaces, participation in UI/UX and frontend architecture decisions, and support for application deployment and infrastructure.",
    },
    technologies: {
      "pt-BR": ["React", "ECharts", "Highcharts", "APIs", "Deploy"],
      en: ["React", "ECharts", "Highcharts", "APIs", "Deployment"],
    },
    start: "2025-05",
    end: null,
    featured: true,
    order: 1,
  },
  {
    id: "cetam",
    organization: "CETAM",
    role: {
      "pt-BR": "Estagiário",
      en: "Intern",
    },
    description: {
      "pt-BR":
        "Apoio técnico e administrativo em ambiente corporativo, com foco em organização, comunicação e resolução de problemas operacionais.",
      en: "Technical and administrative support in a corporate environment, focused on organization, communication, and operational problem-solving.",
    },
    technologies: {
      "pt-BR": ["Suporte técnico", "Operações", "Colaboração"],
      en: ["Technical support", "Operations", "Collaboration"],
    },
    start: "2024-11",
    end: "2025-05",
    featured: false,
    order: 2,
  },
].sort((a, b) => a.order - b.order);

const monthLabels: Record<Locale, readonly string[]> = {
  "pt-BR": ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
};

export function formatYearMonth(value: `${number}-${number}`, locale: Locale): string {
  const [year, month] = value.split("-").map(Number);
  return `${monthLabels[locale][month - 1]} ${year}`;
}

export function formatExperiencePeriod(
  experience: Pick<ExperienceEntry, "start" | "end">,
  locale: Locale,
  presentLabel: string,
): string {
  return `${formatYearMonth(experience.start, locale)} — ${experience.end ? formatYearMonth(experience.end, locale) : presentLabel}`;
}
