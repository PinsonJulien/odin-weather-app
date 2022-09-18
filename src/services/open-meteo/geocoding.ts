import OpenMeteo from "./open-meteo";

export default class Geocoding extends OpenMeteo {
  constructor() {
    super('geocoding-api');
  }
}