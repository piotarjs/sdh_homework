import { parseCompanies, parseCompanyDetails } from "./parser";

class UsersApi {
  private api: string;
  private apiKey: string;
  constructor() {
    this.api = process?.env?.REACT_APP_API_URL || '';
    this.apiKey = process?.env?.REACT_APP_API_KEY || '';
  }

  fetchCompanies(keyword: string) {
    return fetch(`${this.api}/query?function=SYMBOL_SEARCH&keywords=${keyword}&apikey=${this.apiKey}`)
      .then(result => result.json())
      .then(data => parseCompanies(data));
  }

  fetchCompanyDetails(symbol: string) {
    return fetch(`${this.api}/query?function=OVERVIEW&symbol=${symbol}&apikey=${this.apiKey}`)
      .then(result => result.json())
      .then(data => parseCompanyDetails(data));
  }
}

export default new UsersApi();
