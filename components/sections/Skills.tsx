"use client";

import {
  Code2,
  Cpu,
  Database,
  Layers,
  Server,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

const PROCESS_STEPS = [
  {
    step: "01",
    title: "1. Mapeamento e Regras de Negócio",
    description:
      "Antes de escrever qualquer linha de código, mergulho na operação da sua empresa. Identifico gargalos, fluxos manuais e defino a lógica exata que o software precisará automatizar.",
    icon: Workflow,
    colSpan: "col-span-1 md:col-span-2",
    accent: "from-violet-500/20 to-blue-500/10",
  },
  {
    step: "02",
    title: "2. Arquitetura da Solução",
    description:
      "Desenho a estrutura ideal de banco de dados e integrações para garantir que o sistema seja rápido, seguro e pronto para crescer junto com o negócio.",
    icon: Layers,
    colSpan: "col-span-1",
    accent: "from-blue-500/20 to-cyan-500/10",
  },
  {
    step: "03",
    title: "3. Desenvolvimento e Automação",
    description:
      "Construção robusta utilizando as melhores stacks corporativas (PHP/Laravel, React, Java/Spring Boot e Next.js). Do back-end transacional à interface ágil e responsiva na mão do usuário.",
    icon: Code2,
    colSpan: "col-span-1",
    accent: "from-cyan-500/20 to-violet-500/10",
  },
  {
    step: "04",
    title: "4. Implantação e Sustentação",
    description:
      "Sistemas críticos não podem parar. Realizo o deploy em containers (Docker e Coolify), monitoramento contínuo e refatoração inteligente para garantir estabilidade operacional e alta disponibilidade.",
    icon: ShieldCheck,
    colSpan: "col-span-1 md:col-span-2",
    accent: "from-emerald-500/20 to-teal-500/10",
  },
] as const;

const SKILL_DOMAINS = [
  {
    title: "Back-end",
    icon: Server,
    color: "text-violet-400",
    bgIcon: "bg-violet-500/15",
    borderGlow: "hover:border-violet-400/40",
    spotlight: "rgba(139, 92, 246, 0.14)",
    skills: [
      "PHP",
      "Laravel",
      "Slim Framework",
      "Java",
      "Spring Boot",
      "APIs RESTful",
      "Laravel Sanctum",
      "WebSockets",
      "Filas Assíncronas",
      "Multi-tenancy",
      "RBAC",
      "Segurança OWASP / Anti-IDOR",
    ],
  },
  {
    title: "Front-end",
    icon: Code2,
    color: "text-blue-400",
    bgIcon: "bg-blue-500/15",
    borderGlow: "hover:border-blue-400/40",
    spotlight: "rgba(59, 130, 246, 0.14)",
    skills: [
      "React.js",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "Vite",
      "Tailwind CSS",
      "Axios",
      "Laravel Echo",
    ],
  },
  {
    title: "Bancos de Dados",
    icon: Database,
    color: "text-cyan-400",
    bgIcon: "bg-cyan-500/15",
    borderGlow: "hover:border-cyan-400/40",
    spotlight: "rgba(6, 182, 212, 0.14)",
    skills: [
      "SQL Avançado",
      "PostgreSQL",
      "MySQL",
      "Oracle OCI",
      "Otimização de Queries",
      "Migração de Dados",
    ],
  },
  {
    title: "Integrações & IA",
    icon: Cpu,
    color: "text-amber-400",
    bgIcon: "bg-amber-500/15",
    borderGlow: "hover:border-amber-400/40",
    spotlight: "rgba(245, 158, 11, 0.14)",
    skills: [
      "Gateway Asaas (PIX, Recorrência, Webhooks)",
      "Google Calendar / Meet OAuth2",
      "APIs OpenAI & Gemini (RAG e Function Calling)",
      "WhatsApp Webhooks",
    ],
  },
  {
    title: "Infraestrutura & Qualidade",
    icon: ShieldCheck,
    color: "text-emerald-400",
    bgIcon: "bg-emerald-500/15",
    borderGlow: "hover:border-emerald-400/40",
    spotlight: "rgba(16, 185, 129, 0.14)",
    skills: [
      "Docker",
      "Nginx",
      "Coolify",
      "Git & GitHub",
      "CI/CD",
      "Scrum & Kanban",
    ],
  },
] as const;

function BentoProcessCard({
  item,
  index,
}: {
  item: (typeof PROCESS_STEPS)[number];
  index: number;
}) {
  const Icon = item.icon;

  return (
    <Reveal delay={index * 90} className={item.colSpan}>
      <SpotlightCard
        className="h-full p-8 hover:border-violet-400/40 hover:shadow-[0_0_40px_rgba(139,92,246,0.18)]"
        spotlightColor="rgba(139, 92, 246, 0.16)"
      >
        <div className="flex h-full flex-col justify-between">
          <div>
            <div className="mb-6 flex items-center justify-between">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.accent} text-violet-300 ring-1 ring-white/10 backdrop-blur-sm transition duration-500 group-hover:scale-110`}
              >
                <Icon className="h-6 w-6" />
              </div>
              <span className="font-mono text-xs font-semibold tracking-wider text-zinc-500 transition-colors duration-300 group-hover:text-violet-400">
                FASE {item.step}
              </span>
            </div>

            <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-[15px]">
              {item.description}
            </p>
          </div>
        </div>
      </SpotlightCard>
    </Reveal>
  );
}

export function Skills() {
  return (
    <section
      id="sobre"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32 lg:py-36"
    >
      {/* Ambient Atmospheric Glows */}
      <div
        className="pointer-events-none absolute -left-32 top-1/4 -z-10 h-[480px] w-[480px] rounded-full bg-blue-600/10 blur-[130px] mix-blend-screen"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-12 -z-10 h-[420px] w-[420px] rounded-full bg-violet-600/10 blur-[120px] mix-blend-screen"
        aria-hidden="true"
      />

      <Reveal className="mb-10 sm:mb-12">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-violet-400">
          01 — Metodologia & Competências
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Como eu penso e construo software
        </h2>
        <p className="mt-3 max-w-2xl text-zinc-400 leading-relaxed">
          Traduzo regras de negócio complexas em arquiteturas modulares, seguras e de alta
          disponibilidade. Da análise do problema real à entrega em produção.
        </p>
      </Reveal>

      {/* Bento Grid Layout (2-1 / 1-2 alternating columns) */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mb-12">
        {PROCESS_STEPS.map((step, index) => (
          <BentoProcessCard key={step.step} item={step} index={index} />
        ))}
      </div>

      {/* Categorized Skills / Stack Grid */}
      <Reveal delay={120}>
        <div className="mb-6">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-zinc-400">
            Stack Técnica & Especialidades
          </p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">
            Domínios de Engenharia
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_DOMAINS.map((domain) => {
            const Icon = domain.icon;
            return (
              <SpotlightCard
                key={domain.title}
                spotlightColor={domain.spotlight}
                whileHover={{ y: -5 }}
                className={`p-6 transition-all duration-300 ${domain.borderGlow}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${domain.bgIcon} ${domain.color} ring-1 ring-white/10`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <h4 className="text-base font-semibold text-white">
                    {domain.title}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-2">
                  {domain.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/[0.06] bg-white/[0.02] px-2.5 py-1 text-xs text-zinc-300 font-medium transition-colors hover:border-white/20 hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
