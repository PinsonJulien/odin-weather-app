import { City } from "./city";
import Model from "./model";

export interface Weather {
  dateTime: Date;
  weathercode: number;
  windspeed: number;
};

export interface DailyWeather extends Weather {
  temperatureMin: number;
  temperatureMax: number;
};

export interface HourlyWeather extends Weather {
  temperature: number;
};

export interface IForecast {
  city: Forecast['_city'];
  overall: Forecast['_overall'];
  detailed: Forecast['_detailed'];
}

export class Forecast extends Model {
  private _city: City;
  private _overall: DailyWeather;
  private _detailed: HourlyWeather[];
  
  constructor(forecast: IForecast) {
    super();

    this.city = forecast.city;
    this.overall = forecast.overall;
    this.detailed = forecast.detailed;
  }

  public get city(): Forecast['_city'] {
    return this._city;
  }

  public set city(city: Forecast['_city']) {
    this._city = city;
  }

  public get overall(): Forecast['_overall'] {
    return this._overall;
  }

  public set overall(overall: Forecast['_overall']) {
    this._overall = overall;
  }

  public get detailed(): Forecast['_detailed'] {
    return this._detailed;
  }

  public set detailed(detailed: Forecast['_detailed']) {
    this._detailed = detailed;
  }

  public getRawObject(): IForecast {
    return {
      city: this.city,
      overall: this.overall,
      detailed: this.detailed
    };
  }
}