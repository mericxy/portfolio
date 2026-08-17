import type { Locale } from "../i18n/ui";

type LocalizedCopy = Record<Locale, string>;

export interface FeaturedProject {
  slug: string;
  name: string;
  filePath: string;
  description: LocalizedCopy;
  role: LocalizedCopy;
  status: "live";
  technologies: readonly string[];
  repositoryUrl: string;
  liveUrl: string;
  order: number;
  featured: true;
}

export const featuredProjects: readonly FeaturedProject[] = [
  {
    slug: "docparse",
    name: "DocParse",
    filePath: "~/projects/docparse.md",
    description: {
      "pt-BR":
        "Aplicação para transcrever documentos trabalhistas, como cartões de ponto e holerites em PDF, para dados estruturados e planilhas. Possui pipeline de extração/OCR, revisão editável e exportação, desenvolvida originalmente como desafio técnico.",
      en: "Application for converting labor documents such as time cards and payslips from PDF into structured data and spreadsheets, with an OCR/extraction pipeline, editable review, and export, originally developed as a technical challenge.",
    },
    role: {
      "pt-BR": "Desenvolvimento full-stack",
      en: "Full-stack development",
    },
    status: "live",
    technologies: ["Python", "FastAPI", "OCR", "React", "Docker"],
    repositoryUrl: "https://github.com/mericxy/DocParse",
    liveUrl: "https://docparse.meric.dev.br",
    order: 1,
    featured: true,
  },
  {
    slug: "bingole",
    name: "Bingole",
    filePath: "~/projects/bingole.md",
    description: {
      "pt-BR":
        "Aplicação web para sorteio de bingo, construída com React, Vite e Tailwind CSS, com deploy automatizado via GitHub Actions. Projeto voltado ao treino de frontend, organização de interface e fluxo de entrega.",
      en: "Web bingo drawing application built with React, Vite, and Tailwind CSS, with automated deployment through GitHub Actions. Created as a frontend practice project focused on interface organization and delivery workflow.",
    },
    role: {
      "pt-BR": "Desenvolvimento frontend",
      en: "Frontend development",
    },
    status: "live",
    technologies: ["React", "Vite", "Tailwind CSS", "GitHub Actions"],
    repositoryUrl: "https://github.com/mericxy/bingole",
    liveUrl: "https://mericxy.github.io/bingole",
    order: 2,
    featured: true,
  },
].sort((a, b) => a.order - b.order);
