import React from "react";
import { connect } from "react-redux";
import { fetchThisMonthsMoments } from "../../store/actions/thisMonthsMoments";
import Fetcher from "../Fetcher";
import NewMomentForm from "./NewMomentForm";
import Moment from "./Moment";

function MyMonth({ loading, data, fetchData }) {
  return (
    <Fetcher fetchData={fetchData} loading={loading}>
      <NewMomentForm />
      <div className="recap">
        {data.length > 0 ? (
          data.map((m) => <Moment key={m.id} moment={m} />)
        ) : (
          <div className="empty">
            <p>Add to your month</p>
          </div>
        )}
      </div>
    </Fetcher>
  );
}

const mapStateToProps = ({ thisMonthsMoments: { loading, data } }) => ({
  loading,
  data,
});
const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchThisMonthsMoments()),
});
export default connect(mapStateToProps, mapDispatchToProps)(MyMonth);
