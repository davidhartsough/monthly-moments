import React from "react";
import StoreProvider from "./store";
import Authenticator from "./auth";
import Router from "./router";
import { initTheme } from "./theme";
import "./App.css";

initTheme();

export default () => (
  <StoreProvider>
    <Authenticator>
      <Router />
    </Authenticator>
  </StoreProvider>
);
