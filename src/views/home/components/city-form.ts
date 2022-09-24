import SearchInput from "../../../components/forms/controls/inputs/search-input";
import Option from "../../../components/forms/controls/options/option";
import Select from "../../../components/forms/controls/selects/select";
import Field from "../../../components/forms/fields/field";
import Form from "../../../components/forms/form";
import Label from "../../../components/forms/labels/label";
import { City } from "../../../models/city";
import Geocoding from "../../../services/open-meteo/geocoding";

export interface CityFormListener {
  citySelected(city: City): void;
}

export default class CityForm extends Form {
  private readonly geocodingController: Geocoding;
  private readonly cityFormListener: CityFormListener;

  private readonly searchField: Field<SearchInput>;
  private readonly citySelectField: Field<Select>;

  private lastCitySearch = "";
  private cities: City[] = []; 

  constructor(
    geocodingController: Geocoding,
    cityFormListener: CityFormListener,
  ) {
    super();

    this.geocodingController = geocodingController;
    this.cityFormListener = cityFormListener;

    this.searchField = new Field(
      new Label('Search your city:', 'city-search'),
      new SearchInput('city-search')
    );

    this.citySelectField = new Field(
      new Label('Select your city:', 'city-select'),
      new Select('city-select')
    );

    this.root.append(
      this.searchField.root,
      this.citySelectField.root,
    );

    // Events
    this.citySelectField.control.root.addEventListener('click', async (e) => {
      const value = this.searchField.control.value;
      if (this.lastCitySearch === value) return; 
      this.lastCitySearch = value;

      // search for cities with a similar given name
      this.cities = await this.geocodingController.searchCity(value);
      const options: Option[] = this.cities.map((city, id) => {
        return new Option({
          value: id.toString(),
          text: `${city.name} [${city.country}, ${city.admin}]`
        });
      });

      this.citySelectField.control.options = options;
    });

    this.citySelectField.control.root.addEventListener('change', async (e) => {
      // Find the city from the select field.
      const id = Number(this.citySelectField.control.value);
      
      this.cityFormListener.citySelected(this.cities[id]);
    });
  }
}