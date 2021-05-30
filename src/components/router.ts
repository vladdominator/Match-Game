import { addUsers } from './addUsers';
import { clearValue } from './gamePage/cardHandler';
import { gameInit } from './gamePage/gameInit';
import { timeGame } from './gamePage/timeInit';
import { selectOption } from './gameSettings/gameSelect';
import { User } from './user/user';

const gameTime = document.querySelector('.game__clock')?.children[0];
interface Route {
  page: string
}
interface RouteState {
  page: string | null;
}
interface RoutingString {
  [key: string]: string;
}
export class Routing {
  private rootPrivate: string;

  private routesPrivate: RoutingString;

  private rootElementPrivate: HTMLElement | null;

  private navLinks: NodeListOf<HTMLLinkElement>;

  constructor(root: string, routes: RoutingString, rootElement: HTMLElement | null) {
    this.rootPrivate = root;
    this.routesPrivate = routes;
    this.rootElementPrivate = rootElement;
    this.navLinks = document.querySelectorAll('.nav__elements');
  }

  public deleteStyles(): void {
    this.navLinks.forEach((item) => {
      item.id = '';
    });
  }

  init(): void {
    window.addEventListener('popstate', async() => {
      timeGame(gameTime, false);
      clearValue();
      const state: Route = { page: window.location.hash };
      this.deleteStyles();
      this.navLinks.forEach((item) => {
        if(item.getAttribute('href')  === state.page) {
          item.id = 'active';
        }
      })
      if (this.rootElementPrivate !== null) {
        if (state.page) {
          const userGameButton = document.querySelector('.button__start');
          (userGameButton as HTMLLinkElement).href = '#game';
          if (state.page === '#settings') {
            this.rootElementPrivate.innerHTML = this.routesPrivate[state.page];
            selectOption();
          } else if (state.page === '#game') {
            this.rootElementPrivate.innerHTML = this.routesPrivate[state.page];
            gameInit();
          } else if (state.page === '#score'){
            this.addUsersScore(state);
          } else {
            this.rootElementPrivate.innerHTML = this.routesPrivate[state.page];
          }
        } else {
          this.rootElementPrivate.innerHTML = this.routesPrivate[this.rootPrivate as string];
        }
      }
    });
  }

  updateState(state: Route): void {
    this.deleteStyles();
    clearValue();
    const arg = ['#about', '#score', '#settings'];
    arg.forEach((item, i) => {
      if(item === state.page) {
        this.navLinks[i].id = 'active';
      }
    })
    this.getFragment(state);
    timeGame(gameTime, false);
    if (state.page === '#settings') selectOption();
    if (state.page === '#game') gameInit();
    if (state.page === '#score') this.addUsersScore(state);
  }

  getFragment(state: RouteState): void {
    if (this.rootElementPrivate !== null && state !== null) {
      this.rootElementPrivate.innerHTML = this.routesPrivate[state.page as string];
      if (state.page === '#settings') selectOption();
      if (state.page === '#settings') selectOption();
      if (state.page === '#game') gameInit();
    }
  }

  public async addUsersScore(state: Route ): Promise<void> {
    clearValue();
    if(this.rootElementPrivate) this.rootElementPrivate.innerHTML = this.routesPrivate[state.page];
    const mainScore = document.querySelector('.score__game');
    const usersSort = await addUsers();
    usersSort?.forEach((item, i) => {
      if (i < 10) {
        mainScore?.append(new User(item.first, item.last, item.email, item.photo, item.score).element);
      }
    })
  }
}
