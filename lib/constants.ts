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
  curriculoFileName: "Curriculo_Thiago_Andrade_FullStack.pdf",
} as const;

export type ThemeColorKey = "amber-500" | "violet-500" | "teal-500";

export interface ProjectThemeClasses {
  cardBorderHover: string;
  cardShadowHover: string;
  categoryText: string;
  badgeHover: string;
  dotBg: string;
  businessTag: string;
  spotlightColor: string;
}

export const PROJECT_THEMES: Record<ThemeColorKey, ProjectThemeClasses> = {
  "amber-500": {
    cardBorderHover: "group-hover:border-amber-500/50",
    cardShadowHover: "group-hover:shadow-[0_0_50px_rgba(245,158,11,0.25)]",
    categoryText: "text-amber-400 group-hover:text-amber-300",
    badgeHover:
      "group-hover:border-amber-500/30 group-hover:bg-amber-500/10 group-hover:text-amber-200",
    dotBg: "bg-amber-400",
    businessTag: "border-amber-500/30 text-amber-300 bg-amber-500/10",
    spotlightColor: "rgba(245, 158, 11, 0.16)",
  },
  "violet-500": {
    cardBorderHover: "group-hover:border-violet-500/50",
    cardShadowHover: "group-hover:shadow-[0_0_50px_rgba(139,92,246,0.25)]",
    categoryText: "text-violet-400 group-hover:text-violet-300",
    badgeHover:
      "group-hover:border-violet-500/30 group-hover:bg-violet-500/10 group-hover:text-violet-200",
    dotBg: "bg-violet-400",
    businessTag: "border-violet-500/30 text-violet-300 bg-violet-500/10",
    spotlightColor: "rgba(139, 92, 246, 0.16)",
  },
  "teal-500": {
    cardBorderHover: "group-hover:border-teal-500/50",
    cardShadowHover: "group-hover:shadow-[0_0_50px_rgba(20,184,166,0.25)]",
    categoryText: "text-teal-400 group-hover:text-teal-300",
    badgeHover:
      "group-hover:border-teal-500/30 group-hover:bg-teal-500/10 group-hover:text-teal-200",
    dotBg: "bg-teal-400",
    businessTag: "border-teal-500/30 text-teal-300 bg-teal-500/10",
    spotlightColor: "rgba(20, 184, 166, 0.16)",
  },
} as const;

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  businessTags: readonly string[];
  tags: readonly string[];
  videoUrl: string;
  liveUrl?: string;
  themeColor: ThemeColorKey;
}

export const PROJECTS: readonly Project[] = [
  {
    id: "barber",
    title: "NextBarber",
    category: "Plataforma SaaS Multi-Tenant | Gestão de Barbearias",
    description:
      "Plataforma SaaS multi-tenant completa em produção para gestão de barbearias, com isolamento de dados por unidade, controle granular de acesso (RBAC dinâmico por módulos), blindagem Anti-IDOR, módulos transacionais de PDV/comandas, caixa, DRE, clube de assinaturas via Asaas (PIX e webhooks idempotentes), dashboards executivos sem N+1, previsão de estoque com Curva ABC e Chatbot Concierge de WhatsApp com IA.",
    businessTags: ["SaaS Multi-Tenant", "PDV & Caixa Transacional", "Assinaturas Asaas"],
    tags: [
      "PHP",
      "Laravel",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Docker",
      "Coolify",
    ],
    videoUrl: "/barberflow.mp4",
    liveUrl: "https://barber.starzar.com.br/login",
    themeColor: "amber-500",
  },
  {
    id: "apexia",
    title: "Apexia",
    category: "Plataforma SaaS | Gestão, Governança e Folha de Pagamento",
    description:
      "Plataforma corporativa em produção para gestão de projetos, governança e folha de pagamento multi-modalidade (CLT e PJ) integrada ao Asaas, com liquidação em lote via filas assíncronas, controle de concorrência, estorno automático em falhas e recibos fiscais em PDF. Inclui comunicação em tempo real via WebSockets (presença online, mural por projeto e threads com áudio), Planner 24h com controle de capacidade diária, assistente de IA (Gemini) com RAG/RBAC e integração OAuth2 com Google Calendar e Google Meet.",
    businessTags: ["Governança & Folha", "WebSockets em Tempo Real", "IA & OAuth2"],
    tags: [
      "PHP",
      "Laravel",
      "React",
      "Vite",
      "Tailwind CSS",
      "WebSockets",
      "PostgreSQL",
      "Docker",
      "Coolify",
    ],
    videoUrl: "/apexia.mp4",
    liveUrl: "https://apexia.starzar.com.br/",
    themeColor: "teal-500",
  },
  {
    id: "starzar",
    title: "Starzar",
    category: "Marketplace Digital & Vitrine",
    description:
      "Plataforma web para catálogo digital e intermediação comercial de produtos e serviços, com arquitetura modular de APIs RESTful, autenticação segura, gestão centralizada de catálogo e painel administrativo responsivo.",
    businessTags: ["Catálogo Digital", "Painel Administrativo"],
    tags: [
      "PHP",
      "Laravel",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "MySQL",
      "APIs RESTful",
    ],
    videoUrl: "/starzar.mp4",
    themeColor: "violet-500",
  },
] as const;
