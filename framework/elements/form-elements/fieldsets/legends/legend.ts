import NonVoidElement, { NonVoidElementProps } from "../../../non-void-element";

export interface LegendProps extends NonVoidElementProps {
  hidden?: boolean;
}

export default class Legend extends NonVoidElement<HTMLLegendElement> {
  private _hidden: boolean;

  constructor(
    props: LegendProps = {},
  ) {
    super(document.createElement('legend'), props);

    if (props.hidden) this.hidden = props.hidden;
  }

  // Getters / Setters
  public get hidden(): Legend['_hidden'] {
    return this._hidden;
  }

  public set hidden(hidden: Legend['_hidden']) {
    this._hidden = hidden;

    if (this._hidden) this.addClass('sr-only');
    else this.removeClass('sr-only');
  }

  // Methods
  public refresh(): void {}
}