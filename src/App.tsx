import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainTemplate from "templates/MainTemplate";
import Dashboard from "views/Dashboard";
import CompanyDetails from "views/CompanyDetails";
import { Routes } from "constants/common";

const App = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path={Routes.dashboard} component={Dashboard} />
        <Route exact path={`${Routes.details}/:symbol`} component={CompanyDetails} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default App;
