import NonVoidElement, { NonVoidElementProps } from "../../non-void-element";
import Legend from "./legends/legend";

export interface FieldsetProps extends NonVoidElementProps {
  legend?: Legend,
}

export default class Fieldset extends NonVoidElement<HTMLFieldSetElement> {
  private _legend: Legend;

  constructor(
    props: FieldsetProps = {},
  ) { 
    super(document.createElement('fieldset'), props);

    if (props.legend) this._legend = props.legend;

    this.refresh();
  }

  // Getters / Setters

  public get legend(): Fieldset['_legend'] {
    return this._legend;
  }

  public set legend(legend: Fieldset['_legend']) {
    this._legend = legend;
    this.refresh();
  }

  // Methods
  public refresh(): void {
    if (this.legend) {
      this.root.insertBefore(
        this.legend.root,
        this.root.childNodes[0]
      );
    }
  }
}