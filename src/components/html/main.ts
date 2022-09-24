import Component from "../component";

export default class Main extends Component<HTMLElement> {
  constructor() {
    super(document.createElement('main'));
  }
}