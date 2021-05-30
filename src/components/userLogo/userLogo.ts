import { BaseComponent } from '../../shared/api/base-component';
import './userLogo.scss';

export class UserLogo extends BaseComponent {
  constructor() {
    super('div', ['user__logo']);
    this.element.innerHTML = `
    <a class="button__start" href="#game">
      <p>
        Start game
      </p>
    </a>
    <div class="user__icon">
      <img class="icon__db" src="./images/user.png">
    </div>
    `;
  }
}
