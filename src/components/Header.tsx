"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const path = usePathname();
  const isInicio = path === "/";
  const isHome = path === "/home" || path === "/home/jogo-da-memoria";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 ${
        isInicio ? "bg-transparent" : "bg-orange-300"
      }`}
    >
      {/* Gradiente discreto para legibilidade sobre a foto */}
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${
          isInicio ? "from-black/60" : "from-orange-400/60"
        }  to-transparent`}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/LogoEDUQ-removebg-preview(restaurado).png"
            alt="Logo EDUQ"
            width={160}
            height={64}
            priority
          />
        </Link>
        {/* Imagem do bichinho */}
        <Image
          src="/bixinho-vermelho-nobg.png"
          alt="bixinho vermelho"
          width={100}
          height={100}
          priority
          className={`fixed top-0 left-1/2 -translate-x-1/2 z-[60] px-3 sm:px-0 ${
            isHome ? "" : "hidden"
          }`}
        />

        <nav className="flex items-center gap-8 text-white/90">
          <Link
            href="/home"
            className="hover:text-white font-medium transition-colors"
          >
            Home
          </Link>
          <Link
            href="/sobre"
            className="hover:text-white font-medium transition-colors"
          >
            Sobre Nós
          </Link>
        </nav>
      </div>
    </header>
  );
}
