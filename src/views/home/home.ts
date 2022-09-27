import { City as CityModel } from "../../models/city";
import { City as CityController } from "../../controllers/city";
import { Forecast as ForecastController } from "../../controllers/forecast";
import View from "../../../framework/views/view";
import CityForm, { CityFormListener } from "./components/city-form";
import Fieldset from "../../../framework/elements/form-elements/fieldsets/fieldset";
import Paragraph from "../../../framework/elements/html/paragraph";
import WeatherCard from "./components/weather-card";
import Div from "../../../framework/elements/html/div";
import Legend from "../../../framework/elements/form-elements/fieldsets/legends/legend";
import Field from "../../../framework/elements/form-elements/fieldsets/fields/field";
import RadioInput from "../../../framework/elements/form-elements/controls/inputs/radio-input";
import Label from "../../../framework/elements/form-elements/labels/label";
import Manifold from "../../../framework/elements/manifold/manifold";


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
      legend: new Legend({textContent: "Choose a day to show", hidden: true}),
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

    this.weatherManifold = new Manifold(new Div().root);

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

    this.weatherManifold.elements = this.weatherCards;
    this.changeVisibleCard(0);

    this.updateDateRadios(forecastData.map((f) => f.overall.dateTime));
  }

  private updateDateRadios(dates: Date[]) {
    const tmpDateRadios = dates.map((d, i) => {
      const sharedId = `radio-date-${i}`;
      const field = new Field<RadioInput>({
        sharedId,
        label: new Label({textContent: Home.formatDate(d)}),
        control: new RadioInput({name: 'date'}),
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
    const maxLength = this.weatherManifold.elements.length - 1;
    if (id <= minLength) id = minLength;
    if (id > maxLength) id = maxLength;

    this.weatherManifold.currentElement = id;
    
    const date = (this.weatherManifold.currentElement as WeatherCard).forecastModel.overall.dateTime;
    this.selectedDate.textContent = Home.formatDate(date);
  }

  public static formatDate(date: Date): string {
    return date.toLocaleDateString('default', { day:'2-digit', month: 'long'});
  }
}