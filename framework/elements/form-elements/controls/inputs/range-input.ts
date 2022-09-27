import Input, { InputProps } from "./input";


export interface RangeInputProps extends InputProps {
  min?: RangeInput['_min'],
  max?: RangeInput['_max'],
  step?: RangeInput['_step']
}

export default class RangeInput extends Input {
  private _min: number;
  private _max: number;
  private _step: number;

  constructor(
    rangeInput: RangeInputProps = {},
  ) {
    super('range', rangeInput);

    if (rangeInput.min) this.min = rangeInput.min;
    if (rangeInput.max) this.max = rangeInput.max;
    if (rangeInput.step) this.step = rangeInput.step;
  }

  public get min(): RangeInput['_min'] {
    return this._min;
  }

  public set min(min: RangeInput['_min']) {
    this._min = min;

    this.root.min = this._min.toString();
  }

  public get max(): RangeInput['_max'] {
    return this._max;
  }

  public set max(max: RangeInput['_max']) {
    this._max = max;

    this.root.max = this._max.toString();
  }

  public get step(): RangeInput['_step'] {
    return this._step;
  }

  public set step(step: RangeInput['_step']) {
    this._step = step;

    this.root.step = this._step.toString();
  }
}