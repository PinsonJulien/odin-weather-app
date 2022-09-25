import { City as CityModel } from "../../models/city";
import { City as CityController } from "../../controllers/city";
import { Forecast as ForecastController } from "../../controllers/forecast";

import View from "../view";
import CityForm, { CityFormListener } from "./components/city-form";
import WeatherCard from "./components/weather-card";
import Div from "../../components/html/div";

export default class Home extends View implements CityFormListener {
  private readonly form: CityForm;
  private readonly cityController: CityController;
  private readonly forecastController: ForecastController;

  private readonly weatherCardsWrap: Div;
  private weatherCards: WeatherCard[];
  
  constructor(
    cityController: Home['cityController'],
    forecastController: Home['forecastController'],
  ) {
    super();

    this.cityController = cityController;
    this.forecastController = forecastController;
    
    this.form = new CityForm(this.cityController, this);
    this.weatherCardsWrap = new Div();

    const swapButton = document.createElement('button');
    swapButton.textContent = "swap";
    swapButton.addEventListener('click', () => {
      this.weatherCards.forEach((wc) => {
        wc.swap();
      });
    });

    this.root.append(
      this.form.root,
      swapButton,
      this.weatherCardsWrap.root
    );
  }
  
  public async citySelected(city: CityModel): Promise<void> {
    // Get forecast and change the UI
    const forecastData = await this.forecastController.getCityForecast(city);
    console.log(forecastData)

    this.weatherCards = forecastData.map((data) => {
      return new WeatherCard(data);
    });

    this.weatherCardsWrap.root.replaceChildren(...this.weatherCards.map((wc) => wc.root));
  }
}