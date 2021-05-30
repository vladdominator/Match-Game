import { BaseComponent } from '../../shared/api/base-component';
import './popupScore.scss';

export class PopupScore extends BaseComponent {
  constructor() {
    super('div', ['popup__score']);
    this.element.innerHTML = `
      <div class="popup__score_body">
        <div class="popup__score_content">
          <p class="congradilation">
            Congratulations! You successfully found all matches on 1.21 minutes.
          </p>
          <a class="button__ok" href="#score">
            <p>
              Ok
            </p>
          </a>
        </div>
      </div>
    `;
  }
}
