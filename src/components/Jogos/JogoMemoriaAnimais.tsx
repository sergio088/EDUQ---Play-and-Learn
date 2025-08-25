"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Card {
  id: number;
  image: string;
  flipped: boolean;
  matched: boolean;
}

interface MemoryGameProps {
  images: string[]; // array de strings, cada string é o caminho da imagem em /public
}

export default function MemoryGame({ images }: MemoryGameProps) {
  const [cards, setCards] = useState<Card[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matchedCount, setMatchedCount] = useState(0);

  // quando o componente monta → embaralhar cartas
  useEffect(() => {
    const duplicated = [...images, ...images]; // duplica pq cada carta tem par
    const shuffled = duplicated
      .map((img, i) => ({ id: i, image: img, flipped: false, matched: false }))
      .sort(() => Math.random() - 0.5);

    setCards(shuffled);
  }, [images]);

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

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h1 className="text-xl font-bold text-black">Jogo da Memória</h1>

      <div className="grid grid-cols-5 gap-2">
        {cards.map((card, index) => (
          <div key={card.id} onClick={() => handleClick(index)}>
            {card.flipped || card.matched ? (
              // <img src={card.image} alt="carta" className="w-16 h-16" />
              <Image
                src={card.image}
                alt="carta"
                width={150}
                height={150}
              ></Image>
            ) : (
              <div>
                <Image
                  src="/Carta-Costas.png"
                  alt="Verso da carta"
                  width={150}
                  height={150}
                ></Image>
              </div>
            )}
          </div>
        ))}
      </div>

      {matchedCount === images.length && (
        <p className="text-green-600 font-semibold">Você venceu!</p>
      )}
    </div>
  );
}
