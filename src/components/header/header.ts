import { BaseComponent } from '../../shared/api/base-component';
import './header.scss';

export class Header extends BaseComponent {
  constructor() {
    super('header', ['header']);
    this.element.innerHTML = `
    <div class="container">
      <div class="container__nav">
      </div>
    </div>
    `;
  }
}
