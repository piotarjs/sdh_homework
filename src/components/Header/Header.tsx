import React from "react";
import { PageHeader } from "antd";
import styled from "styled-components";

interface IProps {
  title: string,
}

const StyledPageHeader = styled(PageHeader)`
  border: 1px solid ${({ theme }) => theme.borderColor};
`;

const Header: React.FC<IProps> = ({ title }) => (
  <StyledPageHeader title={title} />
);

export default Header;