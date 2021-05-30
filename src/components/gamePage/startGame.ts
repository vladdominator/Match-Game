import { dbSettings } from "../gameSettings/gameSelect";
import { db } from "./dbImages";
import { ImageCategoryModel } from "./image-category-model";
import { newGame } from "./newGame";
import { timeGame } from "./timeInit";

const gameTime = document.querySelector('.game__clock')?.children[0];
export function startGame(): void {
  const userTrue = document.querySelector('.user__logo');
  let userStyles;
  if (userTrue) {
    userStyles = window.getComputedStyle(userTrue, null).getPropertyValue("display");
  }
  if(userStyles === 'flex') {
    const userGameButton = document.querySelector('.button__start');
    (userGameButton as HTMLLinkElement).removeAttribute("href");
    const containerCard = document.querySelector('.container__card') as HTMLElement;
    const categories: ImageCategoryModel[] = db;
    let cat: ImageCategoryModel;
    const [one, two, three] = categories;
    if (dbSettings.Cards?.trim() === 'Creature') {
      cat = two;
    } else if (dbSettings.Cards?.trim() === 'Animals') {
      cat = one;
    } else if (dbSettings.Cards?.trim() === 'Nature') {
      cat = three;
    } else {
      cat = one;
    }
    let difficultyMax = Number(dbSettings.Difficulty?.trim().slice(-1));
    if (difficultyMax === 0) {
      difficultyMax = 4;
    } else if (difficultyMax === 6) {
      containerCard.style.width = '1100px'
    } else if (difficultyMax === 8) {
      containerCard.style.width = '1470px'
    }
    let images = cat.images.map((name) => `../../../public/images/${cat.category}/${name}.png`)
    images = images.slice(0, difficultyMax * difficultyMax / 2);
    newGame(images)
  } else {
    const main = document.querySelector('main');
    if(main) {
      timeGame(gameTime, false);
      main.innerHTML = `
      <div class="error">
        <p class="error-404">Error 404</p>
        <p>Please log in!</p>
      </div>
      `
    }
  }
}
