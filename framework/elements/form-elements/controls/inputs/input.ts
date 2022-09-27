import VoidElement, { VoidElementProps } from "../../../void-element";
import Control, { ControlProps } from "../control";
import { InputType } from "./input-type";

export interface InputProps extends VoidElementProps, ControlProps {
  valueAsDate?: Input['valueAsDate'],
  valueAsNumber?: Input['valueAsNumber'],
  list?: Input['list'],
}

export default abstract class Input extends VoidElement<HTMLInputElement> implements Control {
  private _type: InputType;

  constructor(
    type: Input['_type'],
    props: InputProps = {},
  ) {
    super(document.createElement('input'), props);
    this.type = type;

    if (props.name) this.name = props.name;
    if (props.list) this.list = props.list;
    if (props.valueAsDate) this.valueAsDate = props.valueAsDate;
    if (props.valueAsNumber) this.valueAsNumber = props.valueAsNumber;
  }

  public get name(): string {
    return this.root.name;
  }

  public set name(name: string) {
    this.root.name = name;
  }
  
  public get value(): string {
    return this.root.value;
  }

  public set value(value: string) {
    this.root.value = value;
  }

  public get type(): Input['_type'] {
    return this._type;
  }

  public set type(type: Input['_type']) {
    this._type = type;
    this.root.type = type;
  }

  public get valueAsDate(): Date {
    return this.root.valueAsDate;
  }

  public set valueAsDate(value: Date) {
    this.root.valueAsDate = value;
  }

  public get valueAsNumber(): number {
    return this.root.valueAsNumber;
  }

  public set valueAsNumber(value: number) {
    this.root.valueAsNumber = value;
  }

  public set list(list: string) {
    this.root.setAttribute('list', list);
  }

  public get list(): string {
    return this.root.getAttribute('list');
  }
}