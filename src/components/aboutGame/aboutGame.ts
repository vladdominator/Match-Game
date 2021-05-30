import { BaseComponent } from '../../shared/api/base-component';
import './aboutGame.scss';

export class AboutGame extends BaseComponent {
  constructor() {
    super('div', ['about__game']);
    this.element.innerHTML = `
        <p class="how__play">
          How to play?
        </p>
        <div class="game__information">
          <div class="game__information_register">
            <div class="game__circle">
              <p>1</p>
            </div>
            <span class="game__live">Register new player in game</span>
          </div>
          <div>
            <img src="../../../public/images/register.png"/>
          </div>
        </div>
        <div class="game__information">
          <div class="game__information_settings">
            <div class="game__circle">
              <p>2</p>
            </div>
            <span class="game__live">Configure your game settings</span>
          </div>
          <div>
            <img src="../../../public/images/settings.png" class="settings-image"/>
          </div>
        </div>
        <div class="game__information">
          <div class="game__information_start">
            <div class="game__circle">
              <p>3</p>
            </div>
            <span class="game__live">Start you new game! Remember card positions and match it before times up.</span>
          </div>
          <div>
            <img src="../../../public/images/game.png" class="game-image"/>
          </div>
        </div>
    `;
  }
}
