export const locales = ["pt-BR", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt-BR";

export type ThemePreference = "system" | "light" | "dark";

interface UiDictionary {
  meta: {
    defaultTitle: string;
    description: string;
    ogLocale: string;
  };
  navigation: {
    home: string;
    primaryLabel: string;
    mobileLabel: string;
    work: string;
    about: string;
    resume: string;
    contact: string;
    menu: string;
    close: string;
  };
  preferences: {
    language: string;
    theme: string;
    themeOptions: Record<ThemePreference, string>;
  };
  hero: {
    index: string;
    statusLabel: string;
    statusValue: string;
    headline: readonly [string, string];
    description: string;
    expertiseLabel: string;
    expertise: readonly string[];
    profileMeta: string;
    profileRole: string;
    avatarAlt: string;
    actionsLabel: string;
    explore: string;
    location: string;
    basedIn: string;
  };
  home: {
    work: {
      number: string;
      eyebrow: string;
      title: readonly [string, string];
      description: string;
      projectLabel: string;
      roleLabel: string;
      statusLabel: string;
      liveStatus: string;
      technologiesLabel: string;
      repositoryAction: string;
      liveAction: string;
      viewProjects: string;
    };
    about: {
      number: string;
      eyebrow: string;
      title: readonly [string, string];
      annotation: string;
      paragraphs: readonly [string, string];
      command: string;
      commandLabel: string;
    };
    experience: {
      number: string;
      eyebrow: string;
      title: readonly [string, string];
      description: string;
      annotation: string;
      technologiesLabel: string;
      present: string;
    };
    engineering: {
      number: string;
      eyebrow: string;
      title: readonly [string, string];
      description: string;
      annotation: string;
      distributionLabel: string;
      liveSource: string;
      fallbackSource: string;
      repositoriesAnalyzed: string;
      fallbackTechnologies: readonly string[];
    };
    contact: {
      number: string;
      eyebrow: string;
      title: readonly [string, string];
      description: string;
      linksLabel: string;
      command: string;
    };
  };
  about: {
    title: string;
    description: string;
    heading: string;
    paragraphs: readonly string[];
  };
  contact: {
    title: string;
    description: string;
    heading: string;
    intro: string;
  };
  resume: {
    title: string;
    description: string;
    fileLabel: string;
    role: string;
    summary: string;
    actionsLabel: string;
    downloadPdf: string;
    sourceLink: string;
    experienceTitle: string;
    educationTitle: string;
    educationDegree: string;
    educationInstitution: string;
    educationPeriod: string;
    technologiesTitle: string;
    technologyGroups: readonly {
      label: string;
      items: readonly string[];
    }[];
    linksTitle: string;
  };
  footer: {
    meta: string;
  };
  common: {
    skipToContent: string;
    opensInNewTab: string;
  };
}

export const ui = {
  "pt-BR": {
    meta: {
      defaultTitle: "Márcio Éric — Engenheiro de software",
      description:
        "Portfólio de Márcio Éric, engenheiro de software com foco em frontend, visualização de dados, integração de APIs, backend e deploy.",
      ogLocale: "pt_BR",
    },
    navigation: {
      home: "Início",
      primaryLabel: "Navegação principal",
      mobileLabel: "Navegação móvel",
      work: "Projetos",
      about: "Sobre",
      resume: "CV",
      contact: "Contato",
      menu: "Menu",
      close: "Fechar",
    },
    preferences: {
      language: "Idioma",
      theme: "Tema",
      themeOptions: {
        system: "Sistema",
        light: "Claro",
        dark: "Escuro",
      },
    },
    hero: {
      index: "// portfólio",
      statusLabel: "status",
      statusValue: "disponível",
      headline: ["Engenheiro", "de Software"],
      description:
        "Engenheiro de software com foco em frontend, interfaces orientadas a dados e integração de APIs, com experiência em backend e deploy.",
      expertiseLabel: "Áreas de atuação",
      expertise: ["Frontend", "UI/UX", "Backend", "DevOps"],
      profileMeta: "Manaus, Amazonas / Engenharia de software",
      profileRole: "> engenheiro_de_software",
      avatarAlt: "Retrato de Márcio Éric",
      actionsLabel: "Ações do portfólio",
      explore: "Explorar projetos",
      location: "Manaus, AM",
      basedIn: "Baseado no",
    },
    home: {
      work: {
        number: "02",
        eyebrow: "Projetos",
        title: ["Projetos", "selecionados."],
        description:
          "Uma seleção curta de produtos construídos de ponta a ponta, apresentada como artefatos de trabalho — não como uma lista de repositórios.",
        projectLabel: "Projeto",
        roleLabel: "Papel",
        statusLabel: "Status",
        liveStatus: "Em produção",
        technologiesLabel: "Tecnologias do projeto",
        repositoryAction: "repo",
        liveAction: "site",
        viewProjects: "Ver todos os projetos",
      },
      about: {
        number: "03",
        eyebrow: "Sobre",
        title: ["Sobre", "mim."],
        annotation: "frontend / produto / infraestrutura",
        paragraphs: [
          "Desenvolvedor de software com foco em frontend e experiência na construção de dashboards analíticos, interfaces orientadas a dados e evolução de arquitetura frontend em projetos de pesquisa e desenvolvimento. Na MOB4AI, atuo também em decisões de UI/UX e no suporte ao deploy e à infraestrutura das aplicações.",
          "Tenho buscado ampliar minha atuação para backend e DevOps, com o objetivo de evoluir para um perfil cada vez mais completo ao longo do stack.",
        ],
        command: "cat about.md",
        commandLabel: "Abrir página Sobre",
      },
      experience: {
        number: "04",
        eyebrow: "Experiência",
        title: ["Experiência", "em produto."],
        description:
          "Atuação profissional conectando interfaces, dados, decisões de arquitetura e entrega de software em contextos reais.",
        annotation: "trajetória / experiência",
        technologiesLabel: "Tecnologias de",
        present: "Presente",
      },
      engineering: {
        number: "05",
        eyebrow: "Engenharia",
        title: ["Linguagens", "na prática."],
        description:
          "Uma leitura dos bytes de linguagem nos repositórios públicos autorais do GitHub. É atividade de código, não uma medida de proficiência.",
        annotation: "github / language bytes",
        distributionLabel: "Distribuição de linguagens nos repositórios públicos do GitHub",
        liveSource: "Fonte ao vivo: API pública do GitHub",
        fallbackSource: "Referência local: tecnologias selecionadas",
        repositoriesAnalyzed: "{count} repositórios analisados",
        fallbackTechnologies: ["JavaScript", "Python", "C", "Kotlin", "Swift", "Docker"],
      },
      contact: {
        number: "06",
        eyebrow: "Contato",
        title: ["Vamos", "conversar."],
        description:
          "Estou aberto a conversas sobre engenharia de software, interfaces de produto e oportunidades para construir trabalhos relevantes.",
        linksLabel: "Canais de contato",
        command: "contact --all",
      },
    },
    about: {
      title: "Sobre",
      description:
        "Conheça a formação em engenharia de software, o foco técnico e o trabalho de Márcio Éric com NAVIR e MOBA4AI.",
      heading: "Sobre mim",
      paragraphs: [
        "Curso o Bacharelado em Engenharia de Software na Universidade Federal do Amazonas, com conclusão prevista para janeiro de 2027.",
        "Desde maio de 2025 atuo como Frontend Developer no MOB4AI, projeto de pesquisa Motorola/UFAM. Desenvolvo dashboards e interfaces em React para visualização de dados reais, participando de decisões de arquitetura frontend, definição de stack e deploy em servidor.",
        "Minha atuação também passa por integração de APIs, backend, infraestrutura e qualidade de software, com experiência em Python, FastAPI, Django, Node.js, NestJS, PostgreSQL, Docker, Vitest e Pytest.",
      ],
    },
    contact: {
      title: "Contato",
      description: "Entre em contato com Márcio Éric por e-mail, GitHub ou LinkedIn.",
      heading: "Contato",
      intro: "Fique à vontade para entrar em contato pelas plataformas abaixo:",
    },
    resume: {
      title: "Currículo",
      description:
        "Currículo de Márcio Éric, desenvolvedor de software com experiência em frontend, visualização de dados, backend e deploy.",
      fileLabel: "~/resume.md",
      role: "Desenvolvedor de Software / Frontend",
      summary:
        "Desenvolvedor de software com base sólida em frontend e atuação em aplicações web com integração de APIs, visualização de dados, backend e deploy. Busco ampliar minha atuação em backend e DevOps sem perder o foco em legibilidade, manutenção e experiência do usuário.",
      actionsLabel: "Ações do currículo",
      downloadPdf: "Baixar PDF",
      sourceLink: "código-fonte do currículo",
      experienceTitle: "Experiência profissional",
      educationTitle: "Educação",
      educationDegree: "Bacharelado em Engenharia de Software",
      educationInstitution: "Universidade Federal do Amazonas — Manaus, Amazonas",
      educationPeriod: "Out 2022 — conclusão prevista: Jan 2027",
      technologiesTitle: "Competências técnicas",
      technologyGroups: [
        { label: "Frontend e UI", items: ["JavaScript", "TypeScript", "HTML5", "CSS3", "React", "Vite", "Tailwind CSS", "Figma"] },
        { label: "Backend e APIs", items: ["Python", "FastAPI", "Django", "Node.js", "NestJS", "PostgreSQL", "APIs REST"] },
        { label: "Dados e visualização", items: ["Apache ECharts", "Highcharts", "Dashboards", "Gráficos interativos"] },
        { label: "Infraestrutura e qualidade", items: ["Docker", "GitHub Actions", "Deploy em servidor", "Vitest", "Pytest", "Jira"] },
      ],
      linksTitle: "Links profissionais",
    },
    footer: {
      meta: "portfólio / Astro",
    },
    common: {
      skipToContent: "Ir para o conteúdo principal",
      opensInNewTab: "abre em uma nova aba",
    },
  },
  en: {
    meta: {
      defaultTitle: "Márcio Éric — Software engineer",
      description:
        "Portfolio of Márcio Éric, a software engineer focused on frontend, data visualization, API integration, backend, and deployment.",
      ogLocale: "en_US",
    },
    navigation: {
      home: "Home",
      primaryLabel: "Primary navigation",
      mobileLabel: "Mobile navigation",
      work: "Work",
      about: "About",
      resume: "Resume",
      contact: "Contact",
      menu: "Menu",
      close: "Close",
    },
    preferences: {
      language: "Language",
      theme: "Theme",
      themeOptions: {
        system: "System",
        light: "Light",
        dark: "Dark",
      },
    },
    hero: {
      index: "// portfolio",
      statusLabel: "status",
      statusValue: "open_to_work",
      headline: ["Software", "Engineer"],
      description:
        "Software engineer focused on frontend, data-driven interfaces, and API integration, with experience across backend and deployment.",
      expertiseLabel: "Areas of expertise",
      expertise: ["Frontend", "UI/UX", "Backend", "DevOps"],
      profileMeta: "Manaus, Amazonas / Software engineering",
      profileRole: "> software_engineer",
      avatarAlt: "Portrait of Márcio Éric",
      actionsLabel: "Portfolio actions",
      explore: "Explore my work",
      location: "Manaus, BR",
      basedIn: "Based in",
    },
    home: {
      work: {
        number: "02",
        eyebrow: "Work",
        title: ["Selected", "work."],
        description:
          "A concise selection of products built end to end, presented as working artifacts rather than a repository list.",
        projectLabel: "Project",
        roleLabel: "Role",
        statusLabel: "Status",
        liveStatus: "Live",
        technologiesLabel: "Project technologies",
        repositoryAction: "repo",
        liveAction: "site",
        viewProjects: "View all projects",
      },
      about: {
        number: "03",
        eyebrow: "About",
        title: ["About", "me."],
        annotation: "frontend / product / infrastructure",
        paragraphs: [
          "Software developer focused on frontend engineering, with experience building analytical dashboards, data-oriented interfaces, and evolving frontend architectures in research and development projects. At MOB4AI, I also contribute to UI/UX decisions and support application deployment and infrastructure.",
          "I am expanding my work into backend and DevOps, aiming to develop a broader engineering perspective across the stack.",
        ],
        command: "cat about.md",
        commandLabel: "Open About page",
      },
      experience: {
        number: "04",
        eyebrow: "Experience",
        title: ["Product", "experience."],
        description:
          "Professional experience connecting interfaces, data, architectural decisions, and software delivery in real-world environments.",
        annotation: "career / experience",
        technologiesLabel: "Technologies for",
        present: "Present",
      },
      engineering: {
        number: "05",
        eyebrow: "Engineering",
        title: ["Languages", "in practice."],
        description:
          "A view of language bytes across authored public GitHub repositories. It reflects coding activity, not a measure of proficiency.",
        annotation: "github / language bytes",
        distributionLabel: "GitHub public repository language distribution",
        liveSource: "Live source: GitHub public API",
        fallbackSource: "Local reference: selected technologies",
        repositoriesAnalyzed: "{count} repositories analyzed",
        fallbackTechnologies: ["JavaScript", "Python", "C", "Kotlin", "Swift", "Docker"],
      },
      contact: {
        number: "06",
        eyebrow: "Contact",
        title: ["Let's", "talk."],
        description:
          "I’m open to conversations about software engineering, product interfaces, and opportunities to build meaningful work.",
        linksLabel: "Contact channels",
        command: "contact --all",
      },
    },
    about: {
      title: "About",
      description:
        "Learn about Márcio Éric's software engineering background, technical focus, and work with NAVIR and MOBA4AI.",
      heading: "About Me",
      paragraphs: [
        "I am pursuing a Bachelor's degree in Software Engineering at the Federal University of Amazonas, with expected completion in January 2027.",
        "Since May 2025, I have worked as a Frontend Developer at MOB4AI, a Motorola/UFAM research project. I build React dashboards and interfaces for real-data visualization while contributing to frontend architecture, stack definition, and server deployment.",
        "My work also spans API integration, backend, infrastructure, and software quality, with experience in Python, FastAPI, Django, Node.js, NestJS, PostgreSQL, Docker, Vitest, and Pytest.",
      ],
    },
    contact: {
      title: "Contact",
      description: "Contact Márcio Éric by email, GitHub, or LinkedIn.",
      heading: "Contact",
      intro: "Feel free to reach out through the following platforms:",
    },
    resume: {
      title: "Resume",
      description:
        "Resume of Márcio Éric, a software developer with experience in frontend, data visualization, backend, and deployment.",
      fileLabel: "~/resume.md",
      role: "Software Developer / Frontend",
      summary:
        "Software developer with a solid frontend foundation and experience in web applications involving API integration, data visualization, backend, and deployment. I am expanding into backend and DevOps while maintaining a focus on readability, maintainability, and user experience.",
      actionsLabel: "Resume actions",
      downloadPdf: "Download PDF",
      sourceLink: "resume source",
      experienceTitle: "Professional experience",
      educationTitle: "Education",
      educationDegree: "Bachelor's degree in Software Engineering",
      educationInstitution: "Federal University of Amazonas — Manaus, Amazonas",
      educationPeriod: "Oct 2022 — expected completion: Jan 2027",
      technologiesTitle: "Technical skills",
      technologyGroups: [
        { label: "Frontend and UI", items: ["JavaScript", "TypeScript", "HTML5", "CSS3", "React", "Vite", "Tailwind CSS", "Figma"] },
        { label: "Backend and APIs", items: ["Python", "FastAPI", "Django", "Node.js", "NestJS", "PostgreSQL", "REST APIs"] },
        { label: "Data and visualization", items: ["Apache ECharts", "Highcharts", "Dashboards", "Interactive charts"] },
        { label: "Infrastructure and quality", items: ["Docker", "GitHub Actions", "Server deployment", "Vitest", "Pytest", "Jira"] },
      ],
      linksTitle: "Professional links",
    },
    footer: {
      meta: "portfolio / Astro",
    },
    common: {
      skipToContent: "Skip to main content",
      opensInNewTab: "opens in a new tab",
    },
  },
} as const satisfies Record<Locale, UiDictionary>;
