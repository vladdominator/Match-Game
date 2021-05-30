import './zeroing.scss';
import './style.scss';
import './fonts.scss';
import { App } from './app';
import { checkInput } from './components/registrationForm/checkInput';
import { addRouting } from './components/routing';
import { addUser } from './service/addUser';
import { addFile } from './components/registrationForm/addFile';
import { clearInputValue } from './components/registrationForm/clearInputValue';

window.addEventListener('load', () => {
  const appElement:HTMLElement = document.body;
  if (!appElement) throw Error('No body in html document.');
  const app = new App(appElement);
  app.init();
  app.addRegistrationForm();
  addFile();
  checkInput();
  addRouting();
  addUser();
  clearInputValue();
});
