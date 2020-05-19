import React from "react";
import Loader from "./Loader";
import logo from "./logo-blue.svg";
import "./Splash.css";

export default () => (
  <div>
    <div className="splash flex-center">
      <Loader size={9} marginTop={0} />
    </div>
    <div className="splash flex-center">
      <img src={logo} id="logo" alt="logo" />
    </div>
  </div>
);
