import RangeInput from "../../../../framework/elements/form-elements/controls/inputs/range-input";
import Output from "../../../../framework/elements/form-elements/controls/outputs/output";
import Div from "../../../../framework/elements/html/div";
import Paragraph from "../../../../framework/elements/html/paragraph";
import Twofold from "../../../../framework/elements/manifold/twofold";
import { Forecast as ForecastModel } from "../../../models/forecast";

type ForecastComponents = {
  temperature: Paragraph;
  windspeed: Paragraph;
  weathercode: Div;
};

export default class WeatherCard extends Div {
  // Elements
  private readonly swapButton: HTMLButtonElement;
  private readonly twofold: Twofold<HTMLDivElement, Div, Div>;
  private readonly overall: ForecastComponents;
  private readonly detailed: ForecastComponents;
  private readonly range: RangeInput;

  // Data
  private _forecastModel: ForecastModel;

  constructor(
    forecastModel: ForecastModel,
  ) {
    super();

    this.swapButton = document.createElement('button');
    this.swapButton.innerHTML = "show detailed";
    this.swapButton.addEventListener('click', () => {
      this.swapButton.innerHTML = (this.twofold.currentElement === this.twofold.frontElement)
        ? "show overall"
        : "show detailed";

      this.twofold.swap();
    });

    this.twofold = new Twofold(
      document.createElement('div'),
      new Div(),
      new Div()
    );

    this.root.append(
      this.swapButton,
      this.twofold.root,
    );
    
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

    this.range = new RangeInput({
      min: 0,
      max: 23,
      step: 1,
      name: "detailed-range",
      valueAsNumber: 0
    });

    this.range.root.defaultValue = "0";
    const output = new Output();

    this.range.root.addEventListener('input', () => {
      const value = this.range.value;
      output.value = `${value}H`;

      this.updateDetailed(Number(value));
    });

    this.twofold.frontElement.root.append(
      ...Object.values(this.overall).map((o) => o.root),
    );

    this.twofold.backElement.root.append(
      ...Object.values(this.detailed).map((d) => d.root),
      output.root,
      this.range.root
    );

    // Shows the front component by default
    this.twofold.currentElement = 0;
    this.updateDetailed(0);
  }

  public get forecastModel(): WeatherCard['_forecastModel'] {
    return this._forecastModel;
  }

  public set forecastModel(forecastModel: WeatherCard['_forecastModel']) {
    this._forecastModel = forecastModel;

    // Updates the front card
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