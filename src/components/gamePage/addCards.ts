import { flipToBack } from './flips'

interface Card {
  element: Node,
  isFlipped: boolean,
}
const SHOW_TIME = 30;
export function addCards(cards: Array<Card>): void {
  const gameField = document.querySelector('.container__card');
  cards.forEach((card) => {
    if (gameField) {
      gameField.appendChild(card.element);
    }
  })

  setTimeout(() => {
    cards.forEach((card) => flipToBack(card))
  }, SHOW_TIME * 1000)
}
