import { City } from "../../models/city";
import OpenMeteo from "./open-meteo";

export class Geocoding extends OpenMeteo {
  constructor() {
    super('geocoding-api');
  }

  public async searchCity(name: string): Promise<City[]> {
    const cities = await this.get(`search?name=${name}`);
    if (!cities.results) return [];
    
    return cities.results.map((city: any) => {
      let admin = city.admin1;
      if (city.admin2) admin += ", " + city.admin2; 

      return new City({
        name: city.name,
        country: city.country,
        admin: admin,
        latitude: city.latitude,
        longitude: city.longitude,
        timezone: city.timezone
      });
    });
  }
}