import React, { useEffect, useState } from "react";
import { RouteChildrenProps } from 'react-router-dom';
import styled from "styled-components";
import { Button, Descriptions } from "antd";

import Loader from "components/Loader";
import { CompanyDetailsInitialState, Routes, Breakpoints } from "constants/common";
import CompaniesApi from "services/CompaniesApi";
import { ICompanyDetails } from "types";

type TParams = {
  symbol: string,
}

const Wrapper = styled.div`
    padding: 20px;
    @media (min-width: ${Breakpoints.sm}) {
      padding-left: 40px;
    }
  `;

const StyledButton = styled(Button)`
    margin-bottom: 30px;
  `;

const CompanyDetails: React.FC<RouteChildrenProps<TParams>> = (props) => {
  const [details, setDetails] = useState<ICompanyDetails>(CompanyDetailsInitialState);
  const [isLoading, setLoading] = useState(false);
  const symbol = props?.match?.params?.symbol || '';

  useEffect(() => {(
    async () => {
      try {
        setLoading(true);
        const result = await CompaniesApi.fetchCompanyDetails(symbol);
        setDetails(result);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        console.log('error', e);
      }
    }
  )()}, [symbol]);
  return(
    <>
      {
        isLoading
        ?
          <Loader />
          :

          <Wrapper>
            <StyledButton
              onClick={() => props.history.push(`${Routes.dashboard}`)}
            >
              Back
            </StyledButton>
            <Descriptions title={details.name}>
              <Descriptions.Item
                label="Address"
                span={3}
                labelStyle={{fontWeight: "bold"}}
              >
                { details.address }
              </Descriptions.Item>
              <Descriptions.Item
                label="Market Capitalization"
                span={3}
                labelStyle={{fontWeight: "bold"}}
              >
                { details.marketCapitalization }
              </Descriptions.Item>
              <Descriptions.Item span={3}>
                { details.description }
              </Descriptions.Item>
            </Descriptions>
          </Wrapper>
      }
    </>
  )
}

export default CompanyDetails;