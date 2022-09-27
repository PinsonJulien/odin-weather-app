import Component from "../../component";
import Field from "./fields/field";
import Legend from "./legends/legend";

export interface IFieldset {
  fields: Field<any>[],
  legend: Legend,
}

export default class Fieldset extends Component<HTMLFieldSetElement> {
  private _legend: Legend;
  private _fields: Field<any>[];

  constructor(fieldset: IFieldset) { 
    super(document.createElement('fieldset'));

    this._legend = fieldset.legend;
    this._fields = fieldset.fields;
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
    this.root.replaceChildren(
      this._legend.root,
      ...this.fields.map((f) => f.root),
    );
  }
}