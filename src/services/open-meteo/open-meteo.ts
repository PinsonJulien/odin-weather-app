export default class OpenMeteo {
  private url: string;
  private domain: string = "open-meteo.com/v1/";
  private subdomain: string;
  
  constructor(
    subdomain?: string,
  ) {

    this.subdomain = (subdomain) ? subdomain : "api";

    this.url = `https://${this.subdomain}.${this.domain}`;
  }
}