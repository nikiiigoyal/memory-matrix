import { useState } from "react";

export default function GameBoard() {
  const initialCards = [
    { value: "A", state: "hidden" },
    { value: "B", state: "hidden" },
    { value: "A", state: "hidden" },
    { value: "B", state: "hidden" },
  ];

  const [cards, setCards] = useState(initialCards);
  const [firstCardIndex, setFirstCarIndex] = useState<number | null>(null);
  
  function handleClick(clickedIndex: number) {

    // First, check if the card is already revealed or matched.
  // If so, do nothing and exit.
  if (cards[clickedIndex].state !== 'hidden' || firstCardIndex === clickedIndex) {
    return;
  }
    // if its first click
    if (firstCardIndex === null) {
      const newCards = [...cards];
      newCards[clickedIndex] = { ...newCards[clickedIndex], state: "revealed" };
      setCards(newCards);
      setFirstCarIndex(clickedIndex);
      // if its seconnd click
    } else {
      const newCards = [...cards];
      newCards[clickedIndex] = { ...newCards[clickedIndex], state: "revealed" };
      setCards(newCards);
      // if they are a match
      if (newCards[firstCardIndex].value === newCards[clickedIndex].value) {
        setTimeout(() => {
          const matchedCards = [...newCards];
          matchedCards[firstCardIndex] = {
            ...matchedCards[firstCardIndex],
            state: "matched",
          };
          matchedCards[clickedIndex] = {
            ...matchedCards[clickedIndex],
            state: "matched",
          };
          setCards(matchedCards);
          setFirstCarIndex(null);
        }, 1000);
      } else {
        setTimeout(() => {
          const mismatchedCards = [...newCards];
          mismatchedCards[firstCardIndex] = {
            ...mismatchedCards[firstCardIndex],
            state: "hidden",
          };
          mismatchedCards[clickedIndex] = {
            ...mismatchedCards[clickedIndex],
            state: "hidden",
          };
          setCards(mismatchedCards);
          setFirstCarIndex(null);
        }, 1000);
      }
    }
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-3 text-center p-2 bg-green-100 mx-auto">
        {cards.map((card, index) => (
          <div className="card flex items-center justify-center text-lg bg-yellow-200 w-9 h-9" key={index} onClick={() => handleClick(index)}>
            {card.state === "revealed" || card.state === "matched"
              ? card.value
              : ""}
          </div>
        ))}
      </div>
    </>
  );
}