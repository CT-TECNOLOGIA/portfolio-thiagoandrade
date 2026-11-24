import type { Metadata } from "next";
import { Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thiago Andrade | Desenvolvedor Full Stack (PHP, React e Java)",
  description:
    "Desenvolvedor Full Stack e Analista de Sistemas focado em PHP (Laravel e Slim), React, TypeScript e Java (Spring Boot), com experiência na modernização de sistemas legados, APIs RESTful, bancos relacionais (Oracle OCI, PostgreSQL e MySQL) e plataformas SaaS multi-tenant em produção.",
  openGraph: {
    title: "Thiago Andrade | Desenvolvedor Full Stack (PHP, React e Java)",
    description:
      "Desenvolvedor Full Stack e Analista de Sistemas focado em PHP (Laravel e Slim), React, TypeScript e Java (Spring Boot), com experiência na modernização de sistemas legados, APIs RESTful, bancos relacionais (Oracle OCI, PostgreSQL e MySQL) e plataformas SaaS multi-tenant em produção.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${outfit.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
