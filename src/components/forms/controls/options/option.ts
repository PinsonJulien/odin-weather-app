import Component from "../../../component";

export type OptionProps = {
  value?: string | number;
  text?: string;
  key?: number;
};

export default class Option extends Component<HTMLOptionElement> {
  private _value: string | number;
  private _text: string;
  private _key: number;

  constructor(props?: OptionProps) {
    super(document.createElement('option'));

    if(props) {
      if (props.value) this.value = props.value;
      if (props.text) this.text = props.text;
      if (props.key) this.key = props.key;
    }
  }

  public get value(): string | number {
    return this._value;
  }

  public set value(value: string | number) {
    this._value = value;

    this.root.value = this._value.toString();
  }

  public get text(): string {
    return this._text;
  }

  public set text(text: string) {
    this._text = text;

    this.root.textContent = this._text;
  }

  public get key(): number {
    return this._key;
  }

  public set key(key:number) {
    this._key = key;
  }
}