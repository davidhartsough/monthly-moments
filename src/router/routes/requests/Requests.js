import React from "react";
import Layout from "../../../components/Layout";
import Fetcher from "../../../components/Fetcher";
import { Link } from "react-router-dom";
import RequestList from "./RequestList";

export default function Requests({ data, loading, fetchData }) {
  return (
    <Layout>
      <header>
        <h1>Connection Requests</h1>
      </header>
      <Fetcher fetchData={fetchData} loading={loading}>
        {data.length > 0 ? (
          <RequestList people={data} />
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
