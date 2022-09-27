import NonVoidElement, { NonVoidElementProps } from "../non-void-element";

export interface DivProps extends NonVoidElementProps {}

export default class Div extends NonVoidElement<HTMLDivElement> {
  constructor(
    div: DivProps = {},
  ) {
    super(document.createElement('div'), div);
  }
}