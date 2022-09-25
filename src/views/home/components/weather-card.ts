import RangeInput from "../../../components/forms/controls/inputs/range-input";
import Output from "../../../components/forms/controls/outputs/output";
import Div from "../../../components/html/div";
import Paragraph from "../../../components/html/paragraph";
import Twofold from "../../../components/manifold/twofold";
import { Forecast as ForecastModel } from "../../../models/forecast";

type ForecastComponents = {
  temperature: Paragraph;
  windspeed: Paragraph;
  weathercode: Div;
};

export default class WeatherCard extends Twofold<HTMLDivElement, Div, Div> {
  // Elements
  private readonly date: Paragraph;
  private readonly overall: ForecastComponents;
  private readonly detailed: ForecastComponents;
  private readonly range: RangeInput;

  // Data
  private _forecastModel: ForecastModel;

  constructor(
    forecastModel: ForecastModel,
  ) {
    super(
      document.createElement('div'),
      new Div(),
      new Div()
    );
    
    this.date = new Paragraph();
    this.overall = {
      temperature: new Paragraph(),
      windspeed: new Paragraph(),
      weathercode: new Div(),
    };

    this.detailed = {
      temperature: new Paragraph(),
      windspeed: new Paragraph(),
      weathercode: new Div(),
    };

    this.forecastModel = forecastModel;

    this.range = new RangeInput('detailed-range', 0, 23, 1, 'detailed-range');
    this.range.root.defaultValue = "0";
    const output = new Output();

    this.range.root.addEventListener('input', () => {
      const value = this.range.value;
      output.value = value;

      this.updateDetailed(Number(value));
    });

    this.root.append(
      this.date.root,
    );

    this.frontChild.root.append(
      ...Object.values(this.overall).map((o) => o.root),
    );

    this.backChild.root.append(
      ...Object.values(this.detailed).map((d) => d.root),
      output.root,
      this.range.root
    );

    // Shows the front component by default
    this.currentChild = 0;
    this.updateDetailed(0);
  }

  public get forecastModel(): WeatherCard['_forecastModel'] {
    return this._forecastModel;
  }

  public set forecastModel(forecastModel: WeatherCard['_forecastModel']) {
    this._forecastModel = forecastModel;

    // Updates the front card
    const localeDate = forecastModel.overall.dateTime.toLocaleDateString('default', { day:'2-digit', month: 'long'});
    this.date.textContent = localeDate;

    this.overall.temperature.textContent = `${forecastModel.overall.temperatureMin} - ${forecastModel.overall.temperatureMax} °C`;
    this.overall.windspeed.textContent = `${forecastModel.overall.windspeed} km/h`;
  }

  private updateDetailed(time: number) {
    // When a time is given, change the back card data.
    const hourlyWeather = this.forecastModel.detailed.find((hw) => hw.dateTime.getHours() === time);

    this.detailed.temperature.textContent = `${hourlyWeather.temperature} °C`;
    this.detailed.windspeed.textContent = `${hourlyWeather.windspeed} km/h`;
  }
}