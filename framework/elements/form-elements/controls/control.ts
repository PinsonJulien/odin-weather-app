export interface ControlProps {
  name?: string;
  value?: string;
}

export default abstract class Control {
  public abstract get name(): string;
  public abstract set name(name: string);

  public abstract get value(): string;
  public abstract set value(value: string);
}