import NonVoidElement, { NonVoidElementProps } from "../../non-void-element";
import Field from "./fields/field";
import Legend from "./legends/legend";

export interface FieldsetProps extends NonVoidElementProps {
  fields?: Field<any>[],
  legend?: Legend,
}

export default class Fieldset extends NonVoidElement<HTMLFieldSetElement> {
  private _legend: Legend;
  private _fields: Field<any>[];

  constructor(
    props: FieldsetProps = {},
  ) { 
    super(document.createElement('fieldset'));

    if (props.fields) this._fields = props.fields;
    if (props.legend) this._legend = props.legend;

    this.refreshElements();
  }

  public get legend(): Fieldset['_legend'] {
    return this._legend;
  }

  public set legend(legend: Fieldset['_legend']) {
    this._legend = legend;
    this.refreshElements();
  }

  public get fields(): Fieldset['_fields'] {
    return this._fields;
  }

  public set fields(fields: Fieldset['_fields']) {
    this._fields = fields;
    this.refreshElements();
  }

  private refreshElements() {
    const elements = [];

    if (this.legend) elements.push(this.legend);
    if (this.fields) elements.push(...this.fields);

    this.root.replaceChildren(
      ...elements.map((e) => e.root)
    );
  }
}