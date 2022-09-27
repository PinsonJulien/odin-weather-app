import Component from "../component";

export default class Manifold<P extends HTMLElement> extends Component<P> {
  private _children: Component<any>[];

  private _currentChild: Component<any>;

  constructor(
    root: P,
    childs: Component<any>[],
    defaultChild?: Component<any> | number
  ) {
    super(root);
    this._children = childs;

    if (defaultChild) this.currentChild = defaultChild;
  }

  public get children(): Component<any>[] {
    return this._children;
  }

  public set children(children: Component<any>[]) {
    this._children = children;
  }

  public set currentChild(currentChild: Component<any> | number) {
    const child = (currentChild instanceof Component) 
    ? currentChild 
    : this.children[currentChild];

    this._currentChild = child;
    this.root.replaceChildren(this._currentChild.root);
  }

  public get currentChild(): Component<any> {
    return this._currentChild;
  }
}