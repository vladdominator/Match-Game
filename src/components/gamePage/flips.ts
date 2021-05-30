const FLIP_CLASS = 'flipped';
interface Card {
  element: Node,
  isFlipped: boolean,
}
function flip(isFront = false, card: Card): Promise<void> {
  return new Promise((resolve) => {
    (card.element as HTMLElement).children[0].classList.toggle(FLIP_CLASS, isFront);
    (card.element as HTMLElement).children[0].addEventListener('transitionend', () => resolve(), {
      once: true,
    })
  })
}

function flipToBack(card: Card): Promise<void>{
  card.isFlipped = true;
  const buttonStart = document.querySelector('.button__start');
  (buttonStart as HTMLElement).style.pointerEvents = 'auto';
  return flip(true, card);
}

function flipToFront(card: Card): Promise<void> {
  card.isFlipped = false;
  return flip(false, card);
}
export { flip, flipToBack, flipToFront }
