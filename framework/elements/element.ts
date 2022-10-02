export interface ElementProps {
  id?: Element<any>['id'],
  classes?: string[],
  hidden?: boolean,
  invisible?: Element<any>['invisible'],
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
    if (props.hidden) this.hidden = props.hidden;
    if (props.invisible) this.invisible = props.invisible;
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

  public get hidden(): boolean {
    return this.classList.contains('hidden');
  }

  public set hidden(hidden: boolean) {
    if (hidden) this.addClass('hidden');
    else this.removeClass('hidden');
  }

  public get invisible(): boolean {
    return this.classList.contains('invisible');
  }

  public set invisible(invisible: boolean) {
    if (invisible) this.addClass('invisible');
    else this.removeClass('invisible');
  }

  // Methods
  public addClass(...classes: string[]) {
    this.classList.add(...classes);
  }

  public removeClass(...classes: string[]) {
    this.classList.remove(...classes);
  }
}