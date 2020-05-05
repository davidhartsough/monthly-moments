import React from "react";
import Layout from "../../../components/Layout";
import Loader from "../../../components/loaders/Loader";
import SearchForm from "./SearchForm";
import Results from "./Results";

export default function Search({ loading, data }) {
  return (
    <Layout>
      <div id="search">
        <header>
          <h1>Search</h1>
        </header>
        <SearchForm loading={loading} />
        {loading ? <Loader /> : <Results results={data} />}
      </div>
    </Layout>
  );
}
