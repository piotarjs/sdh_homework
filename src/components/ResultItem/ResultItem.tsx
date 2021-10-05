import React, { useContext } from "react";
import styled from 'styled-components';
import { Button } from "antd";
import { PlusOutlined } from '@ant-design/icons';

import { Context } from "context/Context";
import { IResultItem } from "types";

const StyledListElement = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  list-style: none;
`;

const StyledButton = styled(Button)`
  margin-left: auto;
  flex-shrink: 0;
`;

const ResultItem: React.FC<IResultItem> = ({ name, symbol }) => {

  const { addToPortfolio } = useContext(Context);

  return(
    <StyledListElement>
      {
        `${symbol} - ${name}`
      }
      <StyledButton
        icon={<PlusOutlined />}
        onClick={() => addToPortfolio({ name, symbol })}
      />
    </StyledListElement>
  );
};

export default ResultItem;