import NonVoidElement, { NonVoidElementProps } from "../../non-void-element";

export interface LabelProps extends NonVoidElementProps {
  for?: Label['for'],
}

export default class Label extends NonVoidElement<HTMLLabelElement> {
  constructor(
    props: LabelProps = {},
  ) {
    super(document.createElement('label'), props);

    if (props.for) this.for = props.for;
  }

  public get for(): string {
    return this.root.htmlFor;
  }

  public set for(htmlFor: string) {
    this.root.htmlFor = htmlFor;
  }
}