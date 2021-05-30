import { fixIndex } from "../../service/init";

export function addForm(str: string, conditionTermination: boolean, colItems: number): void {
  const scoreForm = document.querySelector('.popup__score');
  const scoreFormContent = document.querySelector('.popup__score_content');
  const textContentForm = document.querySelector('.congradilation') as HTMLElement;
  const matchLogo = document.querySelector('.match__logo') as HTMLElement;
  const navLinks = document.querySelectorAll('.nav__elements');
  const buttonOk = document.querySelector('.button__ok');
  if (scoreForm !== null) {
    scoreForm.classList.add('popup__score-active');
    document.body.classList.add('body-lock');
    scoreFormContent?.classList.add('popup__score_content-active');
  }
  if(conditionTermination) {
    textContentForm.textContent = `
      Congratulations! You successfully found all matches on ${str} minutes.
    `
  } else {
    textContentForm.textContent = `
       Congratulations! You successfully found ${colItems} matches.
    `
  }
  buttonOk?.addEventListener('click', () => {
    scoreForm?.classList.remove('popup__score-active');
    document.body.classList.remove('body-lock');
    const userGameButton = document.querySelector('.user__logo');
    scoreFormContent?.classList.remove('popup__score_content-active');
    if (userGameButton) userGameButton.children[0].children[0].innerHTML = 'START GAME';
    fixIndex();
    matchLogo.style.pointerEvents = 'auto';
    navLinks.forEach((item) => {
      (item as HTMLElement).style.pointerEvents = 'auto';
    })
  })
}


