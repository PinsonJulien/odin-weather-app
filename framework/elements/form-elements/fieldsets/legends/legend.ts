import NonVoidElement, { NonVoidElementProps } from "../../../non-void-element";

export interface LegendProps extends NonVoidElementProps {}

export default class Legend extends NonVoidElement<HTMLLegendElement> {
  constructor(
    props: LegendProps = {},
  ) {
    super(document.createElement('legend'), props);
  }

  // Methods
  public refresh(): void {}
}