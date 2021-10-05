import React, { useEffect, useState, useContext } from "react";
import styled from 'styled-components';

import SearchInput from "components/SearchInput";
import SearchResults from "components/SearchResults";
import Portfolio from "components/Portfolio";
import Loader from "components/Loader";
import { Context } from "context/Context";
import CompaniesApi from "services/CompaniesApi";
import { Breakpoints } from "constants/common";

const DashboardWrapper = styled.div`
  padding: 20px;
  @media (min-width: ${Breakpoints.sm}) {
    display: grid;
    grid-template-columns: 3fr 4fr;
    padding-left: 40px;
  }
`;

const ResultWrapper = styled.div`
  position: relative;
  @media (min-width: ${Breakpoints.sm}) {
    margin-right: 20px;
    padding-right: 20px;
    border-right: ${({ theme }) => `1px solid ${theme.borderColor}`};
  }
`;

const Dashboard = () => {
  const [searchingText, setSearchingText] = useState('\'\'');
  const [isLoading, setLoading] = useState(false);

  const { searchingResult, handleSearchingResult } = useContext(Context);

  const onSearch = (text: string) => setSearchingText(text);

  useEffect(() => {(
    async () => {
      try {
        setLoading(true);
        const result = await CompaniesApi.fetchCompanies(searchingText);
        handleSearchingResult(result);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        console.log('error', e)
      }
    }
    // eslint-disable-next-line
  )()}, [searchingText]);

  return(
    <DashboardWrapper>
      <ResultWrapper>
        {
          isLoading && <Loader />
        }
        <h2>Dashboard</h2>
        <SearchInput
          onSearch={onSearch}
          delay={500}
        />
        <SearchResults
          results={searchingResult}
        />
      </ResultWrapper>
      <Portfolio />
    </DashboardWrapper>
  );
}

export default Dashboard;