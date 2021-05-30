import { BaseComponent } from '../../shared/api/base-component';
import './registrationForm.scss';
import '../../../public/images/user.png';
import '../../../public/images/cancel.png';

export class RegistrationForm extends BaseComponent {
  constructor() {
    super('div', ['popup__registration']);
    this.element.innerHTML = `
    <div class="popup__body-registration">
      <div class="popup__content-registration">
        <p class="registration__text">Registr new Player</p>
        <form action="POST">
          <div class="input__live">
            <div class="input__registration">
              <div class="div__input">
                <input placeholder="First Name" maxlength="30" class="check__input" id="first__name" type="text"
                required/>
                <svg class="user__true" width="40" height="40" viewBox="0 0 40 40" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="11" y="11" width="18" height="18">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13 11H27C28.11 11 29 11.9 29 13V27C29 28.1 28.11
                29 27 29H13C11.89 29 11 28.1 11 27V13C11 11.9 11.89 11 13 11ZM13 20L18 25L27 16L25.59 14.58L18
                22.17L14.41 18.59L13 20Z" fill="white"/>
                </mask>
                <g mask="url(#mask0)">
                <rect x="8" y="8" width="24" height="24" fill="#018786"/>
                </g>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543
                31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="#018786" fill-opacity="0.08"/>
                </svg>
                <svg class="user__false" aria-hidden="true" focusable="false" data-prefix="far" data-icon="times-circle"
                role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5
                0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2
                62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3
                4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7
                12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"></path>
                </svg>
              </div>
              <p class="error__message"></p>
              <div class="div__input">
                <input placeholder="Last Name" maxlength="30" class="check__input" id="last__name" type="text"
                required/>
                <svg class="user__true" width="40" height="40" viewBox="0 0 40 40" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="11" y="11" width="18" height="18">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13 11H27C28.11 11 29 11.9 29 13V27C29 28.1 28.11
                29 27 29H13C11.89 29 11 28.1 11 27V13C11 11.9 11.89 11 13 11ZM13 20L18 25L27 16L25.59 14.58L18
                22.17L14.41 18.59L13 20Z" fill="white"/>
                </mask>
                <g mask="url(#mask0)">
                <rect x="8" y="8" width="24" height="24" fill="#018786"/>
                </g>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543
                31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="#018786" fill-opacity="0.08"/>
                </svg>
                <svg class="user__false" aria-hidden="true" focusable="false" data-prefix="far" data-icon="times-circle"
                role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5
                0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2
                62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3
                4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7
                12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"></path>
                </svg>
              </div>
              <p class="error__message"></p>
              <div class="div__input">
                <input placeholder="E-mail" maxlength="30" class="check__input" id="e-mail" type="email" required/>
                <svg class="user__true" width="40" height="40" viewBox="0 0 40 40" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="11" y="11" width="18" height="18">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13 11H27C28.11 11 29 11.9 29 13V27C29 28.1 28.11
                29 27 29H13C11.89 29 11 28.1 11 27V13C11 11.9 11.89 11 13 11ZM13 20L18 25L27 16L25.59 14.58L18
                22.17L14.41 18.59L13 20Z" fill="white"/>
                </mask>
                <g mask="url(#mask0)">
                <rect x="8" y="8" width="24" height="24" fill="#018786"/>
                </g>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543
                31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="#018786" fill-opacity="0.08"/>
                </svg>
                <svg class="user__false" aria-hidden="true" focusable="false" data-prefix="far" data-icon="times-circle"
                role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5
                0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2
                62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17
                0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7
                12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"></path>
                </svg>
              </div>
              <p class="error__message"></p>
            </div>
            <div class="user__photo">
              <input name="file" type="file" name="file" id="input__file" class="input__btn" multiple>
              <label for="input__file" class="input__file-button">
              <div class="hover__user"><img class="input-User" src="../../../public/images/user.png"/></div>
              <img class="user__cancel" src="../../../public/images/cancel.png"/>
              </label>
            </div>
          </div>
          <div class="user__buttons">
            <button class="add__user"><p>Add user</p></button>
            <div class="cancel__input"><p>cancel</p></div>
          </div>
        </form>
      </div>
    </div>
    `;
  }
}
