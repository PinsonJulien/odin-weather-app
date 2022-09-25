import Component from "../component";
import Manifold from "./manifold";

export default class Twofold
<
  P extends HTMLElement,
  F extends Component<any>,
  B extends Component<any>,
> extends Manifold<P> {
  protected readonly frontChild: F;
  protected readonly backChild: B;

  constructor(
    root: P,
    frontChild: F,
    backChild: B
  ) {
    super(
      root,
      [frontChild, backChild]
    );

    this.frontChild = frontChild;
    this.backChild = backChild;
  }

  public swap(): void {
    this.currentChild = (this.currentChild === this.frontChild) 
      ? this.backChild 
      : this.frontChild;
  }
}