import { City } from "../../models/city";
import OpenMeteo from "./open-meteo";

export default class Forecast extends OpenMeteo {
  constructor() {
    super('api');
  }

  public async getCityForecast(city: City): Promise<any[]> {
    return this.get(`forecast?latitude=${city.latitude}&longitude=${city.longitude}&hourly=temperature_2m`)
      .then((res) => {
        console.log(res)
        return res;
      })
      .catch((e) => {
        return [];
      });
  }
}