import { Routing } from './router';
import { AboutGame } from './aboutGame/aboutGame';
import { GameSettings } from './gameSettings/gameSettings';
import { GameField } from './gamePage/game';
import { ScoreGame } from './scoreGame/scoreGame';

const aboutGame = new AboutGame();
const gameSettings = new GameSettings();
const game = new GameField();
const scoreGame = new ScoreGame();
export async function addRouting(): Promise<void> {
  const routes = {
    '#about': `
    <div class="about__game">
      ${aboutGame.element.innerHTML}
    </div>
    `,
    '#score': `
    <div class="score__game">
      ${scoreGame.element.innerHTML}
    </div
    `,
    '#settings': `
     <div class="game__settings">
      ${gameSettings.element.innerHTML}
     </div>
    `,
    '#game': `
    <div>
      ${game.element.innerHTML}
    </div>
    `,
  };
  const location = window.location.hash;
  const rootElement = document.querySelector('main');
  let router = new Routing('#', routes, rootElement);
  const navLinks = document.querySelectorAll('.nav__elements');
  const userGameButton = document.querySelector('.user__logo');
  let previous = '';
  function updateSettings() {
    const nowSettings = document.querySelector('.game__settings')?.innerHTML;
    if (nowSettings) {
      previous = nowSettings
    }
    routes['#settings'] = `
    <div class="game__settings">
      ${previous || gameSettings.element.innerHTML}
    </div>
    `;
    router = new Routing('#', routes, rootElement);
  }
  userGameButton?.addEventListener('click', () => {
    updateSettings();
  })
  document.querySelector('.match__logo')?.addEventListener('click', () => {
    updateSettings();
  });
  if (location) {
    router.updateState({ page: location });
  }
  navLinks.forEach((item) => {
    item.addEventListener('click', () => {
      const state = { page: item.getAttribute('href') };
      if (item.getAttribute('href') !== '#settings') {
        const nowSettings = document.querySelector('.game__settings')?.innerHTML;
        if (nowSettings) {
          previous = nowSettings;
        }
      } else {
        routes['#settings'] = `
        <div class="game__settings">
          ${previous || gameSettings.element.innerHTML}
        </div>
        `;
        router = new Routing('#', routes, rootElement);
      }
      router.getFragment(state);
    });
  });
  router.init();
}

