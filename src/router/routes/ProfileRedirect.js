import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

function ProfileRedirect({ username }) {
  return <Redirect to={`/p/${username}`} />;
}

export default connect(({ profile: { username } }) => ({ username }))(
  ProfileRedirect
);
