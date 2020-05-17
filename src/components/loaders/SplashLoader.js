import React from "react";
import Loader from "./Loader";
import Splash from "../Splash";

export default () => (
  <Splash>
    <Loader size={5} marginTop={-12} />
  </Splash>
);
