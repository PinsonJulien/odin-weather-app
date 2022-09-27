import NonVoidElement, { NonVoidElementProps } from "../non-void-element";

export interface FormProps extends NonVoidElementProps {
  method?: Form['_method'];
  submit?: Form['_submit'];
  cancel?: Form['_cancel'];
}

export default class Form extends NonVoidElement<HTMLFormElement> {
  private _method: "post" | "get";
  private readonly _submit: (...args: any[]) => any = () => null;
  private readonly _cancel: (...args: any[]) => any = () => null;

  constructor(
    props: FormProps = {},
  ) {
    super(document.createElement('form'), props);

    if (props.submit) this._submit = props.submit;
    if (props.cancel) this._cancel = props.cancel;

    this.method = props.method || "post";
  }

  protected get submit(): Form['_submit'] {
    return this._submit;
  }

  protected get cancel(): Form['_cancel'] {
    return this._cancel;
  }

  private set method(method: Form['_method']) {
    this._method = method;

    this.root.method = this._method;
  }
}