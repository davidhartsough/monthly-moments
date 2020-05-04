import React from "react";
import { connect } from "react-redux";
import { runQuery } from "../store/actions/search";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import Loader from "../../components/loaders/Loader";

// TODO: this
function SearchForm({ submit, loading }) {
  return <div>SearchForm!</div>;
}

function Results({ people }) {
  if (people.length < 1) {
    return (
      <div className="empty">
        <p>No people found for that search.</p>
      </div>
    );
  }
  return (
    <div className="list">
      {people.map(({ username, name }) => (
        <div key={username} className="list-item">
          <Link to={`/p/${username}`}>
            <p>{name}</p>
            <p>{username}</p>
          </Link>
          <button>Status</button>
        </div>
      ))}
    </div>
  );
}

function Search({ loading, data, submit, profile }) {
  return (
    <Layout>
      <div id="search">
        <header>
          <h1>Search</h1>
        </header>
        <SearchForm submit={submit} loading={loading} />
        {loading ? <Loader /> : <Results people={data} />}
      </div>
    </Layout>
  );
}

const mapStateToProps = ({ search, profile }) => ({
  loading: search.loading,
  results: search.data,
  profile,
});
const mapDispatchToProps = (dispatch) => ({
  submit: (query) => dispatch(runQuery(query)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Search);
