// CSS styles.
import '../src/css/main.scss';
import Layout from './layout/layout';
import Forecast from './services/open-meteo/forecast';
import Geocoding from './services/open-meteo/geocoding';

// Init the structure
const layout = new Layout();
document.body.appendChild(layout.root);

const geocoding = new Geocoding();
const forecast = new Forecast();

const data = geocoding.searchCity('Brussels');

data.then((results) => {
  const forecastData = forecast.getCityForecast(results[0]);
  forecastData.then((res) => {
    console.log(res);
  })
});