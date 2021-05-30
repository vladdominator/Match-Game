import { BaseComponent } from '../../shared/api/base-component';
import './logo.scss';

export class Logo extends BaseComponent {
  constructor() {
    super('div', ['match__logo']);
    this.element.innerHTML = `
      <a href="#about">
        <div class="match__upper">
          <p>match</p>
        </div>
        <div class="match__down">
          <p>match</p>
        </div>
      </a>
    `;
  }
}
