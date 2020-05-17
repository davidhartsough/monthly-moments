import React from "react";
import "./Splash.css";

export default ({ children }) => (
  <div id="splash">
    <div id="calendar">
      <div id="calendar-top">
        <h1 id="app-title">Monthly Moments</h1>
      </div>
      <div id="calendar-bottom">{children}</div>
    </div>
  </div>
);
