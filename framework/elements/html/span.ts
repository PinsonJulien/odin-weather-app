import NonVoidElement, { NonVoidElementProps } from "../non-void-element";

export interface SpanProps extends NonVoidElementProps {}

export default class Span extends NonVoidElement<HTMLSpanElement> {
  constructor(
    props: SpanProps = {}
  ) {
    super(document.createElement('span'), props);
  }

  public refresh(): void {}
}