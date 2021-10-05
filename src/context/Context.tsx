import React, { useState, createContext } from "react";

import { IResultItem, IContext } from "types";

interface IProps {
  children: React.ReactNode;
}

const contextDefaultProps = {
  portfolio: [],
  searchingResult: [],
  addToPortfolio: () => {},
  removeFromPortfolio: () => {},
  handleSearchingResult: () => {},
}

export const Context = createContext<IContext>(contextDefaultProps);

const Provider: React.FC<IProps> = ({ children }) => {
  const [searchingResult, setSearchingResult] = useState<IResultItem[]>([]);
  const [portfolio, setPortfolio] = useState<IResultItem[]>([]);

  const addToPortfolio = (portfolio: IResultItem) => {
    setPortfolio(prev => [...prev, portfolio]);
    setSearchingResult(prev => prev.filter(item => item.symbol !== portfolio.symbol));
  }

  const removeFromPortfolio = (portfolio: IResultItem) => {
    setPortfolio(prev => prev.filter(item => item.symbol !== portfolio.symbol));
    setSearchingResult(prev => [...prev, portfolio]);
  }

  const handleSearchingResult = (result: IResultItem[]) =>
    setSearchingResult(result.filter(item => portfolio.every(el => el.symbol !== item.symbol)));

  return (
    <Context.Provider
      value={{
        portfolio,
        addToPortfolio,
        searchingResult,
        removeFromPortfolio,
        handleSearchingResult,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;