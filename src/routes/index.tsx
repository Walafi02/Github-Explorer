import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/Github-Explorer" exact component={Dashboard} />
    <Route
      path="/Github-Explorer/repository/:repository+"
      component={Repository}
    />
    <Redirect to="/Github-Explorer" />
  </Switch>
);

export default Routes;
