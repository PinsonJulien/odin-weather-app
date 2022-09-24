import { City } from "../../models/city";
import { DailyWeather, Forecast as ForecastModel } from "../../models/forecast";
import { HourlyWeather } from "../../models/forecast";
import OpenMeteo from "./open-meteo";

export default class Forecast extends OpenMeteo {
  constructor() {
    super('api');
  }

  // Returns an array of 7 days which all have detailed and overall data.
  public async getCityForecast(city: City): Promise<ForecastModel[]> {
    const forecast = await this.get(
        "forecast"
        + `?latitude=${city.latitude}`
        + `&longitude=${city.longitude}`
        + `&timezone=${city.timezone}`
        + `&hourly=weathercode,temperature_2m,windspeed_10m`
        + `&daily=weathercode,temperature_2m_max,temperature_2m_min,windspeed_10m_max`
    );
    
    if (!forecast) return;
    const daily = forecast.daily;
    const days = daily.time.length;

    const weekForecast: ForecastModel[] = [];
    
    // Parse through every day
    for (let i = 0; i < days; ++i) {
      // Generate detailed data for each day
      const detailed: HourlyWeather[] = [];
      const pos = i*24;
      for (let j = pos; j < pos + 24; ++j) {
        const hourly = forecast.hourly;
        detailed.push({
          dateTime: hourly.time[j],
          weathercode: hourly.weathercode[j],
          temperature: hourly.temperature_2m[j],
          windspeed: hourly.windspeed_10m[j],
        });
      }

      const overall: DailyWeather = {
        dateTime: daily.time[i],
        weathercode: daily.weathercode[i],
        windspeed: daily.windspeed_10m_max[i],
        temperatureMin: daily.temperature_2m_min[i],
        temperatureMax: daily.temperature_2m_max[i],
      };

      weekForecast.push(new ForecastModel({
        city,
        overall,
        detailed,
      }));
    }

    return weekForecast;
  }
}