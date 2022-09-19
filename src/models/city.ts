import Model from "./model";

export interface ICity {
  name: string;
  country: string;
  latitude: number;
  longitude: number;
}

export class City extends Model {
  private _name: string;
  private _country: string;
  private _latitude: number;
  private _longitude: number;

  constructor(city: ICity) {
    super();

    this.name = city.name;
    this.country = city.country;
    this.latitude = city.latitude;
    this.longitude = city.longitude;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get country(): string {
    return this._country;
  }

  public set country(country: string) {
    this._country = country;
  }

  public get latitude(): number {
    return this._latitude;
  }

  public set latitude(latitude: number) {
    this._latitude = latitude;
  }

  public get longitude(): number {
    return this._longitude;
  }

  public set longitude(longitude: number) {
    this._longitude = longitude;
  }

  public getRawObject(): ICity {
    return {
      name: this.name,
      country: this.country,
      latitude: this.latitude,
      longitude: this.longitude
    }
  }
}