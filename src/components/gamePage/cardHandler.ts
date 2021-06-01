import { GameCards } from "../cards/cards";
import { delay } from "../delay/delay";
import { flipToBack, flipToFront } from "./flips";
import { countScore, countScoreClose } from "./timeInit";/* eslint-disable-line */

let isAnimation = false;
const FLIP_DELAY = 2000;
let countComparisonFalse = 0;
let countComparison = 0;
let activeCard: GameCards | undefined;
let countGreen = 0;

async function cardHandler(card: GameCards): Promise<void> {
  const cardElements = document.querySelectorAll('.card').length;
  if(isAnimation) return;
  if(!card.isFlipped) return;
  isAnimation = true;
  await flipToFront(card);
  if(!activeCard) {
    activeCard = card;
    isAnimation = false;
    return;
  }
  countComparison++;
  if(activeCard?.image !== card.image) {
    countComparisonFalse++;
    await card.element.querySelector('.card__front')?.classList.add('card__front-red-active');
    await activeCard.element.querySelector('.card__front')?.classList.add('card__front-red-active');
    await delay(FLIP_DELAY);
    await Promise.all([flipToBack(activeCard), flipToBack(card)])
    await card.element.querySelector('.card__front')?.classList.remove('card__front-red-active');
    await activeCard.element.querySelector('.card__front')?.classList.remove('card__front-red-active');
  } else {
    countGreen++;
    await card.element.querySelector('.card__front')?.classList.add('card__front-green-active');
    await activeCard.element.querySelector('.card__front')?.classList.add('card__front-green-active');
    if (countGreen === cardElements / 2) {
      countScoreClose(countComparison, countComparisonFalse);
      countGreen = 0;
      countComparison = 0;
      countComparisonFalse = 0;
    }
  }
  countScore(countComparison, countComparisonFalse);
  activeCard = undefined;
  isAnimation = false;
}
function clearValue(): void {
  countGreen = 0
}
export { cardHandler, clearValue };
