export function closePopup(registrationForm: Element | null): void {
  if (registrationForm !== null) {
    registrationForm.classList.remove('popup__registration-active');
    document.body.classList.remove('body-lock');
    registrationForm.children[0].children[0].classList.remove('popup__content-registration-active');
  }
}
