import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchRecap } from "../../store/actions/recap";
import Loader from "../loaders/Loader";
import Moment from "../moment/Moment";

const Empty = () => (
  <div className="empty">
    <p>No moments for this month.</p>
  </div>
);

function Recap({ month, uid, recap, getRecap }) {
  useEffect(() => {
    getRecap(month, uid);
  }, [getRecap, month, uid]);
  if (recap.loading) return <Loader size={2} />;
  if (recap.moments.length < 1) return <Empty />;
  return (
    <div className="recap">
      {recap.moments.map((m) => (
        <Moment key={m.id} moment={m} />
      ))}
    </div>
  );
}

const mapStateToProps = ({ recap }) => ({ recap });
const mapDispatchToProps = (dispatch) => ({
  getRecap: (month, uid) => dispatch(fetchRecap(month, uid)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Recap);
