import NonVoidElement, { NonVoidElementProps } from "../non-void-element";

export interface ButtonProps extends NonVoidElementProps {}

export default class Button extends NonVoidElement<HTMLButtonElement> {
  constructor(
    props: ButtonProps = {},
  ) {
    super(document.createElement('button'), props);
  }
}