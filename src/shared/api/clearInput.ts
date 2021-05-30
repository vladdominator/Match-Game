export function clearInput(): void {
  const inputsForm = document.querySelectorAll('input');
  const firstNameInput = document.querySelectorAll('.check__input');
  const errorMessage = document.querySelectorAll('.error__message');
  const fileImage = document.querySelector('.input-User');
  inputsForm.forEach((item) => {
    item.value = '';
  });
  errorMessage.forEach((item) => {
    item.textContent = '';
  });
  firstNameInput.forEach((item) => {
    item.parentElement?.children[1].classList.remove('user__true-active');
    item.parentElement?.children[2].classList.remove('user__false-active');
  });
  (fileImage as HTMLImageElement).src = './images/user.png';
}
