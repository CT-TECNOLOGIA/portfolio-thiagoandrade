"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from "@/components/icons";
import { SOCIAL } from "@/lib/constants";

function EmailContactButton() {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(SOCIAL.email);
      setCopied(true);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Continua o mailto mesmo se a área de transferência falhar.
    }
  };

  return (
    <motion.a
      href={SOCIAL.mailto}
      onClick={handleClick}
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="group flex items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-violet-600 to-violet-500 px-5 py-5 text-white shadow-[0_0_28px_rgba(139,92,246,0.28)] transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_40px_rgba(139,92,246,0.4)]"
    >
      <span className="flex items-center gap-3">
        <Mail className="h-5 w-5" />
        <span>
          <span className="block text-sm font-semibold">Enviar e-mail</span>
          <span className="block text-xs text-violet-100">
            {copied ? "E-mail copiado!" : SOCIAL.email}
          </span>
        </span>
      </span>
      <ArrowUpRight className="h-4 w-4 opacity-80 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </motion.a>
  );
}

export function Contact() {
  return (
    <section
      id="contato"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32 lg:py-40"
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
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[550px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-violet-600/15 via-blue-600/12 to-transparent blur-[140px] mix-blend-screen"
        aria-hidden="true"
      />

      <Reveal className="mb-10 sm:mb-12">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-violet-400">
          04 — Contato
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Vamos construir o próximo sistema juntos.
        </h2>
        <p className="mt-3 max-w-2xl text-zinc-400 leading-relaxed">
          Aberto a novos desafios, parcerias e projetos que peçam
          arquitetura sólida, produto bem pensado e entrega com performance.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Reveal delay={40}>
          <EmailContactButton />
        </Reveal>
        <Reveal delay={120}>
          <motion.a
            href={SOCIAL.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover="hover"
            initial="rest"
            animate="rest"
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="group flex items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-5 text-white shadow-[0_0_28px_rgba(59,130,246,0.22)] transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_40px_rgba(59,130,246,0.35)] backdrop-blur-sm"
          >
            <motion.span
              className="flex items-center gap-3"
              variants={{
                rest: { scale: 1 },
                hover: { scale: 1.04 },
              }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <motion.span
                className="inline-flex"
                variants={{
                  rest: { x: 0, scale: 1 },
                  hover: {
                    x: [0, 5, 2, 4],
                    scale: [1, 1.18, 1.08, 1.15],
                    transition: {
                      duration: 0.9,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    },
                  },
                }}
              >
                <WhatsAppIcon className="h-5 w-5" />
              </motion.span>
              <span>
                <span className="block text-sm font-semibold">WhatsApp</span>
                <span className="block text-xs text-blue-100">(67) 99200-7620</span>
              </span>
            </motion.span>
            <ArrowUpRight className="h-4 w-4 opacity-80 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>
        </Reveal>
        <Reveal delay={200}>
          <motion.a
            href={SOCIAL.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="group flex items-center justify-between gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-md px-5 py-5 text-zinc-100 transition-all duration-300 hover:border-violet-400/40 hover:bg-white/[0.05] hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]"
          >
            <span className="flex items-center gap-3">
              <GitHubIcon className="h-5 w-5" />
              <span>
                <span className="block text-sm font-semibold">GitHub</span>
                <span className="block text-xs text-zinc-400">github.com/HeedADR</span>
              </span>
            </span>
            <ArrowUpRight className="h-4 w-4 text-zinc-500 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
          </motion.a>
        </Reveal>
        <Reveal delay={280}>
          <motion.a
            href={SOCIAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="group flex items-center justify-between gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-md px-5 py-5 text-zinc-100 transition-all duration-300 hover:border-violet-400/40 hover:bg-white/[0.05] hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]"
          >
            <span className="flex items-center gap-3">
              <LinkedInIcon className="h-5 w-5" />
              <span>
                <span className="block text-sm font-semibold">LinkedIn</span>
                <span className="block text-xs text-zinc-400">linkedin.com/in/thiagoadr</span>
              </span>
            </span>
            <ArrowUpRight className="h-4 w-4 text-zinc-500 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
}
