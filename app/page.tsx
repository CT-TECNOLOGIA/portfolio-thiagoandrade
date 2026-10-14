import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="page-shell relative min-h-screen overflow-x-hidden">
      {/* Fundo decorativo fixo: aurora, grid e orbs luminosos */}
      <div className="site-bg" aria-hidden="true">
        <div className="site-bg-aurora" />
        <div className="site-bg-grid" />
        <div className="site-bg-orb site-bg-orb-a" />
        <div className="site-bg-orb site-bg-orb-b" />
        <div className="site-bg-orb site-bg-orb-c" />
      </div>

      <Header />

      <main id="topo">
        {/* Hero: mantém o fundo complexo com aurora e orbs */}
        <Hero />

        {/* Skills: fundo ligeiramente mais claro com bordas sutis */}
        <div className="relative border-y border-white/5 bg-[#0a0c14]">
          <Skills />
        </div>

        {/* Projetos: fundo padrão mais escuro com orbs/grid visíveis */}
        <Projects />

        {/* Experiência: alternância com fundo ligeiramente mais claro */}
        <div className="relative border-y border-white/5 bg-[#0a0c14]">
          <Experience />
        </div>

        {/* Contato: fundo padrão mais escuro */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
