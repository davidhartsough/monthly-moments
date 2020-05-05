import React from "react";
import { connect } from "react-redux";
import { fetchRequests } from "../store/actions/requests";
import Layout from "../../components/Layout";
import Fetcher from "../../components/Fetcher";
import { Link } from "react-router-dom";

function PeopleList({ people }) {
  // TODO: approve, ignore
  return (
    <>
      <div className="requests people-list">
        {people.map(({ username, name }) => (
          <div key={username} className="list-item">
            <div className="list-item-text">
              <p>{name}</p>
              <p>{username}</p>
            </div>
            <div className="list-item-actions">
              <button>Approve</button>
              <button>Ignore</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
// TODO
// const mapDispatchToProps = (dispatch) => ({
//   approve: (username) => dispatch(approveRequest(username)),
//   ignore: (username) => dispatch(ignoreRequest(username)),
// });
// const PeopleList = connect(null, mapDispatchToProps)(Requests);

function Requests({ data, loading, fetchData }) {
  return (
    <Layout>
      <Fetcher fetchData={fetchData} loading={loading}>
        <header>
          <h1>Connection Requests</h1>
        </header>
        {data.length > 0 ? (
          <PeopleList people={data} />
        ) : (
          <div className="empty">
            <p>No more requests.</p>
            <Link to="/profile">Go back</Link>
          </div>
        )}
      </Fetcher>
    </Layout>
  );
}

const mapStateToProps = ({ requests: { loading, data } }) => ({
  loading,
  data,
});
const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchRequests()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Requests);
