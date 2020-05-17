import React, { useState } from "react";
import { connect } from "react-redux";
import { acceptRequest, ignoreRequest } from "../../../store/actions/general";
import Loader from "../../../components/loaders/Loader";

function RequestListItem({ name, username, accept, ignore }) {
  const [loading, setLoading] = useState(false);
  function onAccept() {
    setLoading(true);
    accept(username);
  }
  function onIgnore() {
    setLoading(true);
    ignore(username);
  }
  return (
    <div className="list-item">
      <div className="list-item-text">
        <p className="p-name">{name}</p>
        <p className="p-username">{username}</p>
      </div>
      <div className="list-item-actions">
        {loading ? (
          <Loader size={2} marginTop={0} />
        ) : (
          <>
            <button onClick={onAccept}>Accept</button>
            <button onClick={onIgnore}>Ignore</button>
          </>
        )}
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  accept: (username) => dispatch(acceptRequest(username)),
  ignore: (username) => dispatch(ignoreRequest(username)),
});
export default connect(null, mapDispatchToProps)(RequestListItem);
