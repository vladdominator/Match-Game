export function checkInput(): void {
  const firstNameInput = document.querySelectorAll('.check__input');
  function deleteAccess(item: Element, value: string, errorMessage: string): void {
    if (value.trim().length === 0) {
      (item.parentElement?.nextElementSibling as Element).textContent = `${errorMessage} must can't be empty.`;
    } else if (item.id === 'e-mail') {
      (item.parentElement?.nextElementSibling as Element).textContent = `Invalid ${errorMessage}.`;
    } else {
      (item.parentElement?.nextElementSibling as Element).textContent = `
      The ${errorMessage} can not contain service characters and consist of numbers.
      `;
    }
    item.parentElement?.children[2].classList.add('user__false-active');
    item.parentElement?.children[1].classList.remove('user__true-active');
  }
  function addAccess(item: Element): void {
    (item.parentElement?.nextElementSibling as Element).textContent = '';
    item.parentElement?.children[1].classList.add('user__true-active');
    item.parentElement?.children[2].classList.remove('user__false-active');
  }
  firstNameInput.forEach((item) => {
    item?.addEventListener('input', () => {
      const { value } = (item as HTMLInputElement);
      if (item.id === 'first__name' || item.id === 'last__name') {
        if (/[~&!@#$%№*()_—+=|:;"'`<>,.?/^]|[0-9]/.test(value) || value.trim().length === 0) {
          deleteAccess(item, value, item.id === 'first__name' ? 'First Name' : 'Last Name');
        } else {
          addAccess(item);
        }
      } else if (item.id === 'e-mail') {
        const unicode = /^.*?@\w+\.\w{2,5}$/;
        if (!unicode.test(value) || value.trim().length === 0) {
          deleteAccess(item, value, 'E-mail');
        } else {
          addAccess(item);
        }
      }
    });
  });
}
