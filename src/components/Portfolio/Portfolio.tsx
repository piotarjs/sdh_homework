import React, { useContext } from "react";
import { Table, Button } from "antd";
import { RouterProps } from 'react-router-dom';
import styled from 'styled-components';

import { Context } from "context/Context";
import { Routes, Breakpoints } from "constants/common";
import { IResultItem } from "types";

const StyledTable = styled(Table)`
  .ant-table-empty .ant-table-tbody > tr.ant-table-placeholder {
    background-color: white;
  }
  .ant-table-thead > tr > th {
    background-color: ${({ theme }) => theme.tableHeaderBackgroundColor};
    color: white;
  }
  .ant-table tbody tr {
    background-color: ${({ theme }) => theme.tableOddRowBackgroundColor};
    cursor: pointer;
    &:nth-child(2n) {
      background-color: ${({ theme }) => theme.tableEvenRowBackgroundColor};
    }
  }
`;

const Wrapper = styled.div`
  margin-top: 20px;
  @media (min-width: ${Breakpoints.sm}) {
    margin-top: 0;
  }
`;

const StyledButton = styled(Button)`
  :hover {
    background-color: ${({ theme }) => theme.tableHeaderBackgroundColor};
    color: white;
  }
`;

const Portfolio: React.FC<RouterProps> = (props) => {
  const columns: any = [
    {
      key: "symbol",
      title: "Symbol",
      dataIndex: "symbol",
      align: "center",
      width: 100,
    },
    {
      key: "name",
      title: "Name",
      dataIndex: "name",
      align: "center",
      width: 300,
    },
    {
      key: "action",
      title: "Action",
      render: (record: IResultItem) =>
        <StyledButton
          type="text"
          onClick={(e) => deleteInPortfolio(record, e)}
        >
          Remove
        </StyledButton>,
      align: "center",
      width: 100,
    },
  ];

  const { portfolio, removeFromPortfolio } = useContext(Context);

  const getCompanyDetails = (record: IResultItem) =>
    props.history.push(`${Routes.details}/${record.symbol}`);

  const deleteInPortfolio = (record: IResultItem, e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    removeFromPortfolio(record);
  };

  return(
    <Wrapper>
      <h2>Portfolio</h2>
      <StyledTable
        columns={columns}
        dataSource={portfolio}
        pagination={false}
        bordered
        scroll={{x: 500}}
        rowKey={(record: any) => record.symbol}
        onRow={(record: any) => ({
          onClick: () => getCompanyDetails(record),
        })}
      />
    </Wrapper>
  );
}

export default Portfolio;