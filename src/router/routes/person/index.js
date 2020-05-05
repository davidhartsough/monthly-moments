import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Person from "./Person";
import Layout from "../../components/Layout";
import Month from "../../components/month";
import { currentMonth, isValidMonth } from "../../../date-utils";

function MyPerson({ month, profile }) {
  return (
    <Layout>
      <header>
        <h1>{profile.name}</h1>
        <h2>{profile.username}</h2>
      </header>
      <Month initialMonth={month} uid={profile.uid} />
    </Layout>
  );
}

function UsernameCheck({ username, month, profile }) {
  if (username === profile.username) {
    return <MyPerson month={month} profile={profile} />;
  }
  return <Person username={username} month={month} profile={profile} />;
}
const Enhanced = connect(({ profile }) => ({ profile }))(UsernameCheck);

export default () => {
  const { id, month } = useParams();
  const validMonth = isValidMonth(month) ? month : currentMonth;
  return <Enhanced username={id} month={validMonth} />;
};
