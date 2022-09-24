import Component from "../component";


export interface IForm {
  submit?: Form['_submit'];
  cancel?: Form['_cancel'];
}

export default class Form extends Component<HTMLFormElement> {
  private _method: "post" | "get";
  private readonly _submit: (...args: any[]) => any = () => null;
  private readonly _cancel: (...args: any[]) => any = () => null;

  constructor(
    form?: IForm
  ) {
    super(document.createElement('form'));

    if (form) {
      if (form.submit) this._submit = form.submit;
      if (form.cancel) this._cancel = form.cancel;
    }

    this.method = "post";
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