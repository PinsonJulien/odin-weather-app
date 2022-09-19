import { City } from "../../models/city";
import OpenMeteo from "./open-meteo";

export default class Geocoding extends OpenMeteo {
  constructor() {
    super('geocoding-api');
  }

  public async searchCity(name: string): Promise<City[]> {
    return this.get(`search?name=${name}`)
      .then((res) => {
        return res.results.map((city: any) => {
          return new City({
            name: city.name,
            country: city.country,
            latitude: city.latitude,
            longitude: city.longitude,
          });
        });
      })
      .catch((e) => {
        return [];
      })
  }
}