export interface ElementProps {
  id?: Element<any>['id'],
  classes?: string[]
}

export default class Element<H extends (HTMLElement | SVGElement)> {
  private readonly _root: H;

  constructor(
    root: H,
    props: ElementProps = {}, 
  ) {
    this._root = root;

    if (props.id) this.id = props.id;
    if (props.classes) this.addClass(...props.classes);
  }

  public get root() {
    return this._root;
  }

  public get id() {
    return this.root.id;
  }

  public set id(id: string) {
    this.root.id = id;
  }

  public get classList(): DOMTokenList {
    return this.root.classList;
  }

  public addClass(...classes: string[]) {
    this.classList.add(...classes);
  }

  public removeClass(...classes: string[]) {
    this.classList.remove(...classes);
  }
}