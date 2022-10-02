import Element from "../element";
import NonVoidElement, { NonVoidElementProps } from "../non-void-element";

export interface ManifoldProps extends NonVoidElementProps {
  elements?: Manifold<any>['_elements'],
  defaultElement?: Manifold<any>['_currentElement']
}

export default class Manifold<P extends HTMLElement> extends NonVoidElement<P> {
  private _elements: Element<any>[];
  private _currentElement: Element<any>;

  constructor(
    root: P,
    props: ManifoldProps = {},
  ) {
    super(root, props);
    this.addClass('manifold');

    if (props.elements) {
      this._elements = props.elements;

      this.currentElement = (props.defaultElement) ? props.defaultElement : 0;
    }
  }

  public get elements(): Manifold<any>['_elements'] {
    return this._elements;
  } 
  
  public set elements(elements: Manifold<any>['_elements']) {
    this._elements = elements;
  }

  public get currentElement(): Element<any> {
    return this._currentElement;
  }

  public set currentElement(currentElement: Element<any> | number) {
    const element = (currentElement instanceof Element) 
    ? currentElement
    : this.elements[currentElement];

    this._currentElement = element;
    this.replaceChildren(this._currentElement);
  }

  // Methods
  public refresh(): void {}
}