import NonVoidElement, { NonVoidElementProps } from "../../../non-void-element";
import Control, { ControlProps } from "../control";

export interface OutputProps extends NonVoidElementProps, ControlProps {}

export default class Output extends NonVoidElement<HTMLOutputElement> implements Control {
  constructor(
    output: OutputProps = {},
  ) {
    super(document.createElement('output'), output);
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
}