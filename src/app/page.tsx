import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-[100svh] flex items-center">
      {/* Bg image full-bleed */}
      <Image
        src="/Foto Crianças.png"
        alt="Crianças brincando na grama"
        fill
        priority
        sizes="100vw"
        className="object-cover -z-10"
      />

      {/* Overlay para legibilidade */}
      <div className="absolute inset-0 bg-black/55 -z-10" />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 sm:px-12 flex flex-col items-start gap-6">
        {/* Logo PLAY_AND_LEARN */}
        <div className="flex justify-center  w-full py-6 sm:py-10">
          <Image
            src="/play-and-learn-TITULO-nobg.png"
            alt="play and learn estilo massinha"
            width={600} // largura máxima
            height={200} // altura máxima
            className="object-contain w-[250px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-auto"
            priority
          />
        </div>

        {/* Texto/CTA */}
        <div className="max-w-2xl text-center sm:text-left">
          <p className="text-lg font-semibold text-amber-300">
            Diversão que ensina, aprendizado que encanta!
          </p>

          <p className="mt-4 text-[18px] sm:text-[20px] text-white/90 leading-relaxed">
            Transformamos o aprendizado em uma experiência divertida e
            interativa através do ensino gamificado, combinamos desafios e
            atividades envolventes para estimular a curiosidade e o
            desenvolvimento intelectual dos pequenos.
          </p>
        </div>
      </div>
    </div>
  );
}
