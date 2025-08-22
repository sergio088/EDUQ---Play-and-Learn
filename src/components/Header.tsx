import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Gradiente discreto para legibilidade sobre a foto */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />

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

        <nav className="flex items-center gap-8 text-white/90">
          <Link
            href="/"
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
