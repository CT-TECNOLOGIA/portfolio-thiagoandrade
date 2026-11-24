"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  CheckCircle2,
  Compass,
  Download,
  FileText,
  GraduationCap,
  MapPin,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { SOCIAL } from "@/lib/constants";

const DELIVERABLES = [
  "Atuei como referência técnica liderando uma equipe com outros 2 desenvolvedores juniores na modernização arquitetural do sistema CMS, migrando módulos legados em PHP Slim para Java (Spring Boot) e React/TypeScript.",
  "Refatorei consultas SQL complexas e integrações com Oracle OCI, reduzindo o tempo médio de resposta em 57% (de 1m10s para 30s) e viabilizando dashboards clínicos em tempo real (Protocolo Manchester e SLA de Triagem) para diretorias hospitalares.",
  "Conduzi a migração de 100% dos módulos do CMS de PostgreSQL para Oracle OCI, atuando junto a DBAs no mapeamento de tabelas, saneamento de dados e integração com o e-SUS sem perda de histórico analítico.",
  "Implementei estratégias de resiliência e fallbacks nas APIs e no front-end, prevenindo quebras de interface diante de instabilidades de rede ou inconsistências de dados.",
] as const;

function CurriculumBox() {
  return (
    <SpotlightCard
      as="div"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 backdrop-blur-md transition-all duration-300 hover:border-violet-400/35 hover:bg-white/[0.035] hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]"
      spotlightColor="rgba(139, 92, 246, 0.14)"
    >
      <div className="flex min-w-0 items-center gap-3.5">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300 ring-1 ring-white/10 backdrop-blur-sm">
          <FileText className="h-5 w-5" />
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-white">Currículo ATS Atualizado</p>
          <p className="text-xs text-zinc-400 mt-0.5">
            Desenvolvedor Full Stack — PHP / Laravel | React | Java
          </p>
        </div>
      </div>
      <motion.a
        href={SOCIAL.curriculo}
        download={SOCIAL.curriculoFileName}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-4 py-2.5 text-xs font-semibold text-white shadow-[0_0_20px_rgba(139,92,246,0.25)] transition duration-300 hover:brightness-110"
      >
        <span>Baixar PDF</span>
        <Download className="h-3.5 w-3.5" />
      </motion.a>
    </SpotlightCard>
  );
}

export function Experience() {
  return (
    <section
      id="experiencia"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32 lg:py-36"
    >
      {/* Ambient Atmospheric Glows */}
      <div
        className="pointer-events-none absolute -left-36 top-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-blue-600/12 blur-[140px] mix-blend-screen"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-28 bottom-10 -z-10 h-[450px] w-[450px] rounded-full bg-indigo-600/10 blur-[130px] mix-blend-screen"
        aria-hidden="true"
      />

      <Reveal className="mb-10 sm:mb-12">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-violet-400">
          03 — Experiência
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Trajetória profissional e formação
        </h2>
        <p className="mt-3 max-w-2xl text-zinc-400 leading-relaxed">
          Histórico comprovado em engenharia de sistemas críticos, modernização arquitetural e
          desenvolvimento de soluções de alto impacto.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Main Experience Column (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <Reveal>
            <SpotlightCard
              spotlightColor="rgba(59, 130, 246, 0.16)"
              whileHover={{ y: -6 }}
              className="p-7 sm:p-8 hover:border-blue-400/40 hover:bg-white/[0.035] hover:shadow-[0_0_40px_rgba(59,130,246,0.18)]"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300 ring-1 ring-white/10 backdrop-blur-sm">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white">
                      Inova Inteligência e Gestão em Saúde
                    </h3>
                    <p className="text-xs font-medium text-blue-300">
                      Parceira MV
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 font-mono text-xs text-blue-200">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>Mar/2025 – Jul/2026</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-zinc-400 mb-6 pb-5 border-b border-white/[0.06]">
                <span className="font-semibold text-zinc-200">
                  Desenvolvedor Full Stack / Analista de Sistemas
                </span>
                <span>•</span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-3 w-3" /> Híbrido
                </span>
              </div>

              <div className="space-y-4">
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500">
                  Principais Entregas & Impacto:
                </p>
                {DELIVERABLES.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-400 mt-1" />
                    <p className="text-sm leading-relaxed text-zinc-300">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </Reveal>

          <Reveal delay={100}>
            <CurriculumBox />
          </Reveal>
        </div>

        {/* Side Column: Education & Production Products (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <Reveal delay={140}>
            <SpotlightCard
              spotlightColor="rgba(139, 92, 246, 0.16)"
              whileHover={{ y: -6 }}
              className="p-7 sm:p-8 hover:border-violet-400/40 hover:bg-white/[0.035] hover:shadow-[0_0_40px_rgba(139,92,246,0.18)]"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-300 ring-1 ring-white/10 backdrop-blur-sm">
                <GraduationCap className="h-5 w-5" />
              </div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-violet-300">
                Formação Acadêmica
              </p>
              <h3 className="mt-3 text-lg font-semibold leading-snug text-white">
                Análise e Desenvolvimento de Sistemas (Nível Superior)
              </h3>
              <p className="mt-1 text-xs font-medium text-violet-300">
                Senac EAD São Paulo
              </p>
              <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-violet-500/20 bg-violet-500/10 px-2.5 py-0.5 font-mono text-[11px] text-violet-200">
                <Calendar className="h-3 w-3" />
                <span>2023 – 2026</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                Formação superior com sólida base em engenharia de software, modelagem relacional de dados, arquiteturas corporativas e desenvolvimento de aplicações web seguras e escaláveis.
              </p>
            </SpotlightCard>
          </Reveal>

          <Reveal delay={200}>
            <SpotlightCard
              spotlightColor="rgba(20, 184, 166, 0.16)"
              whileHover={{ y: -6 }}
              className="p-7 sm:p-8 hover:border-teal-400/40 hover:bg-white/[0.035] hover:shadow-[0_0_40px_rgba(20,184,166,0.18)]"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-500/15 text-teal-300 ring-1 ring-white/10 backdrop-blur-sm">
                <Compass className="h-5 w-5" />
              </div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-teal-300">
                Engenharia de Produto
              </p>
              <h3 className="mt-3 text-lg font-semibold leading-snug text-white">
                Plataformas SaaS em Produção
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                Desenvolvimento de soluções completas de software como serviço (<span className="text-zinc-200">NextBarber</span> e <span className="text-zinc-200">Apexia</span>), com foco em multi-tenancy, isolamento de escopo Anti-IDOR, filas assíncronas, liquidação financeira com Asaas e WebSockets em tempo real.
              </p>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
