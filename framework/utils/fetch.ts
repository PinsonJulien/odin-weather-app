export default class Fetch {
  public async get(url: string, headers: HeadersInit = {}) {
    const response = await fetch(
      url,
      {
        method: 'GET',
        headers
      },
    );

    return response.json();
  }
}