"use client";
import ButtonIdade from "@/components/buttonIdade";
import { useState } from "react";
import MemoryGame from "@/components/Jogos/JogoMemoriaAnimais";
import Image from "next/image";

export default function HomeGame() {
  const [fase, setFase] = useState("Seleçao Idade");
  const [idade, setIdade] = useState("");
  const [temaJogo, setTemaJogo] = useState("");

  function handleSelectIdade(valor: string) {
    setIdade(valor);
    setFase("Selecao Jogo"); // avança para a seleção de jogo
  }

  function handleSelectJogo(valor: string) {
    setTemaJogo(valor);
    setFase("Joga da Memoria"); // avança para o jogo final
  }
  const resetGame = () => {
    setFase("Seleçao Idade");
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      {/* BG-Image */}
      <Image
        src="/bg_cleanup.png"
        alt="fundo"
        fill
        priority
        className="fixed top-0 left-0 w-full h-full -z-10 bg-cover bg-no-repeat bg-center"
      />

      {/* SECTION 2 - SELEÇÃO DE IDADE */}
      <section
        id="idade"
        className={`${fase === "Seleçao Idade" ? "" : "hidden"} w-full`}
      >
        <div className="flex flex-col sm:flex-row items-center justify-center h-screen px-6 sm:px-20 gap-10">
          {/* Imagem */}
          <Image
            src="/MENINO_imagem.png"
            alt="menino pergunta idade"
            width={500}
            height={300}
            priority
            className="order-1 sm:order-1 w-72 sm:w-[500px]"
          />

          {/* Botões */}
          <div className="flex flex-col gap-6 order-2 sm:order-2">
            <ButtonIdade
              onClick={() => handleSelectIdade("5 - 6")}
              txt="5 - 6"
              bg="bg-yellow-300 hover:bg-yellow-400"
            />
            <ButtonIdade
              onClick={() => handleSelectIdade("7 - 8")}
              txt="7 - 8"
              bg="bg-green-500 hover:bg-green-600"
            />
            <ButtonIdade
              onClick={() => handleSelectIdade("9 - 10")}
              txt="9 - 10"
              bg="bg-blue-500 hover:bg-blue-600"
            />
          </div>
        </div>
      </section>

      {/* SECTION 3 - SELEÇÃO DE JOGO */}
      <section className={`${fase === "Selecao Jogo" ? "" : "hidden"} w-full`}>
        <div className="flex flex-col sm:flex-row items-center justify-center h-screen px-6 sm:px-20 gap-10">
          {/* Botões */}
          <div className="flex flex-col gap-6 order-2 sm:order-1">
            <ButtonIdade
              onClick={() => handleSelectJogo("Animais")}
              txt="Animais"
              bg="bg-yellow-300 hover:bg-yellow-400"
            />
            <ButtonIdade
              onClick={() => handleSelectJogo("Bandeiras")}
              txt="Bandeiras"
              bg="bg-green-500 hover:bg-green-600"
            />
            <ButtonIdade
              onClick={() => handleSelectJogo("Profissões")}
              txt="Profissões"
              bg="bg-blue-500 hover:bg-blue-600"
            />
          </div>

          {/* Imagem */}
          <Image
            src="/MENINO_imagem_ESQUERDA.png"
            alt="menino pergunta qual jogo"
            width={500}
            height={300}
            priority
            className="order-1 sm:order-2 w-72 sm:w-[500px]"
          />
        </div>
      </section>
      <section
        className={`${
          fase === "Joga da Memoria" ? "" : "hidden"
        } flex h-screen`}
      >
        {temaJogo === "Animais" && (
          <MemoryGame
            Tema={temaJogo}
            exit={resetGame}
            idade={idade}
            images={[
              "/Cartas Animais/Carta_Cachorro.png",
              "/Cartas Animais/Carta_Cavalo.png",
              "/Cartas Animais/Carta_Galinha.png",
              "/Cartas Animais/Carta_Ovelha.png",
              "/Cartas Animais/Carta_Panda.png",
              "/Cartas Animais/Carta_Pato.png",
              "/Cartas Animais/Carta_Porco.png",
              "/Cartas Animais/Carta_Sapo.png",
              "/Cartas Animais/Carta_Tigre.png",
              "/Cartas Animais/Carta_Vaca.png",
              "/Cartas Animais/Coruja.png",
              "/Cartas Animais/Girafa.png",
              "/Cartas Animais/Hipopótamo.png",
              "/Cartas Animais/Javali.png",
              "/Cartas Animais/Leão.png",
              "/Cartas Animais/Lobo.png",
              "/Cartas Animais/Macaco.png",
              "/Cartas Animais/Peru.png",
            ]}
          />
        )}
        {temaJogo === "Bandeiras" && (
          <MemoryGame
            Tema={temaJogo}
            exit={resetGame}
            idade={idade}
            images={[
              "/Cartas Bandeiras/Carta_Argentina.png",
              "/Cartas Bandeiras/Carta_Belgica.png",
              "/Cartas Bandeiras/Carta_Brasil.png",
              "/Cartas Bandeiras/Carta_Canada.png",
              "/Cartas Bandeiras/Carta_Chile.png",
              "/Cartas Bandeiras/Carta_Colômbia.png",
              "/Cartas Bandeiras/Carta_Dinamarca.png",
              "/Cartas Bandeiras/Carta_Espanha.png",
              "/Cartas Bandeiras/Carta_EUA.png",
              "/Cartas Bandeiras/Carta_França.png",
              "/Cartas Bandeiras/Carta_Italia.png",
              "/Cartas Bandeiras/Carta_Jamaica.png",
              "/Cartas Bandeiras/Carta_Marrocos.png",
              "/Cartas Bandeiras/Carta_México.png",
              "/Cartas Bandeiras/Carta_Nigéria.png",
              "/Cartas Bandeiras/Carta_Palestina.png",
              "/Cartas Bandeiras/Carta_Portugal.png",
              "/Cartas Bandeiras/Carta_Suecia.png",
            ]}
          />
        )}
        {temaJogo === "Profissões" && (
          <MemoryGame
            Tema={temaJogo}
            exit={resetGame}
            idade={idade}
            images={[
              "/Cartas Profissões/Carta_Aeromoça.png",
              "/Cartas Profissões/Carta_Ag.png",
              "/Cartas Profissões/Carta_Astronauta.png",
              "/Cartas Profissões/Carta_Bombeiro.png",
              "/Cartas Profissões/Carta_Carteiro.png",
              "/Cartas Profissões/Carta_Chef.png",
              "/Cartas Profissões/Carta_Cirurgião.png",
              "/Cartas Profissões/Carta_Concierge.png",
              "/Cartas Profissões/Carta_Detetive.png",
              "/Cartas Profissões/Carta_Entregador.png",
              "/Cartas Profissões/Carta_Jornalista.png",
              "/Cartas Profissões/Carta_Juiz.png",
              "/Cartas Profissões/Carta_Médica.png",
              "/Cartas Profissões/Carta_Piloto.png",
              "/Cartas Profissões/Carta_Policial.png",
              "/Cartas Profissões/Carta_Porteiro.png",
              "/Cartas Profissões/Carta_Soldado.png",
              "/Cartas Profissões/Carta_Taxista.png",
            ]}
          />
        )}
      </section>
    </div>
  );
}
