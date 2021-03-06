import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Home, Add, Person, Search, Requests } from "./routes";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/add">
        <Add />
      </Route>
      <Route path="/requests">
        <Requests />
      </Route>
      <Route path="/p/:id/:month">
        <Person />
      </Route>
      <Route path="/p/:id">
        <Person />
      </Route>
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  </BrowserRouter>
);
