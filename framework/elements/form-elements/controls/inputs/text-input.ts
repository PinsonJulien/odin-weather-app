import Input, { InputProps } from "./input";

export interface TextInputProps extends InputProps {}

export default class TextInput extends Input {
  constructor(
    props: TextInputProps = {},
  ) {
    super('text', props);
  }
}