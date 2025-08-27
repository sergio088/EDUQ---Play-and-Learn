"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import ButtonWinScreen from "../buttonWinScreen";

interface Card {
  id: number;
  image: string;
  flipped: boolean;
  matched: boolean;
}

interface MemoryGameProps {
  images: string[]; // array de strings, cada string é o caminho da imagem em /public
  idade: string;
  exit: () => void;
  Tema: string;
}

export default function MemoryGame({
  images,
  idade,
  exit,
  Tema,
}: MemoryGameProps) {
  const [cards, setCards] = useState<Card[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matchedCount, setMatchedCount] = useState(0);
  const [tamanhoCarta, setTamanhoCarta] = useState(0);

  // quando o componente monta → embaralhar cartas
  useEffect(() => {
    let selectedImages: string[] = [];

    if (idade === "5 - 6") {
      setTamanhoCarta(150);
      selectedImages = images.slice(0, 6); // pega 6 imagens
    } else if (idade === "7 - 8") {
      setTamanhoCarta(120);
      selectedImages = images.slice(0, 12); // pega 12 imagens
    } else if (idade === "9 - 10") {
      setTamanhoCarta(90);
      selectedImages = images; // todas
    }
    const duplicated = [...selectedImages, ...selectedImages]; // duplica pq cada carta tem par
    const shuffled = duplicated
      .map((img, i) => ({ id: i, image: img, flipped: false, matched: false }))
      .sort(() => Math.random() - 0.5);

    setCards(shuffled);
  }, [idade, images]);

  function handleClick(index: number) {
    // se já está virada ou combinada, ignora
    if (cards[index].flipped || cards[index].matched) return;

    const newCards = [...cards];
    newCards[index].flipped = true;
    setCards(newCards);

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    // se virou 2 cartas, checa se são iguais
    if (newFlipped.length === 2) {
      const [first, second] = newFlipped;
      if (newCards[first].image === newCards[second].image) {
        newCards[first].matched = true;
        newCards[second].matched = true;
        setCards(newCards);
        setMatchedCount(matchedCount + 1);
      } else {
        // desvira depois de 1 segundo
        setTimeout(() => {
          newCards[first].flipped = false;
          newCards[second].flipped = false;
          setCards([...newCards]);
        }, 700);
      }
      setFlipped([]); // reseta cartas viradas
    }
  }
  function Embaralhar() {
    let selectedImages: string[] = [];

    if (idade === "5 - 6") {
      selectedImages = images.slice(0, 6); // pega 6 imagens
    } else if (idade === "7 - 8") {
      selectedImages = images.slice(0, 12); // pega 12 imagens
    } else if (idade === "9 - 10") {
      selectedImages = images; // todas
    }
    setMatchedCount(0);
    const duplicated = [...selectedImages, ...selectedImages]; // duplica pq cada carta tem par
    const shuffled = duplicated
      .map((img, i) => ({ id: i, image: img, flipped: false, matched: false }))
      .sort(() => Math.random() - 0.5);

    setCards(shuffled);
  }
  const resetState = () => {
    setMatchedCount(0);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div className="h-15" />
      <h1 className="text-xl font-bold text-black bg-orange-400/60 w-[50%] h-10 flex justify-center items-center">
        {Tema}
      </h1>

      <div></div>

      <div
        className={`grid ${
          idade === "5 - 6" ? "grid-cols-4" : "grid-cols-6"
        } gap-2`}
      >
        {cards.map((card, index) => (
          <div key={card.id} onClick={() => handleClick(index)}>
            {card.flipped || card.matched ? (
              // <img src={card.image} alt="carta" className="w-16 h-16" />
              <Image
                src={card.image}
                alt="carta"
                width={tamanhoCarta}
                height={tamanhoCarta}
                unoptimized
                priority={false}
              ></Image>
            ) : (
              <div>
                <Image
                  src="/Carta-Costas.png"
                  alt="Verso da carta"
                  width={tamanhoCarta}
                  height={tamanhoCarta}
                ></Image>
              </div>
            )}
          </div>
        ))}
      </div>

      {matchedCount === cards.length / 2 && (
        <div className="fixed inset-0 z-[999] flex justify-center items-center bg-black/50">
          <div className="rounded-2xl shadow-xl flex flex-col sm:flex-row items-center gap-6 p-6 ">
            <div className="absolute inset-0 -z-10 bg-[url('/bg_cleanup.png')] bg-cover bg-no-repeat bg-center" />
            <Image
              src="/bixinho-azul-nobg.png"
              alt="bixinho azul"
              width={200}
              height={200}
              className="fixed top-0 sm:left-[45%]"
            ></Image>

            {/* Imagem da medalha */}
            <Image
              src="/Medalha-nobg.png"
              alt="imagem de medalha"
              width={250}
              height={250}
            />

            {/* Texto e botões */}
            <div className="flex flex-col items-center gap-4">
              <h1 className="text-black font-bold text-center text-lg">
                PARABÉNS!
                <br />
                VOCÊ USOU SUA MEMÓRIA COMO UM VERDADEIRO CAMPEÃO!
              </h1>

              <ButtonWinScreen
                onclick={Embaralhar}
                bg="bg-green-400 hover:bg-green-600"
                txt="Jogar Novamente"
                img={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide text-black lucide-rotate-cw-icon lucide-rotate-cw"
                  >
                    <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
                    <path d="M21 3v5h-5" />
                  </svg>
                }
              />

              <ButtonWinScreen
                onclick={() => {
                  exit();
                  resetState();
                }}
                txt="Sair"
                bg="bg-red-500 hover:bg-red-600"
                img={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-log-out-icon lucide-log-out"
                  >
                    <path d="m16 17 5-5-5-5" />
                    <path d="M21 12H9" />
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  </svg>
                }
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
