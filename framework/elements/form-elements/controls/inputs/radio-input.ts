import Input, { InputProps } from "./input";

export interface RadioInputProps extends InputProps {}

export default class RadioInput extends Input {
  constructor(
    radioInput : RadioInputProps = {},
  ) {
    super('radio', radioInput);
  }
}