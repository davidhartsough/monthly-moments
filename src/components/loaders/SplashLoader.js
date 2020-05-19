import React from "react";
import Loader from "./Loader";
import { getTheme } from "../../theme";
import BlueLogo from "./logo-blue.svg";
import WhiteLogo from "./logo-white.svg";
import "./Splash.css";

export default () => (
  <div>
    <div className="splash flex-center">
      <Loader size={9} marginTop={0} />
    </div>
    <div className="splash flex-center">
      <img
        src={getTheme() === "dark" ? WhiteLogo : BlueLogo}
        id="logo"
        alt="logo"
      />
    </div>
  </div>
);
