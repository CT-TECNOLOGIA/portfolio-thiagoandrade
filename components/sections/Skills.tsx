"use client";

import { motion } from "framer-motion";
import {
  Boxes,
  Code2,
  Database,
  GitBranch,
  Layers,
  Server,
  ShieldCheck,
  Smartphone,
  Webhook,
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
      "Construção robusta utilizando as melhores stacks de mercado (Laravel, React Native, Next.js). Do back-end invisível à interface na palma da mão do seu cliente.",
    icon: Code2,
    colSpan: "col-span-1",
    accent: "from-cyan-500/20 to-violet-500/10",
  },
  {
    step: "04",
    title: "4. Implantação e Sustentação",
    description:
      "Sistemas críticos não podem parar. Realizo o deploy, monitoramento contínuo e refatoração inteligente para garantir estabilidade, segurança e zero interrupções na sua operação, seja qual for o seu nicho de mercado.",
    icon: ShieldCheck,
    colSpan: "col-span-1 md:col-span-2",
    accent: "from-emerald-500/20 to-teal-500/10",
  },
] as const;

const TECH_TAGS = [
  { name: "Laravel", icon: Server },
  { name: "PHP", icon: Code2 },
  { name: "Spring Boot", icon: Boxes },
  { name: "React Native", icon: Smartphone },
  { name: "SQL", icon: Database },
  { name: "Modelagem Relacional", icon: GitBranch },
  { name: "Arquitetura de Software", icon: Layers },
  { name: "APIs RESTful", icon: Webhook },
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
          01 — Sobre e Processo
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Sobre mim e processo
        </h2>
        <p className="mt-3 max-w-2xl text-zinc-400 leading-relaxed">
          Não escrevo apenas código. Eu traduzo as regras do seu negócio em
          plataformas seguras, escaláveis e prontas para o mercado. Meu foco é
          entender o problema real antes de desenhar a arquitetura da solução.
        </p>
      </Reveal>

      {/* Bento Grid Layout (2-1 / 1-2 alternating columns) */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {PROCESS_STEPS.map((step, index) => (
          <BentoProcessCard key={step.step} item={step} index={index} />
        ))}
      </div>

      <Reveal delay={180} className="mt-10 flex flex-wrap gap-3">
        {TECH_TAGS.map(({ name, icon: Icon }) => (
          <motion.span
            key={name}
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] backdrop-blur-md px-4 py-2 text-xs sm:text-sm text-zinc-300 transition-colors duration-300 hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-white"
          >
            <Icon className="h-4 w-4 text-violet-400" />
            {name}
          </motion.span>
        ))}
      </Reveal>
    </section>
  );
}
