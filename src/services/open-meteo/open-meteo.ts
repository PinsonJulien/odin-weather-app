import Fetch from "../../utils/fetch/fetch";

export default class OpenMeteo {
  private fetchAPI = new Fetch();

  private url: string;
  private domain: string = "open-meteo.com/v1/";
  private subdomain: string;
  
  constructor(
    subdomain?: string,
  ) {

    this.subdomain = (subdomain) ? subdomain : "api";

    this.url = `https://${this.subdomain}.${this.domain}`;
  }

  protected async get(params: string): Promise<any> {
    return await this.fetchAPI.get(
      this.url + params
    ).then((result: any) => {
      return result;
    });
  }
}