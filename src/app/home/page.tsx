"use client";
import Image from "next/image";
import Link from "next/link";

export default function HomeGame() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      {/* SECTION 1 - TÍTULO */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 bg-[url('/bg_home.png')] bg-cover bg-no-repeat bg-center" />

      <section className="flex justify-center items-center h-screen">
        <div className="bg-red-300 p-3 shadow-2xl rounded">
          <Link href="/home/jogo-da-memoria">
            <Image
              src="/TITULO-jogo-da-memoria-nobg.png"
              alt="titulo Jogo da Memoria"
              width={300}
              height={100}
            />
          </Link>
        </div>
      </section>
    </div>
  );
}
