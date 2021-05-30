import { BaseComponent } from '../../shared/api/base-component';
import './cards.scss';

export class GameCards extends BaseComponent {
  public isFlipped: boolean;

  constructor(readonly image: string) {
    super('div', ['match__card']);
    this.isFlipped = false;
    this.element.innerHTML =  `
      <div class="card">
        <div class="card__front">
          <img src="./images/${image}"/>
        </div>
        <div class="card__back"></div>
      </div>
    `;
  }
}
