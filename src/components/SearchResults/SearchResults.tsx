import React from "react";
import styled from 'styled-components';

import ResultItem from "components/ResultItem";
import { IResultItem } from "types";

interface IProps {
  results: IResultItem[];
}

const Wrapper = styled.div`
  margin-top: 30px;
`;

const StyledList = styled.ul`
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 2px;
  padding: 15px;
`;

const SearchResults: React.FC<IProps> = ({ results = []}) => (
  <Wrapper>
    <h2>Searching results</h2>
    <StyledList>
      {
        results.map(({ name, symbol }) => (
          <ResultItem
            key={symbol}
            name={name}
            symbol={symbol}
          />
        ))
      }
    </StyledList>
  </Wrapper>
);

export default SearchResults;