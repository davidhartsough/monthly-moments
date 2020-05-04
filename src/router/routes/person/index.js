import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Person from "./Person";
import Layout from "../../components/Layout";
import Month from "../../components/month";
import { getCurrentMonth } from "../../../date-utils";

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

// TODO
function isValidMonth(month) {
  return false;
}
export default () => {
  const { id, month } = useParams();
  const validMonth = isValidMonth(month) ? month : getCurrentMonth();
  return <Enhanced username={id} month={validMonth} />;
};
