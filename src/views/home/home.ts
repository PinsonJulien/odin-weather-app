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
import Button from "../../../framework/elements/html/button";
import ChevronLeft from "../../../framework/elements/icons/chevron-left";
import ChevronRight from "../../../framework/elements/icons/chevron-right";

export default class Home extends View implements CityFormListener {
  private readonly form: CityForm;
  private readonly cityController: CityController;
  private readonly forecastController: ForecastController;

  // Components
  private readonly leftRadioButton: Button;
  private readonly rightRadioButton: Button;
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
    
    // Setup dynamic components
    this.form = new CityForm(this.cityController, this);

    this.leftRadioButton = new Button({children: [ new ChevronLeft() ], invisible: true});
    this.rightRadioButton = new Button({children: [ new ChevronRight() ], invisible: true});

    this.dateRadios = new Fieldset({
      id: 'date-radio-fieldset',
      legend: new Legend({textContent: "Choose a day to show", hidden: true}),
    });

    this.cityName = new Paragraph({ classes: ['city-name'] });
    this.selectedDate = new Paragraph({ classes:['date'] });
    this.weatherManifold = new Manifold(new Div().root);

    const cardShowcase = new Div({
      id: 'card-showcase',
      children: [
        new Div({
          classes: ['header'],
          children: [ 
            this.cityName,
            this.selectedDate
          ],
        }),
        this.weatherManifold,
      ],
    });

    this.append(
      new Div({
        classes: ['header'],
        children: [this.form]
      }),
      new Div({
        classes: ['date-selector'],
        children:[
          this.leftRadioButton,
          this.dateRadios,
          this.rightRadioButton
        ]
      }),
      cardShowcase,
    );

    // Events
    this.dateRadios.root.addEventListener('change', (e) => {
      const target = e.target as HTMLInputElement;
      const value = target.value;
      this.changeVisibleCard(Number(value));
    });

    this.leftRadioButton.root.addEventListener('click', (e) => {
      this.nextVisibleCard(-1);
    });

    this.rightRadioButton.root.addEventListener('click', (e) => {
      this.nextVisibleCard(1);
    });
  }
  
  public async citySelected(city: CityModel): Promise<void> {
    // Get forecast and change the UI
    const forecastData = await this.forecastController.getCityForecast(city);

    if (forecastData.length === 0) return;

    this.cityName.textContent = `${city.name}, ${city.country}, ${city.admin}`;
    this.updateDateRadios(forecastData.map((f) => f.overall.dateTime));

    this.weatherCards = forecastData.map((data) => {
      return new WeatherCard(data);
    });

    this.weatherManifold.elements = this.weatherCards;

    this.leftRadioButton.invisible = true;
    this.rightRadioButton.invisible = false;
    this.changeVisibleCard(0);
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

  private nextVisibleCard(step: number) {
    const currentId = this.weatherManifold.elements.findIndex((e) =>  {
      return (e === this.weatherManifold.currentElement);
    });

    const newId = currentId + step;

    if (newId > 0) {
      this.leftRadioButton.invisible = false;
    } 
    else this.leftRadioButton.invisible = true;

    if (newId < (this.weatherManifold.elements.length -1)) {
      this.rightRadioButton.invisible = false;
    }
    else this.rightRadioButton.invisible = true;

    this.changeVisibleCard(newId);
  }

  private changeVisibleCard(id: number) {
    const minLength = 0;
    const maxLength = this.weatherManifold.elements.length - 1;
    if (id <= minLength) id = minLength;
    if (id > maxLength) id = maxLength;

    this.weatherManifold.currentElement = id;
    (this.dateRadios.children[id] as Field<RadioInput>).control.checked = true;
    
    const date = (this.weatherManifold.currentElement as WeatherCard).forecastModel.overall.dateTime;
    this.selectedDate.textContent = Home.formatDate(date);
  }

  public static formatDate(date: Date): string {
    return date.toLocaleDateString('default', { day:'2-digit', month: 'long'});
  }
}