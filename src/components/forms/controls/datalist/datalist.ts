import Component from "../../../component";
import Option from "../options/option";

export default class Datalist extends Component<HTMLDataListElement> {
  private _options: Option[];

  constructor(id: string) {
    super(document.createElement('datalist'));
    this.id = id;
  }

  public get options(): Option[] {
    return this._options;
  }

  public set options(options: Option[]) {
    this._options = options;

    this.root.replaceChildren(
      ...this._options.map((option) => option.root)
    );
  }
}