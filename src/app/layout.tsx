import "./globals.css";
import Header from "../components/Header";
import type { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "EDUQ • Play and Learn",
  description:
    "Diversão que ensina, aprendizado que encanta! Ensino gamificado para estimular a curiosidade e o desenvolvimento intelectual das crianças.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      {/* className="fixed top-0 left-0 w-full h-full -z-10 bg-[url('/bg.png')] bg-cover bg-no-repeat bg-center" */}
      <body className="min-h-dvh bg-neutral-950 text-white antialiased selection:bg-fuchsia-500/30 ">
        <Head>
          <link rel="preload" as="image" href="/bg_home.png" />
          <link rel="preload" as="image" href="/bg_cleanup.png" />
        </Head>
        {/* Cabeçalho global */}
        <Header />
        {/* Conteúdo das páginas */}
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
