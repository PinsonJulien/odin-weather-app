import { City as CityModel } from "../../models/city";
import { City as CityController } from "../../controllers/city";
import { Forecast as ForecastController } from "../../controllers/forecast";

import View from "../view";
import CityForm, { CityFormListener } from "./components/city-form";

export default class Home extends View implements CityFormListener {
  private readonly form: CityForm;
  private readonly cityController: CityController;
  private readonly forecastController: ForecastController;
  
  constructor(
    cityController: Home['cityController'],
    forecastController: Home['forecastController'],
  ) {
    super();

    this.cityController = cityController;
    this.forecastController = forecastController;
    
    this.form = new CityForm(this.cityController, this);

    this.root.append(
      this.form.root,
    );
  }
  
  public async citySelected(city: CityModel): Promise<void> {
    // Get forecast and change the UI
    const forecastData = await this.forecastController.getCityForecast(city);
    console.log(forecastData)
  }
}