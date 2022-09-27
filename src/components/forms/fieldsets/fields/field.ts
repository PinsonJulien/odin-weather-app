import Div from "../../../html/div";
import Control from "../../controls/control";
import Label from "../../labels/label";

export interface IField<C extends Control<any>> {
  id: string,
  control: C,
  label: Label,
}

export default class Field<C extends Control<any>> extends Div {
  private _id: string;
  private _label: Label;
  private _control: C;

  constructor(field: IField<C>) {
    super();

    this._id = field.id;
    this._label = field.label;
    this._control = field.control;

    this.refresh();
  }

  public get id(): Field<C>['_id'] {
    return this._id;
  }

  public set id(id: Field<C>['_id']) {
    this._id = id;
    this.refresh();
  }

  public get label(): Field<C>['_label'] {
    return this._label;
  }

  public set label(label: Field<C>['_label']) {
    this._label = label;
    this.refresh();
  }

  public get control(): Field<C>['_control'] {
    return this._control;
  }

  public set control(control: Field<C>['_control']) {
    this._control = control;
    this.refresh();
  }

  private refresh() {
    this.label.htmlFor = this.id;
    this.control.id = this.id;

    this.root.replaceChildren(
      this.label.root,
      this.control.root
    );
  }

  public setValidity(error: string = "") {
    this.control.root.setCustomValidity(error);
  }
}