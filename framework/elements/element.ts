export interface ElementProps {
  id?: Element<any>['id'],
  classes?: string[]
}

export default abstract class Element<H extends (HTMLElement | SVGElement)> {
  private readonly _root: H;

  constructor(
    root: H,
    props: ElementProps = {}, 
  ) {
    this._root = root;

    if (props.id) this.id = props.id;
    if (props.classes) this.addClass(...props.classes);
  }

  // Abstract methods
  public abstract refresh(): void;

  // Getters / Setters
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

  // Methods

  public addClass(...classes: string[]) {
    this.classList.add(...classes);
  }

  public removeClass(...classes: string[]) {
    this.classList.remove(...classes);
  }
}