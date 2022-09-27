import NonVoidElement, { NonVoidElementProps } from "../non-void-element";

export interface ParagraphProps extends NonVoidElementProps {}

export default class Paragraph extends NonVoidElement<HTMLParagraphElement> {
  constructor(
    paragraph: ParagraphProps = {},
  ) {
    super(document.createElement('p'), paragraph);
  }
}