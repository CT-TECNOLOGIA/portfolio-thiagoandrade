"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { PROJECTS, PROJECT_THEMES } from "@/lib/constants";

export function Projects() {
  return (
    <section
      id="projetos"
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
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[650px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/12 blur-[140px] mix-blend-screen"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-20 -z-10 h-[480px] w-[480px] rounded-full bg-blue-600/10 blur-[130px] mix-blend-screen"
        aria-hidden="true"
      />

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
        {PROJECTS.map((project, index) => {
          const theme = PROJECT_THEMES[project.themeColor];

          return (
            <Reveal key={project.id} delay={index * 120}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-md p-4 transition-all duration-500 hover:bg-white/[0.04] ${theme.cardBorderHover} ${theme.cardShadowHover}`}
              >
                {/* Media / Video Preview */}
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/[0.06] bg-black/40">
                  <video
                    src={project.videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover opacity-50 grayscale mix-blend-luminosity transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0 group-hover:mix-blend-normal"
                  />
                  {/* Subtle dark vignette overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-10" />

                  {/* Corner indicator badge */}
                  <div className="pointer-events-none absolute top-3 left-3 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/60 px-2.5 py-1 backdrop-blur-md">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${theme.dotBg} animate-pulse`}
                    />
                    <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-300">
                      Demo
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
                  <p
                    className={`text-[11px] font-medium uppercase tracking-[0.18em] transition-colors duration-300 ${theme.categoryText}`}
                  >
                    {project.category}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                    {project.description}
                  </p>

                  {/* Tags / Badges */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-full border border-white/[0.06] bg-black/30 backdrop-blur-sm px-2.5 py-1 font-mono text-[11px] text-zinc-300 transition-all duration-300 ${theme.badgeHover}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
