import React from "react";
import StoreProvider from "./store";
import Authenticator from "./auth";
import Router from "./router";
import "./App.css";

export default () => (
  <StoreProvider>
    <Authenticator>
      <Router />
    </Authenticator>
  </StoreProvider>
);
