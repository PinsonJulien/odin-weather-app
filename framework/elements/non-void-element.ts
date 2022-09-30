import Element, { ElementProps } from "./element";

export interface NonVoidElementProps extends ElementProps {
  textContent?: NonVoidElement<any>['textContent'],
  innerHTML?: NonVoidElement<any>['innerHTML'],
  children?: NonVoidElement<any>['_children']
}

// Non void elements are html elements with closing tags.
export default abstract class NonVoidElement<H extends (HTMLElement | SVGElement)> extends Element<H> {
  private _children: Element<any>[] = [];

  constructor(
    root: H,
    props: NonVoidElementProps = {}
  ) {
    super(root, props);
    
    if (props.textContent) this.textContent = props.textContent;
    if (props.innerHTML) this.innerHTML = props.innerHTML;
    if (props.children) this.children = props.children;
  }

  // Getters setters
  public get children(): NonVoidElement<any>['_children'] {
    return this._children;
  }

  public set children(children: NonVoidElement<any>['_children']) {
    this._children = children;
    this.root.replaceChildren(
      ...children.map((e) => {return e.root; })
    );
  }

  public get textContent(): string {
    return this.root.textContent;
  }

  public set textContent(textContent: string) {
    this.root.textContent = textContent;
  }

  public get innerHTML(): string {
    return this.root.innerHTML;
  }

  public set innerHTML(innerHTML: string) {
    this.root.innerHTML = innerHTML;
  }

  // Methods
  public append(...elements: Element<any>[]) {
    elements.forEach((e) => this.appendChild(e));
  }

  public appendChild(element: Element<any>) {
    this.root.appendChild(element.root);

    this.children.push(element);
  }

  public replaceChildren(...elements: Element<any>[]) {
    this.children = elements;
  }

  public replaceChild(element: Element<any>, target: number | Element<any>) {
    const tmp = this.children;

    const id = (target instanceof Element) 
      ? tmp.indexOf(target)
      : target; 

    tmp[id] = element;

    this.children = tmp;
  }

  public insertChildBefore(element: Element<any>, before: number | Element<any>) {
    const tmp = this.children;

    const id = (before instanceof Element) 
    ? this.getChildPosition(before)
    : before;

    tmp.splice(id, 0, element);
    
    this.children = tmp;
  }

  public insertChildAfter(element: Element<any>, after: number | Element<any>) {
    const tmp = this.children;

    const id = (after instanceof Element)
      ? this.getChildPosition(after)
      : after;

    tmp.splice(id + 1, 0, element);
    
    this.children = tmp;
  }

  public getChildPosition(element: Element<any>) {
    return this.children.indexOf(element);
  }
}