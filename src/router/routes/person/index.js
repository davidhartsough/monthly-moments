import React from "react";
import { connect } from "react-redux";
import { useParams, Redirect } from "react-router-dom";
import Person from "./Person";
import Layout from "../../../components/Layout";
import Month from "../../../components/month";
import { lastMonth, isValidMonth } from "../../../date-utils";

function MyPerson({ month, profile }) {
  return (
    <Layout>
      <header>
        <div className="header-text">
          <h1>{profile.name}</h1>
          <h2>{profile.username}</h2>
        </div>
      </header>
      <hr />
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
  if (month && isValidMonth(month)) {
    return <Enhanced username={id} month={month} />;
  }
  return <Redirect to={`/p/${id}/${lastMonth}`} />;
};
