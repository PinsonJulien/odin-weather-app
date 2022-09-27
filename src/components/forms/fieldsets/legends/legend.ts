import Component from "../../../component";

export interface ILegend {
  text: string;
  hidden: boolean;
}

export default class Legend extends Component<HTMLLegendElement> {
  private _text: string;
  private _hidden: boolean;

  constructor(legend: ILegend) {
    super(document.createElement('legend'));

    this.text = legend.text;
    this.hidden = legend.hidden;
  }

  public get text(): Legend['_text'] {
    return this._text;
  }

  public set text(text: Legend['_text']) {
    this._text = text;

    this.root.textContent = text;
  }

  public get hidden(): Legend['_hidden'] {
    return this._hidden;
  }

  public set hidden(hidden: Legend['_hidden']) {
    this._hidden = hidden;

    if (this._hidden) this.addClass('sr-only');
    else this.removeClass('sr-only');
  }
}