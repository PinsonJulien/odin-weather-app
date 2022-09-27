import Input, { InputProps } from "./input";

export interface DateInputProps extends InputProps {}

export default class DateInput extends Input {
  constructor(
    dateInput: DateInputProps = {}
  ) {
    super('date', dateInput);
  }
}