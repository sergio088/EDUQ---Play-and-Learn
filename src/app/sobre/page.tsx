export default function Sobre() {
  return (
    <div className="bg-pink-100 min-h-screen text-black flex items-center justify-center px-8 py-12">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-start gap-10">
        {/* Imagem + legenda */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src="/equipe.jpg" // aqui você coloca o caminho certo da imagem
            alt="Equipe Play and Learn"
            className="rounded-md shadow-md max-w-sm w-full"
          />
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
            apaixonados por tecnologia e educação, responsáveis pela criação do
            Play and Learn. Este projeto faz parte da nossa conclusão de curso
            de Análise e Desenvolvimento de Sistemas e tem como objetivo tornar
            o aprendizado mais acessível e divertido para crianças.
          </p>

          <p>
            Combinamos nossos conhecimentos em desenvolvimento web e pedagogia
            para criar uma plataforma interativa que une diversão e
            conhecimento. Nosso compromisso é proporcionar uma experiência
            inovadora e enriquecedora para os pequenos exploradores do saber!
          </p>

          {/* Rodapé com ícone */}
          <div className="flex items-center gap-2 mt-6">
            <div className="bg-orange-400 p-2 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <path d="M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z" />
                <path d="M20.054 15.987H3.946" />
              </svg>
            </div>
            <p className="font-medium">Projeto Aplicado/Acex</p>
          </div>
        </div>
      </div>
    </div>
  );
}
