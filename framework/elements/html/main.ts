import NonVoidElement, { NonVoidElementProps } from "../non-void-element";

export interface MainProps extends NonVoidElementProps {}

export default class Main extends NonVoidElement<HTMLElement> {
  constructor(
    main: MainProps = {},
  ) {
    super(document.createElement('main'), main);
  }

  // Methods
  public refresh(): void {}
}