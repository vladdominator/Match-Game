import { BaseComponent } from '../../shared/api/base-component';
import './gameSettings.scss';

export class GameSettings extends BaseComponent {
  constructor() {
    super('div', ['game__settings']);
    this.element.innerHTML = `
    <div class="select">
      <div class="select__settings">
        <p class="game__option">
          Game cards
        </p>
        <p class="game__text">
          select game cards type
        </p>
        <hr/>
      </div>
      <div class="select__icon">
      </div>
    </div>
    <div class="select__settings_option">
    <div class="option__item">
        <p>
          Animals
        </p>
      </div>
      <div class="option__item">
        <p>
          Creature
        </p>
      </div>
      <div class="option__item">
        <p>
          Nature
        </p>
      </div>
    </div>
    <div class="select">
      <div class="select__settings">
        <p class="game__option">
          Difficulty
        </p>
        <p class="game__text">
          select game type
        </p>
        <hr/>
      </div>
      <div class="select__icon">
      </div>
    </div>
    <div class="select__settings_option">
      <div class="option__item">
        <p>
          4х4
        </p>
      </div>
      <div class="option__item">
        <p>
          6х6
        </p>
      </div>
      <div class="option__item">
        <p>
          8х8
        </p>
      </div>
    </div>
    `;
  }
}
