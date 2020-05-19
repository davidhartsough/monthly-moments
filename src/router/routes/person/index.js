import React from "react";
import { connect } from "react-redux";
import { useParams, Redirect } from "react-router-dom";
import Person from "./Person";
import MyPerson from "./MyPerson";
import { lastMonth, isValidMonth } from "../../../date-utils";

function UsernameCheck({ username, month, profile }) {
  if (username === profile.username) {
    return <MyPerson month={month} profile={profile} />;
  }
  return <Person username={username} month={month} profile={profile} />;
}
const Enhanced = connect(({ profile }) => ({ profile }))(UsernameCheck);

export default () => {
  const { id, month } = useParams();
  if (month && isValidMonth(month)) {
    return <Enhanced username={id} month={month} />;
  }
  return <Redirect to={`/p/${id}/${lastMonth}`} />;
};
