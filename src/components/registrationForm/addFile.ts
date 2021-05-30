export function addFile(): void {
  const fileInput = document.querySelector('#input__file');
  const fileImage = document.querySelector('.input-User');
  const userLogo = document.querySelector('.icon__db');
  fileInput?.addEventListener('change', (e) => {
    if (fileInput !== null) {
      const input = <HTMLInputElement>e.target;
      const { files } = input;
      if (files !== null && typeof files !== 'string') {
        const file :File = files[0];
        const reader = new FileReader();
        reader.onload = () => {
          if (typeof reader.result === 'string') {
            (fileImage as HTMLImageElement).src = reader.result;
            (userLogo as HTMLImageElement).src = reader.result;
          }
        };
        reader.readAsDataURL(file);
      }
    }
  });
}
