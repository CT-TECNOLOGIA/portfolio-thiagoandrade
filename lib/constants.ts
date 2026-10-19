export const NAV_ITEMS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#projetos", label: "Projetos" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#contato", label: "Contato" },
] as const;

export const SOCIAL = {
  email: "thsadr.dev@gmail.com",
  mailto: "mailto:thsadr.dev@gmail.com?subject=Contato%20via%20Portf%C3%B3lio",
  whatsapp: "67992007620",
  whatsappLink: "https://wa.me/5567992007620",
  github: "https://github.com/HeedADR",
  linkedin: "https://www.linkedin.com/in/thiagoadr",
  curriculo: "/curriculo-ats-thiago-andrade.pdf",
  curriculoFileName: "Curriculo_ATS_Thiago_Andrade.pdf",
} as const;

export type ThemeColorKey = "amber-500" | "violet-500" | "teal-500";

export interface ProjectThemeClasses {
  cardBorderHover: string;
  cardShadowHover: string;
  categoryText: string;
  badgeHover: string;
  dotBg: string;
}

export const PROJECT_THEMES: Record<ThemeColorKey, ProjectThemeClasses> = {
  "amber-500": {
    cardBorderHover: "group-hover:border-amber-500/50",
    cardShadowHover: "group-hover:shadow-[0_0_50px_rgba(245,158,11,0.25)]",
    categoryText: "text-amber-400 group-hover:text-amber-300",
    badgeHover:
      "group-hover:border-amber-500/30 group-hover:bg-amber-500/10 group-hover:text-amber-200",
    dotBg: "bg-amber-400",
  },
  "violet-500": {
    cardBorderHover: "group-hover:border-violet-500/50",
    cardShadowHover: "group-hover:shadow-[0_0_50px_rgba(139,92,246,0.25)]",
    categoryText: "text-violet-400 group-hover:text-violet-300",
    badgeHover:
      "group-hover:border-violet-500/30 group-hover:bg-violet-500/10 group-hover:text-violet-200",
    dotBg: "bg-violet-400",
  },
  "teal-500": {
    cardBorderHover: "group-hover:border-teal-500/50",
    cardShadowHover: "group-hover:shadow-[0_0_50px_rgba(20,184,166,0.25)]",
    categoryText: "text-teal-400 group-hover:text-teal-300",
    badgeHover:
      "group-hover:border-teal-500/30 group-hover:bg-teal-500/10 group-hover:text-teal-200",
    dotBg: "bg-teal-400",
  },
} as const;

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: readonly string[];
  videoUrl: string;
  themeColor: ThemeColorKey;
}

export const PROJECTS: readonly Project[] = [
  {
    id: "barber",
    title: "BarberFlow",
    category: "MVP / Sistema SaaS",
    description:
      "Plataforma completa para gestão e operação de barbearias. Arquitetura de regras de negócio, layouts intuitivos e controle de acesso diferenciado para administradores e barbeiros.",
    tags: ["Laravel", "React Native", "SQL"],
    videoUrl: "/barberflow.mp4",
    themeColor: "amber-500",
  },
  {
    id: "starzar",
    title: "Starzar",
    category: "Marketplace Digital",
    description:
      "Plataforma de transações e vitrine digital conectando múltiplos usuários com fluxo de dados seguro e performance em ecossistemas complexos.",
    tags: ["Laravel", "React Native", "Integração de APIs"],
    videoUrl: "/starzar.mp4",
    themeColor: "violet-500",
  },
  {
    id: "apexia",
    title: "Gestor de Tarefas (Apexia)",
    category: "Ferramenta de Produtividade",
    description:
      "Aplicação ágil para organização pessoal com gestão de estado e operações de CRUD em tempo real.",
    tags: ["Laravel", "React Native"],
    videoUrl: "/apexia.mp4",
    themeColor: "teal-500",
  },
] as const;
