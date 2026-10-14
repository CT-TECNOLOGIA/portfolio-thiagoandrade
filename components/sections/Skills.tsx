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
  Wrench,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

const SERVICES = [
  {
    name: "Desenvolvimento Fullstack",
    description: "Do contrato da API à interface — uma entrega coerente ponta a ponta.",
    icon: Code2,
  },
  {
    name: "Sustentação de Sistemas",
    description: "Estabilidade em produção, monitoramento e evolução contínua.",
    icon: ShieldCheck,
  },
  {
    name: "Refatoração de Legado",
    description: "Modernização de código e banco sem interromper a operação.",
    icon: Wrench,
  },
  {
    name: "Desenvolvimento Mobile",
    description: "Aplicativos nativos com fluxos claros para o dia a dia do usuário.",
    icon: Smartphone,
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

export function Skills() {
  return (
    <section
      id="sobre"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24"
    >
      <Reveal className="mb-10 sm:mb-12">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-violet-400">
          01 — Sobre
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Habilidades
        </h2>
        <p className="mt-3 max-w-2xl text-zinc-400">
          Especialidades que conectam análise, arquitetura e entrega — do
          sistema crítico ao aplicativo no bolso.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service, index) => {
          const Icon = service.icon;
          return (
            <Reveal key={service.name} delay={index * 110}>
              <article className="group h-full rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-500 hover:-translate-y-1 hover:border-violet-400/35 hover:bg-white/[0.05] hover:shadow-[0_0_32px_rgba(139,92,246,0.16)]">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600/30 to-blue-600/20 text-violet-300 ring-1 ring-white/10 transition duration-500 group-hover:scale-105">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-[17px] font-semibold leading-snug text-white">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {service.description}
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={180} className="mt-8 flex flex-wrap gap-3">
        {TECH_TAGS.map(({ name, icon: Icon }) => (
          <span
            key={name}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-zinc-200 transition duration-300 hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-white"
          >
            <Icon className="h-4 w-4 text-violet-400" />
            {name}
          </span>
        ))}
      </Reveal>
    </section>
  );
}
