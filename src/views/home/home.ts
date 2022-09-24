import { City } from "../../models/city";
import Forecast from "../../services/open-meteo/forecast";
import Geocoding from "../../services/open-meteo/geocoding";
import View from "../view";
import CityForm, { CityFormListener } from "./components/city-form";

export default class Home extends View implements CityFormListener {
  private readonly form: CityForm;
  private readonly geocodingController: Geocoding;
  private readonly forecastController: Forecast;
  
  constructor() {
    super();
    this.geocodingController = new Geocoding();
    this.forecastController = new Forecast();
    
    this.form = new CityForm(this.geocodingController, this);

    this.root.append(
      this.form.root,
    );
  }
  
  public async citySelected(city: City): Promise<void> {
    // Get forecast and change the UI
    const forecastData = await this.forecastController.getCityForecast(city);
    console.log(forecastData)
  }
}