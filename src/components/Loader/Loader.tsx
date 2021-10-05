import React from "react";
import { Spin } from "antd";
import styled from 'styled-components';

const StyledSpin = styled(Spin)`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: gray;
    opacity: .8;
    z-index: 10;
  `;

const Loader = () => (
  <StyledSpin size="large" />
);

export default Loader;