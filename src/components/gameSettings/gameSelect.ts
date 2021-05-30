interface Isettings {
  Difficulty: string | null,
  Cards: string | null
}
const dbSettings: Isettings = {
  Difficulty: '',
  Cards: '',
}
export function selectOption(): void {
  const buttonSelect = document.querySelectorAll('.select');
  const buttonOption = document.querySelectorAll('.option__item');
  const textSelect = document.querySelectorAll('.game__text');
  const selectIcon = document.querySelectorAll('.select__icon');
  buttonSelect?.forEach((item, i) => {
    item.addEventListener('click', () => {
      (item.nextElementSibling as HTMLElement).classList.toggle('select__settings_option-active');
      selectIcon[i].classList.toggle('select__icon-active');
    });
  });
  buttonOption.forEach((item, i) => {
    item.addEventListener('click', () => {
      if (i < 3) {
        (buttonSelect[0].nextElementSibling as HTMLElement).classList.remove('select__settings_option-active');
        textSelect[0].textContent = item.textContent;
        dbSettings.Cards = item.textContent;
      } else {
        (buttonSelect[1].nextElementSibling as HTMLElement).classList.remove('select__settings_option-active');
        textSelect[1].textContent = item.textContent;
        dbSettings.Difficulty = item.textContent;
      }
      buttonOption.forEach((items, j, arr) => {
        if (i < 3) {
          if (j < 3) arr[j].classList.remove('option__item-active');
        } else if (j >= 3) {
          arr[j].classList.remove('option__item-active');
        }
      });
      item.classList.add('option__item-active');
    });
  });
}
export { dbSettings };
