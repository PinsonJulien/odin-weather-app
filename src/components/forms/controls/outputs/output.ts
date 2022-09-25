import Component from "../../../component";

export default class Output extends Component<HTMLOutputElement> {
  constructor() {
    super(document.createElement('output'));
  }

  public get value(): string {
    return this.root.value;
  }

  public set value(value: string) {
    this.root.value = value;
  }

  public get name(): string {
    return this.root.name;
  }

  public set name(name: string) {
    this.root.name = name;
  }
}