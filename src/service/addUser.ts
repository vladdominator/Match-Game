import { closePopup } from '../shared/api/closePopup';
import { clearInput } from '../shared/api/clearInput';
import { init } from './init';
import { sendUserInformation } from './sendRequest';

export function addUser(): void {
  const addButton = document.querySelector('.add__user');
  let count = 0;
  function addUserAccess(e: Event): void {
    e.preventDefault();
    const userActive = document.querySelectorAll('.user__true');
    userActive.forEach((item) => {
      if (+window.getComputedStyle(item, 'opacity').opacity === 1) {
        count++;
      }
    });
    if (count === 3) {
      const firstNameValue = (document.querySelector('#first__name') as HTMLInputElement).value;
      const lastNameValue = (document.querySelector('#last__name') as HTMLInputElement).value;
      const emailValue = (document.querySelector('#e-mail') as HTMLInputElement).value;
      const photoUser = (document.querySelector('.input-User') as HTMLImageElement).src;
      const objUser = {
        first: firstNameValue,
        last: lastNameValue,
        email: emailValue,
        photo: photoUser,
        id: 11
      }
      sendUserInformation(objUser)
      init();
      closePopup(document.querySelector('.popup__registration'));
      clearInput();
    }
    count = 0;
  }
  addButton?.addEventListener('click', (e) => addUserAccess(e));
}
