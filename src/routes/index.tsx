import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/react-typescript" exact component={Dashboard} />
    <Route
      path="/react-typescript/repository/:repository+"
      component={Repository}
    />
    <Redirect to="/react-typescript" />
  </Switch>
);

export default Routes;
