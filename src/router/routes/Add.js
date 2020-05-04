import React from "react";
import { connect } from "react-redux";
import { fetchMoments } from "../store/actions/moments";
import Layout from "../../components/Layout";
import Fetcher from "../../components/Fetcher";

// TODO
function NewMomentForm() {
  return <div>New moment form</div>;
}

// TODO
function Moment({ moment }) {
  return <div>moment!</div>;
}

// TODO
const month = "May 2020";

function Add({ data, loading, fetchData }) {
  return (
    <Layout>
      <Fetcher fetchData={fetchData} loading={loading}>
        <div id="add">
          <header>
            <h1>Add to your month</h1>
            <h2>{month}</h2>
          </header>
          <NewMomentForm />
          {data.map((m) => (
            <Moment key={m.id} moment={m} />
          ))}
        </div>
      </Fetcher>
    </Layout>
  );
}

const mapStateToProps = ({ moments: { loading, data } }) => ({
  loading,
  data,
});
const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchMoments()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Add);
