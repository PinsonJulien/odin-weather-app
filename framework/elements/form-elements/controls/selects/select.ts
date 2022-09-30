import NonVoidElement, { NonVoidElementProps } from "../../../non-void-element";
import Control, { ControlProps } from "../control";
import Option from "../../options/option";

export interface ISelect extends NonVoidElementProps, ControlProps {
  options?: Select['_options'],
}

export default class Select extends NonVoidElement<HTMLSelectElement> implements Control {
  private _options: Option[] = [];

  constructor(
    select: ISelect = {},
  ) {
    super(document.createElement('select'), select);

    if (select.options) this.options = select.options;
  }

  // Getters / Setters

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

  public get options(): Select['_options'] {
    return this._options;
  }

  public set options (options: Select['_options']) {
    this._options = options;
    this.root.replaceChildren(...this._options.map((o) => o.root));
  }

  // Methods
  public refresh(): void {}
}