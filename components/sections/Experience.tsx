import { Briefcase, Compass, Download, FileText } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SOCIAL } from "@/lib/constants";

function CurriculumBox() {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5">
      <div className="flex min-w-0 items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300 ring-1 ring-white/10">
          <FileText className="h-4 w-4" />
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-white">Currículo Completo</p>
          <p className="truncate text-xs text-zinc-400">Baixe a versão técnica</p>
        </div>
      </div>
      <a
        href={SOCIAL.curriculo}
        download={SOCIAL.curriculoFileName}
        className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-3.5 py-2 text-xs font-medium text-white shadow-[0_0_20px_rgba(139,92,246,0.25)] transition duration-300 hover:brightness-110"
      >
        Baixar PDF
        <Download className="h-3.5 w-3.5" />
      </a>
    </div>
  );
}

export function Experience() {
  return (
    <section
      id="experiencia"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24"
    >
      <Reveal className="mb-10 sm:mb-12">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-violet-400">
          03 — Experiência
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Experiência e visão
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <Reveal>
            <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-8">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300 ring-1 ring-white/10">
                <Briefcase className="h-5 w-5" />
              </div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-blue-300">
                Experiência
              </p>
              <h3 className="mt-3 text-xl font-semibold leading-snug text-white">
                Desenvolvedor e Analista de Software (PJ) — Setor de Saúde
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-zinc-400">
                Atuei no planejamento arquitetural da versão 2.0 de uma
                plataforma de saúde, desenhando soluções para sistemas
                críticos e traduzindo requisitos de negócio em regras de
                software consistentes, auditáveis e prontas para escala.
                Também realizei a sustentação de sistemas em produção,
                garantindo estabilidade e refatoração de sistemas legados
                para modernização de código e banco de dados.
              </p>
            </article>
          </Reveal>
          <Reveal delay={120}>
            <CurriculumBox />
          </Reveal>
        </div>

        <Reveal delay={180}>
          <article className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-8">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-300 ring-1 ring-white/10">
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
              softwares de gestão hoteleira e turismo, além de sistemas de
              integração para equipamentos — com foco em produto, operação
              real e entrega de valor para o mercado.
            </p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
