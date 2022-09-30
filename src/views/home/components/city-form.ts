import { City as CityModel } from "../../../models/city";
import { City as CityController } from "../../../controllers/city";
import Form from "../../../../framework/elements/form-elements/form";
import SearchInput from "../../../../framework/elements/form-elements/controls/inputs/search-input";
import Field from "../../../../framework/elements/form-elements/fieldsets/fields/field";
import Select from "../../../../framework/elements/form-elements/controls/selects/select";
import Label from "../../../../framework/elements/form-elements/labels/label";
import Fieldset from "../../../../framework/elements/form-elements/fieldsets/fieldset";
import Legend from "../../../../framework/elements/form-elements/fieldsets/legends/legend";
import Option from "../../../../framework/elements/form-elements/options/option";
import Button from "../../../../framework/elements/html/button";
import Search from "../../../../framework/elements/icons/search";

export interface CityFormListener {
  citySelected(city: CityModel): void;
}

export default class CityForm extends Form {
  private readonly cityController: CityController;
  private readonly cityFormListener: CityFormListener;

  private readonly searchField: Field<SearchInput>;
  private readonly citySelectField: Field<Select>;

  private lastCitySearch = "";
  private cities: CityModel[] = []; 

  constructor(
    cityController: CityController,
    cityFormListener: CityFormListener,
  ) {
    super();

    this.cityController = cityController;
    this.cityFormListener = cityFormListener;

    this.searchField = new Field({
      sharedId: "city-search",
      label: new Label({textContent: 'Search your city:'}),
      control: new SearchInput({name: 'city-search'})
    });
      
    this.searchField.control.root.autocomplete = "off";

    const searchButton = new Button({
      children: [
        new Search()
      ]
    });

    const citySearchFieldset = new Fieldset({
      legend: new Legend({hidden: true, textContent: "Insert your city"}),
      children: [
        this.searchField,
        searchButton,        
      ],
    });

    this.citySelectField = new Field({
      sharedId: 'city-select',
      label: new Label({textContent: 'Select your city:'}),
      control: new Select({name: 'city'})
    });

    const citySelectFieldset = new Fieldset({
      legend: new Legend({hidden: true, textContent: 'Select your city'}),
      children: [
        this.citySelectField,
      ]
    });

    this.append(
      citySearchFieldset,
      citySelectFieldset,
    );

    // Events
    searchButton.root.addEventListener('click', async (e) => {
      e.preventDefault();

      const value = this.searchField.control.value;
      if (this.lastCitySearch === value) return; 
      this.lastCitySearch = value;

      // search for cities with a similar given name
      this.cities = await this.cityController.search(value);
      const defaultOption = new Option({
        textContent: "Select your city"
      });
      const options: Option[] = [
        defaultOption,
        ...this.cities.map((city, id) => {
          return new Option({
            value: id.toString(),
            textContent: `${city.name} [${city.country}, ${city.admin}]`
          });
        }),
      ];

      this.citySelectField.control.options = options;
    });

    this.citySelectField.control.root.addEventListener('change', async (e) => {
      const value = Number(this.citySelectField.control.value);

      if (isNaN(value)) return;
      // Find the city from the select field.
      this.cityFormListener.citySelected(this.cities[value]);
    });
  }
}