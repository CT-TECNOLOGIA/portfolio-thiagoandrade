"use client";

import { useEffect, useRef, useState } from "react";
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
    <a
      href={SOCIAL.mailto}
      onClick={handleClick}
      className="group flex items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-violet-600 to-violet-500 px-5 py-5 text-white shadow-[0_0_28px_rgba(139,92,246,0.28)] transition duration-300 hover:brightness-110"
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
    </a>
  );
}

export function Contact() {
  return (
    <section
      id="contato"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24"
    >
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-violet-400">
          04 — Contato
        </p>
        <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Vamos construir o próximo sistema juntos.
        </h2>
        <p className="mt-4 max-w-lg text-zinc-400">
          Aberto a novos desafios, parcerias e projetos que peçam
          arquitetura sólida, produto bem pensado e entrega com performance.
        </p>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Reveal delay={40}>
          <EmailContactButton />
        </Reveal>
        <Reveal delay={120}>
          <a
            href={SOCIAL.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-5 text-white shadow-[0_0_28px_rgba(59,130,246,0.22)] transition duration-300 hover:brightness-110"
          >
            <span className="flex items-center gap-3">
              <WhatsAppIcon className="h-5 w-5" />
              <span>
                <span className="block text-sm font-semibold">WhatsApp</span>
                <span className="block text-xs text-blue-100">(67) 99200-7620</span>
              </span>
            </span>
            <ArrowUpRight className="h-4 w-4 opacity-80 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>
        <Reveal delay={200}>
          <a
            href={SOCIAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-5 text-zinc-100 transition duration-300 hover:border-violet-400/40 hover:bg-white/[0.07]"
          >
            <span className="flex items-center gap-3">
              <GitHubIcon className="h-5 w-5" />
              <span>
                <span className="block text-sm font-semibold">GitHub</span>
                <span className="block text-xs text-zinc-400">github.com/HeedADR</span>
              </span>
            </span>
            <ArrowUpRight className="h-4 w-4 text-zinc-500 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
          </a>
        </Reveal>
        <Reveal delay={280}>
          <a
            href={SOCIAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-5 text-zinc-100 transition duration-300 hover:border-violet-400/40 hover:bg-white/[0.07]"
          >
            <span className="flex items-center gap-3">
              <LinkedInIcon className="h-5 w-5" />
              <span>
                <span className="block text-sm font-semibold">LinkedIn</span>
                <span className="block text-xs text-zinc-400">linkedin.com/in/thiagoadr</span>
              </span>
            </span>
            <ArrowUpRight className="h-4 w-4 text-zinc-500 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
