import { Reveal } from "@/components/Reveal";

const PROJECTS = [
  {
    id: "barber",
    title: "BarberFlow",
    category: "MVP / Sistema SaaS",
    description:
      "Plataforma completa para gestão e operação de barbearias. Arquitetura de regras de negócio, layouts intuitivos e controle de acesso diferenciado para administradores e barbeiros.",
    tags: ["Laravel", "React Native", "SQL"],
  },
  {
    id: "starzar",
    title: "Starzar",
    category: "Marketplace Digital",
    description:
      "Plataforma de transações e vitrine digital conectando múltiplos usuários com fluxo de dados seguro e performance em ecossistemas complexos.",
    tags: ["Laravel", "React Native", "Integração de APIs"],
  },
  {
    id: "tasks",
    title: "Gestor de Tarefas",
    category: "Ferramenta de Produtividade",
    description:
      "Aplicação ágil para organização pessoal com gestão de estado e operações de CRUD em tempo real.",
    tags: ["Laravel", "React Native"],
  },
] as const;

function DashboardPreview({ variant }: { variant: (typeof PROJECTS)[number]["id"] }) {
  if (variant === "barber") {
    return (
      <div className="relative h-48 overflow-hidden rounded-2xl border border-white/8 bg-[#0b0d18]">
        <div className="dashboard-screen absolute inset-3 rounded-xl border border-white/8 bg-gradient-to-br from-[#14182b] to-[#0d1020] p-3">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="dashboard-dot h-2 w-2 rounded-full bg-violet-400" />
              <span className="h-1.5 w-16 rounded-full bg-white/15" />
            </div>
            <span className="rounded-md bg-violet-500/20 px-2 py-0.5 font-mono text-[9px] text-violet-300">
              Ao vivo
            </span>
          </div>
          <div className="grid grid-cols-[52px_1fr] gap-2">
            <div className="space-y-1.5 rounded-lg bg-black/30 p-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-1.5 rounded-full bg-white/10" />
              ))}
            </div>
            <div>
              <div className="mb-2 flex h-12 items-end gap-1">
                {[40, 70, 55, 90, 48, 78, 62].map((h, i) => (
                  <div
                    key={i}
                    className="dashboard-bar flex-1 rounded-t bg-gradient-to-t from-violet-700 to-blue-400"
                    style={{ height: `${h}%`, animationDelay: `${i * 90}ms` }}
                  />
                ))}
              </div>
              <div className="space-y-1.5">
                <div className="h-1.5 w-full rounded-full bg-white/10" />
                <div className="h-1.5 w-2/3 rounded-full bg-white/10" />
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-float dashboard-float-a absolute top-4 right-3 w-[42%] rounded-xl border border-violet-400/20 bg-[#151933]/95 p-2.5 shadow-xl backdrop-blur-sm">
          <p className="font-mono text-[9px] uppercase tracking-wider text-zinc-500">Agenda</p>
          <p className="mt-1 text-xs font-medium text-white">12 cortes hoje</p>
          <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
            <div className="dashboard-progress h-full w-2/3 rounded-full bg-violet-400" />
          </div>
        </div>
        <div className="dashboard-float dashboard-float-b absolute bottom-3 left-4 rounded-xl border border-white/10 bg-[#12162a]/95 px-3 py-2 shadow-xl backdrop-blur-sm">
          <p className="text-[10px] text-zinc-400">Faturamento</p>
          <p className="text-sm font-semibold text-white">R$ 4.280</p>
        </div>
        <div className="dashboard-shimmer pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent opacity-0 group-hover/card:opacity-100" />
      </div>
    );
  }

  if (variant === "starzar") {
    return (
      <div className="relative h-48 overflow-hidden rounded-2xl border border-white/8 bg-[#0b0d18]">
        <div className="dashboard-screen absolute inset-3 rounded-xl border border-white/8 bg-gradient-to-br from-[#121a2e] to-[#0c1220] p-3">
          <div className="mb-3 flex gap-2">
            <span className="h-1.5 flex-1 rounded-full bg-white/12" />
            <span className="h-1.5 w-10 rounded-full bg-blue-400/40" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="rounded-lg border border-white/8 bg-white/4 p-2">
                <div className="mb-2 h-8 rounded-md bg-gradient-to-br from-blue-500/30 to-violet-500/20" />
                <div className="h-1.5 w-3/4 rounded-full bg-white/15" />
              </div>
            ))}
          </div>
        </div>
        <div className="dashboard-float dashboard-float-a absolute top-5 right-3 w-[44%] rounded-xl border border-blue-400/25 bg-[#132036]/95 p-2.5 shadow-xl backdrop-blur-sm">
          <p className="font-mono text-[9px] text-blue-300">Pedido #1842</p>
          <p className="mt-1 text-xs text-white">Pagamento confirmado</p>
        </div>
        <div className="dashboard-float dashboard-float-b absolute bottom-3 left-3 flex h-12 items-end gap-0.5 rounded-xl border border-white/10 bg-[#10182a]/95 px-2.5 py-2 shadow-xl">
          {[30, 55, 40, 80, 62, 90, 48].map((h, i) => (
            <div
              key={i}
              className="dashboard-bar w-1.5 rounded-sm bg-blue-400"
              style={{ height: `${h}%`, animationDelay: `${i * 80}ms` }}
            />
          ))}
        </div>
        <div className="dashboard-shimmer pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent opacity-0 group-hover/card:opacity-100" />
      </div>
    );
  }

  return (
    <div className="relative h-48 overflow-hidden rounded-2xl border border-white/8 bg-[#0b0d18]">
      <div className="dashboard-screen absolute inset-3 rounded-xl border border-white/8 bg-gradient-to-br from-[#15182a] to-[#0e1120] p-3">
        <div className="mb-3 flex items-center justify-between">
          <span className="h-1.5 w-20 rounded-full bg-white/15" />
          <span className="dashboard-dot h-2 w-2 rounded-full bg-emerald-400" />
        </div>
        <div className="space-y-2">
          {["Board semanal", "CRUD em tempo real", "Prioridade alta"].map((label, i) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-lg border border-white/6 bg-white/4 px-2.5 py-2"
            >
              <span
                className={`h-3.5 w-3.5 rounded border ${
                  i < 2 ? "border-violet-400 bg-violet-400/70" : "border-white/20"
                }`}
              />
              <span className="text-[11px] text-zinc-300">{label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="dashboard-float dashboard-float-a absolute top-4 right-3 rounded-xl border border-violet-400/20 bg-[#161b32]/95 px-3 py-2 shadow-xl">
        <p className="text-[10px] text-zinc-400">Concluídas</p>
        <p className="text-sm font-semibold text-white">3 / 8</p>
      </div>
      <div className="dashboard-float dashboard-float-b absolute bottom-3 left-4 w-[46%] rounded-xl border border-white/10 bg-[#12162a]/95 p-2.5 shadow-xl">
        <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
          <div className="dashboard-progress h-full w-2/5 rounded-full bg-gradient-to-r from-violet-500 to-blue-400" />
        </div>
      </div>
      <div className="dashboard-shimmer pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent opacity-0 group-hover/card:opacity-100" />
    </div>
  );
}

export function Projects() {
  return (
    <section
      id="projetos"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24"
    >
      <Reveal className="mb-10 sm:mb-12">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-violet-400">
          02 — Projetos
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Produtos que saíram do papel
        </h2>
        <p className="mt-3 max-w-2xl text-zinc-400">
          Do MVP à operação real: plataformas com regras de negócio, acesso
          controlado e fluxos pensados para quem usa no dia a dia.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <Reveal key={project.title} delay={index * 120}>
            <article className="group/card flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-4 transition duration-500 hover:-translate-y-1.5 hover:border-violet-400/50 hover:bg-white/[0.05] hover:shadow-[0_0_48px_rgba(139,92,246,0.32)]">
              <DashboardPreview variant={project.id} />
              <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-violet-300">
                  {project.category}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/8 bg-black/25 px-2.5 py-1 font-mono text-[11px] text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
