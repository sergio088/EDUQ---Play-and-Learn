import Image from "next/image";
export default function Sobre() {
  return (
    <div className="bg-pink-100">
      <div className="bg-pink-100 min-h-screen text-black flex flex-col items-center justify-center px-8 py-12">
        <div className="max-w-6xl w-full flex flex-col lg:flex-row items-start gap-10">
          {/* Imagem + legenda */}
          <div className="flex flex-col items-center md:items-start w-full max-w-sm">
            <div className="w-full ">
              <Image
                src="/Foto-Equipe.jpg"
                alt="Equipe Play and Learn"
                width={800}
                height={600}
                quality={80} // controla o "serrilhado"
                className="rounded-md shadow-md w-full h-auto"
              />
            </div>
            <p className="bg-orange-400 text-black text-sm text-center px-4 py-2 w-full mt-2 font-medium">
              Arthur de Paula, Felipe Mansano, Laura Stefanin, Maike Santos e
              Mariana Borsato
            </p>
          </div>

          {/* Texto principal */}
          <div className="flex-1 space-y-4 text-justify">
            <p>
              <span className="bg-orange-400 px-1 font-semibold">
                Somos um grupo de estudantes
              </span>{" "}
              apaixonados por tecnologia e educação, responsáveis pela criação
              do Play and Learn. Este projeto faz parte da nossa conclusão de
              curso de Análise e Desenvolvimento de Sistemas e tem como objetivo
              tornar o aprendizado mais acessível e divertido para crianças.
            </p>

            <p>
              Combinamos nossos conhecimentos em desenvolvimento web e pedagogia
              para criar uma plataforma interativa que une diversão e
              conhecimento. Nosso compromisso é proporcionar uma experiência
              inovadora e enriquecedora para os pequenos exploradores do saber!
            </p>

            {/* Rodapé com ícone */}
            <div className="flex flex-col sm:flex-row items-center gap-2 mt-6">
              <div className="  rounded-full flex items-center justify-center">
                <Image
                  src="/Sobre-Pc.png"
                  alt="ilustraçao de notbook"
                  width={90}
                  height={90}
                ></Image>
              </div>
              <p className="font-medium sm:font-bold">
                Projeto Aplicado/Acex
                <br />
                Orientado pelo Prof. Esp. Flavio Flauzino
                <br />
                Centro Universitário Fundação Santo André - 2025
              </p>
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/Sobre_bixin-azul.png"
        alt="bixin azul canto inferior"
        width={150}
        height={150}
        className="relative sm:fixed bottom-0 left-0 ml-5"
      ></Image>
    </div>
  );
}
