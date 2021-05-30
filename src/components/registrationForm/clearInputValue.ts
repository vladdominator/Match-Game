import { clearInput } from '../../shared/api/clearInput';
import { closePopup } from '../../shared/api/closePopup';

export function clearInputValue(): void {
  const buttonCancel = document.querySelector('.cancel__input');
  buttonCancel?.addEventListener('click', () => {
    clearInput();
    closePopup(document.querySelector('.popup__registration'));
  });
}
