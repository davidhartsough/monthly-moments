import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchConnections } from "../store/actions/connections";
import { Link } from "react-router-dom";
import { Search } from "react-feather";
import Layout from "../../components/Layout";
import Fetcher from "../../components/Fetcher";

function PeopleList({ people }) {
  const [search, setSearch] = useState("");
  const [listItems, setListItems] = useState(people);
  function handleSearch({ target }) {
    const query = target.value.trim().toUpperCase();
    let _people = [...people];
    if (query.length > 0) {
      _people = _people.filter(
        ({ name, username }) =>
          name.toUpperCase().includes(query) ||
          username.toUpperCase().includes(query)
      );
    }
    setListItems(_people);
    setSearch(query);
  }
  return (
    <>
      {people.length > 10 && (
        <div className="search-bar">
          <div className="icon-prefix">
            <Search size={20} />
          </div>
          <input
            type="search"
            placeholder="Search"
            id="search-input"
            maxLength="120"
            value={search}
            onChange={handleSearch}
          />
        </div>
      )}
      <div className="connections people-list">
        {listItems.length > 0 ? (
          listItems.map(({ username, name }) => (
            <Link key={username} className="list-item" to={`/p/${username}`}>
              {name}
            </Link>
          ))
        ) : (
          <div className="empty">
            <p>None of your connections match that search.</p>
            <Link to="/search">Find friends</Link>
          </div>
        )}
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
