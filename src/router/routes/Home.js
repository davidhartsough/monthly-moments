import React from "react";
import { connect } from "react-redux";
import { fetchConnections } from "../store/actions/connections";
import Layout from "../../components/Layout";
import Fetcher from "../../components/Fetcher";
import { Link } from "react-router-dom";

function PeopleList({ people }) {
  // TODO: add filter
  // {people.length > 10 && <NameFilter />}
  // "No one you follow matches your search. <>Find friends<>"
  return (
    <>
      <div className="connections list">
        {people.map(({ username, name }) => (
          <Link key={username} className="list-item" to={`/p/${username}`}>
            {name}
          </Link>
        ))}
      </div>
    </>
  );
}

function Home({ data, loading, fetchData }) {
  return (
    <Layout>
      <Fetcher fetchData={fetchData} loading={loading}>
        <header>
          <h1>Monthly Moments</h1>
        </header>
        {data.length > 0 ? (
          <PeopleList people={data} />
        ) : (
          <div className="empty">
            <p>You haven't made any connections yet.</p>
            <Link to="/search">Find friends</Link>
          </div>
        )}
      </Fetcher>
    </Layout>
  );
}

const mapStateToProps = ({ connections: { loading, data } }) => ({
  loading,
  data,
});
const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchConnections()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
