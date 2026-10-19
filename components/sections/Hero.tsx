"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { handleSmoothNavClick } from "@/lib/scroll";

const ARCHITECTURE_ROWS = [
  { label: "Mapeamento de Processos", value: "Automação" },
  { label: "Sistemas Críticos", value: "Estabilidade 24/7" },
  { label: "Desenvolvimento de SaaS", value: "Escala Regional" },
] as const;

export function Hero() {
  return (
    <section className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-24 pt-32 sm:px-8 sm:pb-32 sm:pt-40 lg:grid-cols-[1.12fr_0.88fr] lg:gap-14 lg:pb-36">
      {/* Localized Ambient Glow */}
      <div
        className="pointer-events-none absolute -right-20 top-1/4 -z-10 h-[450px] w-[450px] rounded-full bg-violet-600/15 blur-[130px] mix-blend-screen"
        aria-hidden="true"
      />

      <Reveal>
        <motion.div
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-500/25 bg-violet-500/10 px-3 py-1 text-xs font-medium tracking-wide text-violet-300 backdrop-blur-sm shadow-[0_0_15px_rgba(139,92,246,0.12)]"
          animate={{ y: [-3, 3, -3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
          Analista e Desenvolvedor
        </motion.div>
        <h1 className="max-w-2xl text-4xl font-semibold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-[3.15rem]">
          Transformando lógica de negócios em softwares escaláveis e de alto
          desempenho.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
          Como Analista e Desenvolvedor, atuo desde o planejamento da
          arquitetura até a entrega do produto final. Construo MVPs para
          novas ideias, modernizo sistemas legados e desenvolvo integrações
          para empresas de diversos setores.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <motion.a
            href="#contato"
            onClick={handleSmoothNavClick}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-6 py-3 text-sm font-medium text-white shadow-[0_0_32px_rgba(139,92,246,0.28)] transition duration-300 hover:brightness-110"
          >
            Analisar meu projeto
            <ArrowUpRight className="h-4 w-4" />
          </motion.a>
          <motion.a
            href="#projetos"
            onClick={handleSmoothNavClick}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="inline-flex items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] px-6 py-3 text-sm font-medium text-zinc-100 backdrop-blur-sm transition duration-300 hover:border-violet-400/40 hover:bg-white/[0.06]"
          >
            Ver Projetos
          </motion.a>
        </div>
      </Reveal>

      <Reveal delay={160}>
        <SpotlightCard
          whileHover={{ y: -5, boxShadow: "0 10px 40px -10px rgba(139,92,246,0.2)" }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          spotlightColor="rgba(139, 92, 246, 0.15)"
          className="p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] sm:p-7 hover:border-violet-400/30"
        >
          <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">
            Arquitetura → Entrega
          </p>
          <div className="space-y-3.5">
            {ARCHITECTURE_ROWS.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between gap-3 rounded-2xl border border-white/[0.05] bg-white/[0.02] px-4 py-3.5 backdrop-blur-sm transition duration-300 hover:border-violet-400/30 hover:bg-white/[0.04]"
              >
                <span className="text-sm font-medium text-zinc-200">{item.label}</span>
                <span className="shrink-0 rounded-full bg-violet-500/15 px-3 py-1 font-mono text-xs font-medium text-violet-300 border border-violet-500/20">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </SpotlightCard>
      </Reveal>
    </section>
  );
}
