import RangeInput from "../../../../framework/elements/form-elements/controls/inputs/range-input";
import Output from "../../../../framework/elements/form-elements/controls/outputs/output";
import Fieldset from "../../../../framework/elements/form-elements/fieldsets/fieldset";
import Legend from "../../../../framework/elements/form-elements/fieldsets/legends/legend";
import Button from "../../../../framework/elements/html/button";
import Div from "../../../../framework/elements/html/div";
import Span from "../../../../framework/elements/html/span";
import Undo from "../../../../framework/elements/icons/undo";
import Update from "../../../../framework/elements/icons/update";
import Twofold from "../../../../framework/elements/manifold/twofold";
import { Forecast as ForecastModel } from "../../../models/forecast";

export default class WeatherCard extends Div {
  // Elements
  private readonly swapButton: Button;
  private readonly twofold: Twofold<HTMLDivElement, Div, Div>;
  private readonly overall: ForecastComponents;
  private readonly detailed: ForecastComponents;
  private readonly range: RangeInput;
  private readonly rangeOutput: Output;

  // Data
  private _forecastModel: ForecastModel;

  constructor(
    forecastModel: ForecastModel,
  ) {
    super(
      {
        classes: ['weather-card',],
      }
    );

    this._forecastModel = forecastModel;

    // Dynamic components
    this.swapButton = new Button({
      children: [new Update()]
    });

    this.overall = new ForecastComponents();
    this.detailed = new ForecastComponents();

    this.range = new RangeInput({
      min: 0,
      max: 23,
      step: 1,
      name: "detailed-range",
      valueAsNumber: 0,
      defaultValue: '0'
    });

    this.rangeOutput = new Output();

    const rangeFieldset = new Fieldset({
      legend: new Legend({ srOnly: true, textContent: "Choose a time" }),
      classes: ['range-fieldset'],
      children: [
        this.range,
        this.rangeOutput
      ],
    });

    this.twofold = new Twofold(
      document.createElement('div'),
      new Div(),
      new Div()
    );

    const weatherDataElement = (components: ForecastComponents) => {
      return new Div({
        classes: ['weather-data'],
        children:[
          new Div({
            classes: ['weathercode'],
            children: [
              components.weathercode
            ]
          }),
          new Div({
            children: [
              new Span({textContent:"Temperature:"}),
              components.temperature,
              new Span({textContent:"°C"}),
            ]
          }),
          new Div({
            children: [
              new Span({textContent:"Windspeed:"}),
              components.windspeed,
              new Span({textContent:"km/h"}),
            ]
          }),
        ]
      });
    };

    // Formatting
    this.append(
      this.swapButton,
      this.twofold
    );

    this.twofold.frontElement.append(
      weatherDataElement(this.overall),
    );

    this.twofold.backElement.append(
      weatherDataElement(this.detailed),
      rangeFieldset,
    );

    // Shows the front component by default
    this.twofold.currentElement = 0;
    this.updateRangeOutput();
    this.updateOverall();
    this.updateDetailed(0);

    // Events
    this.swapButton.root.addEventListener('click', () => {
      this.swapButton.replaceChildren( 
        (this.twofold.currentElement === this.twofold.frontElement)
        ? new Undo()
        : new Update()
      );

      this.twofold.swap();
    });

    this.range.root.addEventListener('input', () => {
      const value = this.range.value;
      this.updateRangeOutput();
      this.updateDetailed(Number(value));
    });
  }

  public get forecastModel(): WeatherCard['_forecastModel'] {
    return this._forecastModel;
  }

  public set forecastModel(forecastModel: WeatherCard['_forecastModel']) {
    this._forecastModel = forecastModel;
    this.updateOverall();
  }

  private updateOverall() {
    const overall = this.forecastModel.overall;
    this.overall.temperature.textContent = `${overall.temperatureMin} ; ${overall.temperatureMax}`;
    this.overall.windspeed.textContent = `${overall.windspeed}`;
    this.overall.weathercode.textContent = `${this.weathercodeInterpretation(overall.weathercode)}`;
  }

  private updateDetailed(time: number) {
    // When a time is given, change the back card data.
    const hourlyWeather = this.forecastModel.detailed.find((hw) => hw.dateTime.getHours() === time);

    this.detailed.temperature.textContent = `${hourlyWeather.temperature}`;
    this.detailed.windspeed.textContent = `${hourlyWeather.windspeed}`;
    this.detailed.weathercode.textContent = `${this.weathercodeInterpretation(hourlyWeather.weathercode)}`;
  }

  private updateRangeOutput() {
    const rangeValue = this.range.value;
    this.rangeOutput.value = `${rangeValue} h`;
  }

  private weathercodeInterpretation(code: ForecastModel['_overall']['weathercode']) {
    switch(code) {
      case 0: return "Clear sky";
      case 1: return "Mainly clear";
      case 2: return "Partly cloudy";
      case 3: return "Overcast";
      case 45: return "Fog";
      case 48: return "Depositing rime fog";
      case 51: return "Light drizzle";
      case 53: return "Moderate drizzle";
      case 55: return "Dense drizzle";
      case 56: return "Light freezing drizzle";
      case 57: return "Dense freezing drizzle";
      case 61: return "Slight rain";
      case 63: return "Moderate rain";
      case 65: return "Heavy rain";
      case 66: return "Light freezing rain";
      case 67: return "Heavy freezing rain";
      case 71: return "Slight snow fall";
      case 73: return "Moderate snow fall";
      case 75: return "Heavy snow fall";
      case 77: return "Snow grains";
      case 80: return "Slight rain shower";
      case 81: return "Moderate rain shower";
      case 82: return "Violent rain shower";
      case 85: return "Slight snow shower";
      case 86: return "Heavy snow shover";
      case 95: return "Thunderstorm";
      case 96: return "Thunderstorm with slight hail";
      case 99: return "Thunderstorm with heavy hail";
    }
  }
}

class ForecastComponents {
  public readonly temperature: Span;
  public readonly windspeed: Span;
  public readonly weathercode: Div;

  constructor() {
    this.temperature = new Span();
    this.windspeed = new Span();
    this.weathercode = new Div();
  }
}