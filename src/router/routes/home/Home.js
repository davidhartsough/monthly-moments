import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../../components/Layout";
import Fetcher from "../../../components/Fetcher";
import PeopleList from "./PeopleList";
import { lastMonthFormatted } from "../../../date-utils";

export default function Home({ data, loading, fetchData }) {
  return (
    <Layout>
      <header>
        <h1>Monthly Moments</h1>
        <h2>{lastMonthFormatted} recaps</h2>
      </header>
      <Fetcher fetchData={fetchData} loading={loading}>
        {data.length > 0 ? (
          <PeopleList data={data} />
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
