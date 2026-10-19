import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { GlobalMouseGlow } from "@/components/ui/GlobalMouseGlow";

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

      {/* Brilho sutil contínuo acompanhando o cursor */}
      <GlobalMouseGlow />

      <Header />

      <main id="topo" className="relative z-10 flex flex-col">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
