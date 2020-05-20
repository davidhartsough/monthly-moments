import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { handleAuth, setAuthLoading } from "../store/actions/auth";
import { handleAuthState } from "../store/db/auth";
import SplashLoader from "../components/loaders/SplashLoader";
import SignIn from "./SignIn";
import Intro from "./Intro";

function Authenticator({ children, auth, handleUser, keepLoading }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    keepLoading();
    handleAuthState((user) => {
      setLoading(false);
      keepLoading();
      handleUser(user);
    });
  }, [keepLoading, handleUser]);
  if (auth.loading || loading) return <SplashLoader />;
  if (auth.isSignedIn) {
    if (!auth.hasProfile) return <Intro auth={auth} />;
    return children;
  }
  return <SignIn />;
}

const mapDispatchToProps = (dispatch) => ({
  handleUser: (user) => dispatch(handleAuth(user)),
  keepLoading: () => dispatch(setAuthLoading()),
});
export default connect(
  ({ auth }) => ({ auth }),
  mapDispatchToProps
)(Authenticator);
