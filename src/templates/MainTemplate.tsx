import React from "react";
import { ThemeProvider } from 'styled-components';
import "antd/dist/antd.css";

import Header from "components/Header";
import Provider from "context/Context";
import GlobalStyle from "theme/GlobalStyle";
import { theme } from 'theme/mainTheme';

interface IProps {
  children: React.ReactNode,
}

const MainTemplate: React.FC<IProps> = ({ children }) => {
  return(
    <div>
      <Provider>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Header title='SDH Frontend Homework' />
          {children}
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default MainTemplate;