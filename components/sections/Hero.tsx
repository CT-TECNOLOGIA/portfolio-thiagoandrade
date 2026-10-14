"use client";

import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { handleSmoothNavClick } from "@/lib/scroll";

const ARCHITECTURE_ROWS = [
  { label: "Regras de negócio", value: "Modelagem" },
  { label: "APIs RESTful", value: "Resilientes" },
  { label: "Sistemas críticos", value: "Em produção" },
  { label: "MVPs e SaaS", value: "Do zero à escala" },
] as const;

export function Hero() {
  return (
    <section className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-32 sm:px-8 sm:pt-40 lg:grid-cols-[1.12fr_0.88fr] lg:gap-14 lg:pb-28">
      <Reveal>
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-500/25 bg-violet-500/10 px-3 py-1 text-xs font-medium tracking-wide text-violet-300">
          <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
          Analista e Desenvolvedor
        </p>
        <h1 className="max-w-2xl text-4xl font-semibold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-[3.15rem]">
          Transformando lógica de negócios em softwares escaláveis e de alto
          desempenho.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
          Como Analista e Desenvolvedor, atuo desde o planejamento da
          arquitetura até a entrega do produto final. Construo MVPs para
          novas ideias, modernizo sistemas legados e desenvolvo integrações
          robustas para empresas de diversos setores.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#projetos"
            onClick={handleSmoothNavClick}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-6 py-3 text-sm font-medium text-white shadow-[0_0_32px_rgba(139,92,246,0.28)] transition duration-300 hover:brightness-110"
          >
            Ver Projetos
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="#contato"
            onClick={handleSmoothNavClick}
            className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.04] px-6 py-3 text-sm font-medium text-zinc-100 transition duration-300 hover:border-violet-400/40 hover:bg-white/[0.08]"
          >
            Entrar em Contato
          </a>
        </div>
      </Reveal>

      <Reveal delay={160}>
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:p-6">
          <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">
            Arquitetura → Entrega
          </p>
          <div className="space-y-3">
            {ARCHITECTURE_ROWS.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.03] px-4 py-3.5 transition duration-300 hover:border-violet-400/25"
              >
                <span className="text-sm text-zinc-300">{item.label}</span>
                <span className="shrink-0 rounded-full bg-violet-500/15 px-2.5 py-1 text-xs text-violet-300">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
