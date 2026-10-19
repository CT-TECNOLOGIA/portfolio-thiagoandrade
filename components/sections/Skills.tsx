"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
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

function ServiceCard({
  service,
  index,
}: {
  service: (typeof SERVICES)[number];
  index: number;
}) {
  const Icon = service.icon;
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <Reveal delay={index * 110}>
      <motion.article
        onMouseMove={handleMouseMove}
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className="group relative h-full overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-md transition-all duration-500 hover:border-violet-400/40 hover:shadow-[0_0_40px_rgba(139,92,246,0.2)]"
      >
        {/* Mouse Spotlight Glow */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                320px circle at ${mouseX}px ${mouseY}px,
                rgba(139, 92, 246, 0.18),
                transparent 80%
              )
            `,
          }}
          aria-hidden="true"
        />

        <div className="relative z-10">
          <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600/30 to-blue-600/20 text-violet-300 ring-1 ring-white/10 backdrop-blur-sm transition duration-500 group-hover:scale-105 group-hover:bg-violet-600/40">
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="text-[17px] font-semibold leading-snug text-white">
            {service.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400">
            {service.description}
          </p>
        </div>
      </motion.article>
    </Reveal>
  );
}

export function Skills() {
  return (
    <section
      id="sobre"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32 lg:py-36"
    >
      {/* Elegant Section Divider */}
      <motion.div
        className="h-[1px] w-full max-w-xl mx-auto bg-gradient-to-r from-transparent via-white/15 to-transparent mb-16 md:mb-24"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

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

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service, index) => (
          <ServiceCard key={service.name} service={service} index={index} />
        ))}
      </div>

      <Reveal delay={180} className="mt-8 flex flex-wrap gap-3">
        {TECH_TAGS.map(({ name, icon: Icon }) => (
          <motion.span
            key={name}
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] backdrop-blur-md px-4 py-2.5 text-sm text-zinc-200 transition-colors duration-300 hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-white"
          >
            <Icon className="h-4 w-4 text-violet-400" />
            {name}
          </motion.span>
        ))}
      </Reveal>
    </section>
  );
}
