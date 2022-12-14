import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Detail from "../pages/detail/Detail";
import Favourites from "../pages/Favourites";
import Account from "../pages/Account";

const Routes = () => {
  return (
    <Switch>
      <Route path="/favourites" exact component={Favourites} />
      <Route path="/account" exact component={Account} />
      <Route path="/:category/search/:keyword" component={Catalog} />
      <Route path="/:category/:id" component={Detail} />
      <Route path="/:category" component={Catalog} />
      <Route path="/" exact component={Home} />
    </Switch>
  );
};

export default Routes;
