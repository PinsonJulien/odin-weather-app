import Controller from "../../framework/controllers/controller";
import { Forecast as ForecastService } from "../services/open-meteo/forecast";
import { City as CityModel } from "../models/city";
import { Forecast as ForecastModel } from "../models/forecast";

export class Forecast extends Controller {
  private readonly forecastService: ForecastService;

  constructor() {
    super();

    this.forecastService = new ForecastService();
  }

  public async getCityForecast(city: CityModel): Promise<ForecastModel[]> {
    return await this.forecastService.getCityForecast(city);
  }
}