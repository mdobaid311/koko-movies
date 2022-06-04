import React from "react";

import { Route, Switch } from "react-router-dom";

import Catlog from "../pages/Catlog";
import Details from "../pages/Details";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route path="/:category/search/:keyword" component={Catlog} />
      <Route path="/:category/:id" component={Details} />
      <Route path="/:category" component={Catlog} />
      <Route path="/" exact component={Home} />
    </Switch>
  );
};

export default Routes;
