import Div, { DivProps } from "../../../html/div";
import { ControlElement } from "../../controls/controls";
import Label from "../../labels/label";

export interface FieldProps<C extends ControlElement> extends DivProps {
  sharedId?: string,
  control?: C,
  label?: Label,
}

export default class Field<C extends ControlElement> extends Div {
  private _sharedId: string;
  private _label: Label;
  private _control: C;

  constructor(
    props: FieldProps<C> = {},
  ) {
    super(props);

    if (props.control) this._control = props.control;
    if (props.label) this._label = props.label;

    if (props.sharedId) {
      this._sharedId = props.sharedId;
      if (this.control) this.control.id = props.sharedId;
      if (this.label) this.label.for = props.sharedId;
    }

    this.refresh();
  }

  public get sharedId(): Field<C>['_sharedId'] {
    return this._sharedId;
  }

  public set sharedId(sharedId: Field<C>['_sharedId']) {
    this._sharedId = sharedId;
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
    const components = [];
    if (this.label) {
      components.push(this.label);
      this.label.for = this.sharedId;
    }
    if (this.control) {
      components.push(this.control);
      this.control.id = this.sharedId;
    } 

    this.root.replaceChildren(
      ...components.map((c) => c.root)
    );
  }

  public setValidity(error: string = "") {
    this.control.root.setCustomValidity(error);
  }
}