import { GameCards } from "../cards/cards";
import { cardHandler } from './cardHandler';
import { addCards } from './addCards';

export async function newGame(images: Array<string>): Promise<void> {
  const gameField = document.querySelector('.container__card');
  if (gameField) {
    gameField.innerHTML = '';
  }
  const cards = images
    .concat(images)
    .map((url) => new GameCards(url))
    .sort(() => Math.random() - .5);
  await addCards(cards);
  await cards.forEach((card) => {
    card.element.addEventListener('click', () => cardHandler(card));
  })
}
