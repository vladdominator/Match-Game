import { Header } from './components/header/header';
import { Logo } from './components/logo/logo';
import { Navigation } from './components/navigation/navigation';
import { Registration } from './components/registration/registration';
import { Main } from './components/main/main';
import { AboutGame } from './components/aboutGame/aboutGame';
import { RegistrationForm } from './components/registrationForm/registrationForm';
import { UserLogo } from './components/userLogo/userLogo';
import { PopupScore } from './components/popupScore/popupScore';

export class App {
  private readonly header: Header;

  private readonly logo: Logo;

  private readonly userLogo: UserLogo;

  private readonly navigation: Navigation;

  private readonly registration: Registration;

  private readonly main: Main;

  private readonly aboutGame: AboutGame;

  private readonly registrationForm: RegistrationForm;

  private readonly popupScore: PopupScore;

  constructor(private readonly rootElement: HTMLElement) {
    this.header = new Header();
    this.logo = new Logo();
    this.userLogo = new UserLogo();
    this.navigation = new Navigation();
    this.registration = new Registration();
    this.main = new Main();
    this.aboutGame = new AboutGame();
    this.registrationForm = new RegistrationForm();
    this.popupScore = new PopupScore();
  }

  init(): void {
    this.rootElement.appendChild(this.registrationForm.element);
    this.rootElement.appendChild(this.popupScore.element);
    this.rootElement.appendChild(this.header.element);
    const navElement : HTMLElement | null = document.querySelector('.container__nav');
    navElement?.appendChild(this.logo.element);
    navElement?.appendChild(this.navigation.element);
    document.querySelector('.container')?.append(this.registration.element);
    document.querySelector('.container')?.append(this.userLogo.element);
    this.rootElement.appendChild(this.main.element);
    this.main.element.appendChild(this.aboutGame.element);
  }

  addRegistrationForm(): void {
    this.registration.addForm(this.registrationForm.element);
  }
}
