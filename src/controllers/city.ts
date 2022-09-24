import { Geocoding as GeocodingService } from "../services/open-meteo/geocoding";
import Controller from "./controller";
import { City as CityModel } from "../models/city";

export class City extends Controller {
  private readonly geocodingService: GeocodingService;

  constructor() {
    super();
    this.geocodingService = new GeocodingService();
  }

  public async search(name: string): Promise<CityModel[]> {
    return await this.geocodingService.searchCity(name);
  }
}