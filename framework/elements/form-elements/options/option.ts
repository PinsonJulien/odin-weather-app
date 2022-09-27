import NonVoidElement, { NonVoidElementProps } from "../../non-void-element";

export interface IOption extends NonVoidElementProps {
  value?: Option['_value'],
  key?: Option['_key']
}

export default class Option extends NonVoidElement<HTMLOptionElement> {
  private _value: string | number;
  private _key: number;

  constructor(
    props: IOption = {}
  ) {
    super(document.createElement('option'), props);

    if (props.value) this.value = props.value;
    if (props.key) this.key = props.key;
  }

  public get value(): string | number {
    return this._value;
  }

  public set value(value: string | number) {
    this._value = value;

    this.root.value = this._value.toString();
  }

  public get key(): number {
    return this._key;
  }

  public set key(key:number) {
    this._key = key;
  }
}