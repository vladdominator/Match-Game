import { BaseComponent } from '../../shared/api/base-component';

export class User extends BaseComponent {
  constructor(firstName: string, lastName: string, email: string, photo: string,
    score: number | undefined) {
    super('div', ['score__container'])
    this.element.innerHTML = `
    <div class="user__information">
      <div class="user__photo">
        <img class="user__photo_img" src="${photo}">
      </div>
      <div class="user__info">
        <div class="user__name">
          <span class="user__name_first">${firstName}</span>
          <span class="user__name_last">${lastName}</span>
        </div>
        <div class="user__login_mail">
          ${email}
        </div>
      </div>
    </div>
    <div class="user__score">
      <span>Score:</span>
      <span class="user__score_inf">${score}</span>
    </div>
    `
  }
}
