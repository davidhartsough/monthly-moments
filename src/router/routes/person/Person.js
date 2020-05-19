import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchPerson } from "../../../store/actions/person";
import { acceptRequest, createRequest } from "../../../store/actions/general";
import Layout from "../../../components/Layout";
import Month from "../../../components/month";
import LayoutLoader from "../../../components/loaders/LayoutLoader";
import Loader from "../../../components/loaders/Loader";

function Person({
  username,
  person,
  profile,
  getPerson,
  month,
  accept,
  request,
}) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getPerson(username);
  }, [getPerson, username]);
  if (person.loading) return <LayoutLoader />;
  function onAccept() {
    setLoading(true);
    accept(username).then(() => setLoading(false));
  }
  function onRequest() {
    setLoading(true);
    request(username).then(() => setLoading(false));
  }
  return (
    <Layout>
      <header>
        <h1>{person.name}</h1>
        <h2>{person.username}</h2>
      </header>
      <hr />
      {profile.connections.includes(username) ? (
        <Month initialMonth={month} uid={person.uid} />
      ) : (
        <div className="central">
          {loading ? (
            <Loader size={2} marginTop={0} />
          ) : profile.requested.includes(username) ? (
            <button disabled>Request Pending</button>
          ) : profile.requests.includes(username) ? (
            <button onClick={onAccept}>Accept Request</button>
          ) : (
            <button onClick={onRequest}>Connect</button>
          )}
        </div>
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
