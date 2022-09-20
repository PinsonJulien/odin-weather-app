import { City } from "../../models/city";
import OpenMeteo from "./open-meteo";

export default class Geocoding extends OpenMeteo {
  constructor() {
    super('geocoding-api');
  }

  public async searchCity(name: string): Promise<City[]> {
    const cities = await this.get(`search?name=${name}`);
    if (!cities.results) return [];
    
    return cities.results.map((city: any) => {
      return new City({
        name: city.name,
        country: city.country,
        latitude: city.latitude,
        longitude: city.longitude,
      });
    });
  }
}