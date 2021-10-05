import { CompanyDetailsInitialState } from "constants/common";

export const parseCompanies = (data: any) =>
  data?.bestMatches?.map((company: any) => ({
    symbol: company['1. symbol'],
    name: company['2. name'],
  })) || [];

export const parseCompanyDetails = (data: any) => {
  const { name, description, marketCapitalization, address } = CompanyDetailsInitialState;
  return ({
    address: data?.Address || address,
    name: data?.Name || name,
    description: data?.Description || description,
    marketCapitalization: data?.MarketCapitalization || marketCapitalization,
  }) || {};
}