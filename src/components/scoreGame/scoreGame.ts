import { BaseComponent } from '../../shared/api/base-component';
import './scoreGame.scss';

export class ScoreGame extends BaseComponent {
  public scoreUndefined: number;

  constructor() {
    super('div', ['score__game']);
    this.element.innerHTML =  `
      <h4>
        Best players
      </h4>
    `;
    this.scoreUndefined = 0;
  }
}
