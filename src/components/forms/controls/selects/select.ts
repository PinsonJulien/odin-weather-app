import Control from "../control";
import Option, { OptionProps } from "../options/option";

export default class Select extends Control<HTMLSelectElement> {
  private _options: Option[] = [];

  constructor(
    name: Select['_name'],
    optionProps?: OptionProps[],    
  ) {
    super(document.createElement('select'), name);

    if (optionProps) this.options = optionProps;
  }

  public get options(): Select['_options'] {
    return this._options;
  }

  public set options (optionProps: OptionProps[]) {
    const newOptions: Option[] = [];

    optionProps.forEach((prop) => {
      const optionComponent = new Option(prop);
      newOptions.push(optionComponent);
    });

    this._options = newOptions;
    this.root.replaceChildren(...this._options.map((option) => option.root));
  }
}