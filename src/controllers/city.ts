import { Geocoding as GeocodingService } from "../services/open-meteo/geocoding";
import { City as CityModel } from "../models/city";
import Controller from "../../framework/controllers/controller";

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