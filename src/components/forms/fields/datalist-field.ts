import Datalist from "../controls/datalist/datalist";
import Input from "../controls/inputs/input";
import Field from "./field";

export default class DatalistField<T extends Input> extends Field<T> {
  private readonly _datalist: Datalist;

  constructor(
    label: Field<T>['_label'],
    control: T,
    datalist: DatalistField<T>['_datalist']
  ) {
    super(label, control);

    this._datalist = datalist;
    this.control.root.setAttribute('list', this.datalist.id.toString());
    this.root.appendChild(this._datalist.root);
  }

  public get datalist(): DatalistField<T>['_datalist'] {
    return this._datalist;
  }
}