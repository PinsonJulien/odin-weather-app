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
import Span from "../../../framework/elements/html/span";


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
    this.id = "home-page";
    this.cityController = cityController;
    this.forecastController = forecastController;
    
    this.form = new CityForm(this.cityController, this);

    this.dateRadios = new Fieldset({
      id: 'date-radio-fieldset',
      legend: new Legend({textContent: "Choose a day to show", hidden: true}),
    });

    this.dateRadios.root.addEventListener('change', (e) => {
      const target = e.target as HTMLInputElement;
      const value = target.value;
      this.changeVisibleCard(Number(value));
    });

    this.cityName = new Paragraph({ classes: ['city-name'] });
    this.selectedDate = new Paragraph({ classes:['date'] });
    this.weatherManifold = new Manifold(new Div().root);

    const cardShowcase = new Div({
      id: 'card-showcase',
      children: [
        new Div({
          children: [ 
            this.cityName,
            this.selectedDate
          ],
        }),
        new Div({
          children: [
            this.weatherManifold,
          ]
        }),
      ],
    });

    this.append(
      this.form,
      this.dateRadios,
      cardShowcase,      
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
      const day = d.toLocaleDateString('default', { day:'2-digit' });
      const month = d.toLocaleDateString('default', { month: 'short' });

      const field = new Field<RadioInput>({
        sharedId,
        label: new Label({
          children: [
            new Span({textContent: month}),
            new Span({textContent: day})
          ],
        }),
        control: new RadioInput({
          name: 'date',
        }),
      });

      field.control.value = i.toString();

      return field;
    });

    // First is checked by default.
    (tmpDateRadios[0].control as RadioInput).root.checked = true;

    this.dateRadios.children = tmpDateRadios;
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