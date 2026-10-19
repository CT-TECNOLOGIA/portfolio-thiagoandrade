"use client";

import { motion } from "framer-motion";
import { Briefcase, Compass, Download, FileText } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { SOCIAL } from "@/lib/constants";

function CurriculumBox() {
  return (
    <SpotlightCard
      as="div"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      className="flex items-center justify-between gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-4 py-3.5 backdrop-blur-md transition-all duration-300 hover:border-violet-400/35 hover:bg-white/[0.035] hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]"
      spotlightColor="rgba(139, 92, 246, 0.14)"
    >
      <div className="flex min-w-0 items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300 ring-1 ring-white/10 backdrop-blur-sm">
          <FileText className="h-4 w-4" />
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-white">Currículo Completo</p>
          <p className="truncate text-xs text-zinc-400">Baixe a versão técnica</p>
        </div>
      </div>
      <motion.a
        href={SOCIAL.curriculo}
        download={SOCIAL.curriculoFileName}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-3.5 py-2 text-xs font-medium text-white shadow-[0_0_20px_rgba(139,92,246,0.25)] transition duration-300 hover:brightness-110"
      >
        Baixar PDF
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
          Experiência e visão
        </h2>
        <p className="mt-3 max-w-2xl text-zinc-400 leading-relaxed">
          Histórico em engenharia de sistemas críticos, sustentação em produção e visão de produto para soluções de alto impacto.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <Reveal>
            <SpotlightCard
              spotlightColor="rgba(59, 130, 246, 0.16)"
              whileHover={{ y: -8 }}
              className="p-7 sm:p-8 hover:border-blue-400/40 hover:bg-white/[0.035] hover:shadow-[0_0_40px_rgba(59,130,246,0.18)]"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300 ring-1 ring-white/10 backdrop-blur-sm transition-transform duration-500 group-hover:scale-105">
                <Briefcase className="h-5 w-5" />
              </div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-blue-300">
                Experiência
              </p>
              <h3 className="mt-3 text-xl font-semibold leading-snug text-white">
                Desenvolvedor e Analista de Software (PJ) — Plataformas Críticas
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-zinc-400">
                Atuei no planejamento arquitetural de plataformas de alta
                complexidade, desenhando soluções para sistemas críticos e
                traduzindo regras de negócio complexas em software
                consistente, auditável e pronto para escala. Também realizei
                a sustentação de sistemas em produção, garantindo estabilidade
                operacional contínua e modernização de código e banco de
                dados sem paradas não planejadas.
              </p>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={120}>
            <CurriculumBox />
          </Reveal>
        </div>

        <Reveal delay={180}>
          <SpotlightCard
            spotlightColor="rgba(139, 92, 246, 0.16)"
            whileHover={{ y: -8 }}
            className="h-full p-7 sm:p-8 hover:border-violet-400/40 hover:bg-white/[0.035] hover:shadow-[0_0_40px_rgba(139,92,246,0.18)]"
          >
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-300 ring-1 ring-white/10 backdrop-blur-sm transition-transform duration-500 group-hover:scale-105">
              <Compass className="h-5 w-5" />
            </div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-violet-300">
              Visão de produto
            </p>
            <h3 className="mt-3 text-xl font-semibold leading-snug text-white">
              SaaS regionais com impacto operacional
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-zinc-400">
              O roadmap inclui a criação de soluções SaaS regionais —
              softwares de gestão operacional e automação comercial, além de sistemas de
              integração de dados — com foco em produto, resolução de gargalos
              e entrega de valor contínuo para o mercado.
            </p>
          </SpotlightCard>
        </Reveal>
      </div>
    </section>
  );
}
