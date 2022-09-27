import { City as CityModel } from "../../models/city";
import { City as CityController } from "../../controllers/city";
import { Forecast as ForecastController } from "../../controllers/forecast";

import View from "../view";
import CityForm, { CityFormListener } from "./components/city-form";
import WeatherCard from "./components/weather-card";
import Div from "../../components/html/div";
import Paragraph from "../../components/html/paragraph";
import Fieldset from "../../components/forms/fieldsets/fieldset";
import Field from "../../components/forms/fieldsets/fields/field";
import RadioInput from "../../components/forms/controls/inputs/radio-input";
import Label from "../../components/forms/labels/label";
import Legend from "../../components/forms/fieldsets/legends/legend";
import Manifold from "../../components/manifold/manifold";

export default class Home extends View implements CityFormListener {
  private readonly form: CityForm;
  private readonly cityController: CityController;
  private readonly forecastController: ForecastController;

  // Components
  private readonly dateRadios: Fieldset;
  private readonly cityName: Paragraph;
  private readonly selectedDate: Paragraph;
  private readonly weatherManifold: Manifold<HTMLDivElement>;
  private weatherCards: WeatherCard[];
  
  constructor(
    cityController: Home['cityController'],
    forecastController: Home['forecastController'],
  ) {
    super();

    this.cityController = cityController;
    this.forecastController = forecastController;
    
    this.form = new CityForm(this.cityController, this);
    const topBar = new Div();

    this.dateRadios = new Fieldset({
      legend: new Legend({text: "Choose a day to show", hidden: true}),
      fields: [],
    });

    this.dateRadios.root.addEventListener('change', (e) => {
      // When the user clicks on any of the radio, change the visible card.
      const value = (e.target as HTMLInputElement).value;
      this.changeVisibleCard(Number(value));
    });

    this.cityName = new Paragraph();
    this.selectedDate = new Paragraph();

    topBar.root.append(
      this.cityName.root,
      this.selectedDate.root,
    );

    this.weatherManifold = new Manifold(new Div().root, []);

    this.root.append(
      this.form.root,
      topBar.root,
      this.weatherManifold.root,
      this.dateRadios.root,
    );
  }
  
  public async citySelected(city: CityModel): Promise<void> {
    // Get forecast and change the UI
    const forecastData = await this.forecastController.getCityForecast(city);

    if (forecastData.length === 0) return;

    this.cityName.textContent = `${city.name}, ${city.admin}`;

    this.weatherCards = forecastData.map((data) => {
      return new WeatherCard(data);
    });

    this.weatherManifold.children = this.weatherCards;
    this.changeVisibleCard(0);

    this.updateDateRadios(forecastData.map((f) => f.overall.dateTime));
  }

  private updateDateRadios(dates: Date[]) {
    const tmpDateRadios = dates.map((d, i) => {
      const id = `radio-date-${i}`;
      const field = new Field<RadioInput>({
        id,
        label: new Label(Home.formatDate(d), id),
        control: new RadioInput('radio-date')
      });
      field.control.value = i.toString();

      return field;
    });

    // First is checked by default.
    (tmpDateRadios[0].control as RadioInput).root.checked = true;

    this.dateRadios.fields = tmpDateRadios;
  }

  private changeVisibleCard(id: number) {
    const minLength = 0;
    const maxLength = this.weatherManifold.children.length - 1;
    if (id <= minLength) id = minLength;
    if (id > maxLength) id = maxLength;

    this.weatherManifold.currentChild = id;
    
    const date = (this.weatherManifold.currentChild as WeatherCard).forecastModel.overall.dateTime;
    this.selectedDate.textContent = Home.formatDate(date);
  }

  public static formatDate(date: Date): string {
    return date.toLocaleDateString('default', { day:'2-digit', month: 'long'});
  }
}