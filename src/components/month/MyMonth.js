import React from "react";
import { connect } from "react-redux";
import { fetchThisMonthsMoments } from "../../store/actions/thisMonthsMoments";
import Fetcher from "../Fetcher";
import NewMomentForm from "./NewMomentForm";
import EditableMoment from "./EditableMoment";

function MyMonth({ loading, data, fetchData }) {
  return (
    <Fetcher fetchData={fetchData} loading={loading}>
      <NewMomentForm />
      {data.length > 0 && (
        <div className="recap">
          {data.map((m) => (
            <EditableMoment key={m.id} moment={m} />
          ))}
        </div>
      )}
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
