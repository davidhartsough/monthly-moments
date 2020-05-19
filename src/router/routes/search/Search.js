import React from "react";
import Layout from "../../../components/Layout";
import Loader from "../../../components/loaders/Loader";
import SearchForm from "./SearchForm";
import Results from "./Results";

export default function Search({ loading, query = "", data }) {
  return (
    <Layout>
      <header>
        <h1>Search</h1>
      </header>
      <SearchForm query={query} loading={loading} />
      {loading ? (
        <Loader />
      ) : query?.length > 0 ? (
        <Results results={data} />
      ) : null}
    </Layout>
  );
}
