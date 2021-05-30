let index = 0;
function fixIndex (): void {
  index++;
}
function init(): void {
  const regisrationButton = document.querySelector('.container__registration');
  (regisrationButton as HTMLElement).style.display = 'none';
  const userGameButton = document.querySelector('.user__logo');
  (userGameButton as HTMLElement).style.display = 'flex';
  const navLinks = document.querySelectorAll('.nav__elements');
  const matchLogo = document.querySelector('.match__logo') as HTMLElement;
  userGameButton?.children[0].addEventListener('click', () => {
    if (index % 2 === 0) {
      userGameButton.children[0].children[0].innerHTML = 'STOP GAME';
      (userGameButton.children[0] as HTMLLinkElement).href = '#game';
    } else {
      userGameButton.children[0].children[0].innerHTML = 'START GAME';
      (userGameButton.children[0] as HTMLLinkElement).href = '#about';
    }
    if(index % 2 === 0) {
      matchLogo.style.pointerEvents = 'none';
    } else matchLogo.style.pointerEvents = 'auto';
    navLinks.forEach((item) => {
      item.id = '';
      if (index % 2 === 0) {
        (item as HTMLElement).style.pointerEvents = 'none';
      } else (item as HTMLElement).style.pointerEvents = 'auto';
    })
    index++;
  })
}
export { init, fixIndex }