import Div from "../../framework/elements/html/div";
import Main from "../../framework/elements/html/main";

export default class Layout extends Div {
  private readonly _main: Main;

  constructor() {
    super();
    this.id = "layout";
    this._main = new Main();

    this.appendChild(this._main);
  }

  public get main(): Layout['_main'] {
    return this._main;
  }
}