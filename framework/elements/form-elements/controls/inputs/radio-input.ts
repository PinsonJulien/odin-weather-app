import Input, { InputProps } from "./input";

export interface RadioInputProps extends InputProps {
  checked?: RadioInput['checked'],
}

export default class RadioInput extends Input {
  constructor(
    props : RadioInputProps = {},
  ) {
    super('radio', props);

    if (props.checked) this.checked = props.checked;
  }

  public get checked(): boolean {
    return this.root.checked;
  }

  public set checked(checked: boolean) {
    this.root.checked = checked;
  }
}