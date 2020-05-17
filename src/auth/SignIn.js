import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { signInOptions, auth } from "../store/db/fb";

export default function SignIn() {
  return (
    <section>
      <header>
        <div className="header-text">
          <h1 className="sign-in-title">Monthly Moments</h1>
        </div>
      </header>
      <div id="sign-in-options">
        <StyledFirebaseAuth
          uiConfig={{
            signInSuccessUrl: "/",
            signInOptions,
          }}
          firebaseAuth={auth()}
        />
      </div>
    </section>
  );
}
