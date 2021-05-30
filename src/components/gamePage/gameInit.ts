import { startGame } from './startGame';
import { GameClock } from "../gameClock/gameClock";
import { timer, timeGame } from './timeInit';

const gameClock = new GameClock();
export function gameInit(): void {
  const game = document.querySelector('.game__container');
  game?.prepend(gameClock.element);
  const gameTime = document.querySelector('.game__clock')?.children[0];
  timeGame(gameTime, false);
  timer(gameTime);
  startGame();
}
