import Component from "../component";
import Manifold from "./manifold";

export default class Twofold
<
  P extends HTMLElement,
  F extends Component<any>,
  B extends Component<any>,
> extends Manifold<P> {
  protected readonly _frontChild: F;
  protected readonly _backChild: B;

  constructor(
    root: P,
    frontChild: F,
    backChild: B
  ) {
    super(
      root,
      [frontChild, backChild]
    );

    this._frontChild = frontChild;
    this._backChild = backChild;
  }

  public get frontChild(): F {
    return this._frontChild;
  }

  public get backChild(): B {
    return this._backChild;
  }

  public swap(): void {
    this.currentChild = (this.currentChild === this.frontChild) 
      ? this.backChild 
      : this.frontChild;
  }
}