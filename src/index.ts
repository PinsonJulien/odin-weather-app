// CSS styles.
import '../src/css/main.scss';
import Layout from './layout/layout';
import Home from './views/home/home';
import { City as CityController } from './controllers/city';
import { Forecast as ForecastController } from './controllers/forecast';

// Init controllers;
const cityController = new CityController();
const forecastController = new ForecastController();

// Init the structure
const layout = new Layout();
document.body.appendChild(layout.root);

const homePage = new Home(cityController, forecastController);
layout.main.root.appendChild(homePage.root);