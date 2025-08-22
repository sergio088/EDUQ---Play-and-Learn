import "./globals.css";
import Header from "../components/Header";
import type { Metadata } from "next";

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
      <body className="min-h-dvh bg-neutral-950 text-white antialiased selection:bg-fuchsia-500/30">
        {/* Cabeçalho global */}
        <Header />
        {/* Conteúdo das páginas */}
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
