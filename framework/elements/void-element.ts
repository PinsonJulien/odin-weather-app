import Element, { ElementProps } from "./element";

export interface VoidElementProps extends ElementProps {}

// Void elements are html elements without closing tag.
export default abstract class VoidElement<H extends (HTMLElement | SVGElement)> extends Element<H> {
  constructor(
    root: H,
    props: VoidElementProps = {}
  ) {
    super(root, props);
  }
}