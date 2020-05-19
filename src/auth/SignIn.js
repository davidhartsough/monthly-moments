import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { signInOptions, auth } from "../store/db/fb";

export default function SignIn() {
  return (
    <section>
      <header>
        <h1 className="central">Monthly Moments</h1>
      </header>
      <div>
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
