// CSS styles.
import '../src/css/main.scss';
import SearchInput from './components/forms/controls/inputs/search-input';
import Option from './components/forms/controls/options/option';
import Select from './components/forms/controls/selects/select';
import Field from './components/forms/fields/field';
import Label from './components/forms/labels/label';
import Layout from './layout/layout';
import { City } from './models/city';
import Forecast from './services/open-meteo/forecast';
import Geocoding from './services/open-meteo/geocoding';

// Init the structure
const layout = new Layout();
document.body.appendChild(layout.root);

const geocoding = new Geocoding();
const forecast = new Forecast();

const searchField = new Field(
  new Label('Enter your city', 'city-search'),
  new SearchInput('city-search')
);
searchField.control.root.autocomplete = "off";

const cityField = new Field(
  new Label('Select your city', 'city-select'),
  new Select('city-select')
);

document.body.append(
  searchField.root,
  cityField.root
);

let lastSearchValue = "";
let cities: City[] = [];

cityField.control.root.addEventListener('click', async (e) => {
  const value = searchField.control.value;
  if (lastSearchValue === value) return; 
  lastSearchValue = value;

  // search for cities with a similar given name
  cities = await geocoding.searchCity(value);
  const options: Option[] = cities.map((city, id) => {
    return new Option({
      value: id.toString(),
      text: `${city.name} [${city.country}, ${city.admin}]`
    });
  });

  cityField.control.options = options;
});

cityField.control.root.addEventListener('input', async (e) => {
  // Find the city from the select field.
  const id = Number(cityField.control.value);
  const city = cities[id];

  // Get forecast and change the UI
  
  const forecastData = await forecast.getCityForecast(city);
  console.log(forecastData)
});