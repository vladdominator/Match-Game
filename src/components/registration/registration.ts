import { BaseComponent } from '../../shared/api/base-component';
import './registration.scss';
import { closePopup } from '../../shared/api/closePopup';

export class Registration extends BaseComponent {
  constructor() {
    super('div', ['container__registration']);
    this.element.innerHTML = `
        <p>
          register new player
        </p>
    `;
  }

  addForm(registrationForm: HTMLElement | null): void {
    this.element.addEventListener('click', () => {
      if (registrationForm !== null) {
        registrationForm.classList.add('popup__registration-active');
        document.body.classList.add('body-lock');
        registrationForm.children[0].children[0].classList.add('popup__content-registration-active');
      }
    });
    if (registrationForm !== null) {
      registrationForm.children[0].addEventListener('click', (e: Event) => {
        if (!(e.target as HTMLElement).closest('.popup__content-registration')) {
          closePopup(registrationForm);
        }
      });
    }
  }
}
