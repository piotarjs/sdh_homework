export interface IResultItem {
  name: string,
  symbol: string,
}

export interface IContext {
  portfolio: IResultItem[],
  searchingResult: IResultItem[],
  addToPortfolio: Function,
  removeFromPortfolio: Function,
  handleSearchingResult: Function,
}

export interface ICompanyDetails {
  address: string,
  name: string,
  description: string,
  marketCapitalization: string,
}