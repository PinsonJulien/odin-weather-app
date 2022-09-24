// CSS styles.
import '../src/css/main.scss';
import Layout from './layout/layout';
import Forecast from './services/open-meteo/forecast';
import Geocoding from './services/open-meteo/geocoding';
import Home from './views/home/home';

// Init the structure
const layout = new Layout();
document.body.appendChild(layout.root);

const homePage = new Home();
layout.main.root.appendChild(homePage.root);

const geocoding = new Geocoding();
const forecast = new Forecast();