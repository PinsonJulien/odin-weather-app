import Element from "../element";
import { NonVoidElementProps } from "../non-void-element";
import Manifold from "./manifold";

export interface TwofoldProps extends NonVoidElementProps{}

export default class Twofold
<
  P extends HTMLElement,
  F extends Element<any>,
  B extends Element<any>,
> extends Manifold<P> {
  protected readonly _frontElement: F;
  protected readonly _backElement: B;

  constructor(
    root: P,
    frontElement: F,
    backElement: B,
    props: TwofoldProps = {},
  ) {
    super(
      root,
      {
        ...props,
        ...{
          elements : [frontElement, backElement],
          defaultElement: frontElement,
        },
      }
    );

    this._frontElement = frontElement;
    this._backElement = backElement;
  }

  public get frontElement(): F {
    return this._frontElement;
  }

  public get backElement(): B {
    return this._backElement;
  }

  public swap(): void {
    this.currentElement = (this.currentElement === this.frontElement) 
      ? this.backElement 
      : this.frontElement;
  }
}