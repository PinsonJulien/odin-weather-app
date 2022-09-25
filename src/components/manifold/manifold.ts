import Component from "../component";

export default class Manifold<P extends HTMLElement> extends Component<P> {
  private readonly _children: Component<any>[];

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

  public set currentChild(currentChild: Component<any> | number) {
    const child = (currentChild instanceof Component) 
    ? currentChild 
    : this.children[currentChild];

    if (this._currentChild) this.root.replaceChild(child.root, this._currentChild.root);
    else this.root.appendChild(child.root);

    this._currentChild = child;
  }

  public get currentChild(): Component<any> {
    return this._currentChild;
  }
}