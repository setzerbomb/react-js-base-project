import React from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Main from './pages/Main';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main}></Route>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}
