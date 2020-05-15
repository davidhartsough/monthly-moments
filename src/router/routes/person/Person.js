import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPerson } from "../store/actions/person";
import { acceptRequest, createRequest } from "../../../store/actions/general";
import Layout from "../../components/Layout";
import Month from "../../components/month";
import LayoutLoader from "../../../components/loaders/LayoutLoader";

function Person({
  username,
  person,
  profile,
  getPerson,
  month,
  accept,
  request,
}) {
  useEffect(() => {
    getPerson(username);
  }, [getPerson, username]);
  if (person.loading) return <LayoutLoader />;
  return (
    <Layout>
      <header>
        <h1>{person.name}</h1>
        <h2>{person.username}</h2>
      </header>
      {profile.connections.includes(username) ? (
        <Month initialMonth={month} uid={person.uid} />
      ) : profile.requested.includes(username) ? (
        <button disabled>Request pending</button>
      ) : profile.requests.includes(username) ? (
        <button onClick={() => accept(username)}>Accept Request</button>
      ) : (
        <button onClick={() => request(username)}>Connect</button>
      )}
    </Layout>
  );
}

const mapStateToProps = ({ person }) => ({ person });
const mapDispatchToProps = (dispatch) => ({
  getPerson: (username) => dispatch(fetchPerson(username)),
  accept: (username) => dispatch(acceptRequest(username)),
  request: (username) => dispatch(createRequest(username)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Person);
