// CSS styles.
import '../src/css/main.scss';
import Datalist from './components/forms/controls/datalist/datalist';
import TextInput from './components/forms/controls/inputs/text-input';
import Option from './components/forms/controls/options/option';
import DatalistField from './components/forms/fields/datalist-field';
import Label from './components/forms/labels/label';
import Layout from './layout/layout';
import { City } from './models/city';
import Forecast from './services/open-meteo/forecast';
import Geocoding from './services/open-meteo/geocoding';

// Init the structure
const layout = new Layout();
document.body.appendChild(layout.root);

const geocoding = new Geocoding();
let cities: City[] = [];

const cityField = new DatalistField(
  new Label('city', 'input-city'),
  new TextInput('city', 'input-city'),
  new Datalist('city')
);

cityField.control.root.autocomplete = "off";

/*cityField.datalist.options = [
  new Option({value: "test"}),
  new Option({value: "test2"})
];*/

document.body.appendChild(cityField.root);

cityField.control.root.addEventListener('input', async (e: Event) => {
  if (e instanceof InputEvent) {
    const value = (e.target as HTMLInputElement).value;
    // Search recommandations on first character entered
    cities = await geocoding.searchCity(value);

    const options: Option[] = cities.map((city, id) => {
      return new Option({
        value: id.toString(),
        text: `${city.name} [${city.country}]`
      });
    });

    cityField.datalist.options = options;
  }

  // On datalist option click
  else {
    const value = Number((e.target as HTMLInputElement).value);
    if (value === NaN) return;

    const city = cities[value];

    cityField.control.root.value = city.name;
    
    // Get forecast and change the page
  }

  console.log(e);
});

/*const geocoding = new Geocoding();
const forecast = new Forecast();

const data = geocoding.searchCity('Brussels');

data.then((results) => {
  const forecastData = forecast.getCityForecast(results[0]);
  forecastData.then((res) => {
    console.log(res);
  })
});*/