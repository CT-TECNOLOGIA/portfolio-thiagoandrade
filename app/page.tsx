"use client";

import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";
import {
  ArrowUpRight,
  Boxes,
  Briefcase,
  Code2,
  Compass,
  Database,
  Download,
  FileText,
  GitBranch,
  Layers,
  Mail,
  Menu,
  Network,
  Server,
  ShieldCheck,
  Smartphone,
  Webhook,
  Wrench,
  X,
} from "lucide-react";

const NAV_ITEMS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#projetos", label: "Projetos" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#contato", label: "Contato" },
] as const;

const SOCIAL = {
  email: "thsadr.dev@gmail.com",
  mailto: "mailto:thsadr.dev@gmail.com?subject=Contato%20via%20Portf%C3%B3lio",
  whatsapp: "67992007620",
  whatsappLink: "https://wa.me/5567992007620",
  github: "https://github.com/HeedADR",
  linkedin: "https://www.linkedin.com/in/thiagoadr",
  curriculo: "/curriculo-ats-thiago-andrade.pdf",
  curriculoFileName: "Curriculo_ATS_Thiago_Andrade.pdf",
};

const ARCHITECTURE_ROWS = [
  { label: "Regras de negócio", value: "Modelagem" },
  { label: "APIs RESTful", value: "Resilientes" },
  { label: "Sistemas críticos", value: "Em produção" },
  { label: "MVPs e SaaS", value: "Do zero à escala" },
] as const;

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

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.16, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal-motion transform-gpu transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" />
    </svg>
  );
}

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

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - (Math.pow(-2 * t + 2, 3) / 2);
}

function scrollToHash(hash: string) {
  const id = hash.replace("#", "");
  const el = document.getElementById(id);
  if (!el) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    el.scrollIntoView();
    return;
  }

  const headerOffset = 88;
  const target = el.getBoundingClientRect().top + window.scrollY - headerOffset;
  const start = window.scrollY;
  const distance = target - start;
  const duration = Math.min(1100, Math.max(620, Math.abs(distance) * 0.5));
  const startTime = performance.now();

  const step = (now: number) => {
    const progress = Math.min((now - startTime) / duration, 1);
    window.scrollTo(0, start + distance * easeInOutCubic(progress));
    if (progress < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_ITEMS.map((item) => item.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(`#${visible.target.id}`);
      },
      { rootMargin: "-32% 0px -52% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const href = event.currentTarget.getAttribute("href");
    if (!href?.startsWith("#")) return;
    event.preventDefault();
    setMenuOpen(false);
    window.history.replaceState(null, "", href);
    scrollToHash(href);
  };

  return (
    <div className="page-shell relative min-h-screen overflow-x-hidden">
      <div className="site-bg" aria-hidden="true">
        <div className="site-bg-aurora" />
        <div className="site-bg-grid" />
        <div className="site-bg-orb site-bg-orb-a" />
        <div className="site-bg-orb site-bg-orb-b" />
        <div className="site-bg-orb site-bg-orb-c" />
      </div>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || menuOpen
            ? "border-b border-white/10 bg-[#07080f]/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5 md:grid md:grid-cols-[1fr_auto_1fr] md:px-8">
          <a
            href="#topo"
            onClick={handleNavClick}
            className="flex items-center gap-2.5 font-semibold tracking-tight"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-blue-500 text-white shadow-[0_0_20px_rgba(139,92,246,0.35)]">
              <Network className="h-4 w-4" />
            </span>
            <span className="text-[15px] text-zinc-100">
              analista<span className="text-violet-400">.dev</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className={`rounded-full px-4 py-2 text-sm transition-all duration-300 ${
                  activeSection === item.href
                    ? "bg-white/10 text-white"
                    : "text-zinc-400 hover:bg-white/5 hover:text-zinc-100"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden justify-self-end md:flex">
            <a
              href="#contato"
              onClick={handleNavClick}
              className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-4 py-2 text-sm font-medium text-white shadow-[0_0_24px_rgba(139,92,246,0.25)] transition duration-300 hover:brightness-110"
            >
              Vamos conversar
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-zinc-200 transition hover:bg-white/5 md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#07080f]/95 px-5 py-6 backdrop-blur-xl md:hidden">
            <nav className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  className="rounded-xl px-4 py-3 text-base text-zinc-200 transition hover:bg-white/5"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={handleNavClick}
                className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-4 py-3 text-sm font-medium text-white"
              >
                Vamos conversar
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </nav>
          </div>
        )}
      </header>

      <main id="topo">
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
                onClick={handleNavClick}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-6 py-3 text-sm font-medium text-white shadow-[0_0_32px_rgba(139,92,246,0.28)] transition duration-300 hover:brightness-110"
              >
                Ver Projetos
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#contato"
                onClick={handleNavClick}
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
      </main>

      <footer className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-5 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:px-8">
          <p>© 2026 - Analista e Desenvolvedor</p>
          <p>Da lógica de negócio ao software em produção.</p>
        </div>
      </footer>
    </div>
  );
}
