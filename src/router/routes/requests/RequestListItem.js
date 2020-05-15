import React from "react";
import { connect } from "react-redux";
import { acceptRequest, ignoreRequest } from "../store/actions/general";

function RequestListItem({ name, username, accept, ignore }) {
  return (
    <div className="list-item">
      <div className="list-item-text">
        <p className="p-name">{name}</p>
        <p className="p-name">{username}</p>
      </div>
      <div className="list-item-actions">
        <button onClick={() => accept(username)}>Accept</button>
        <button onClick={() => ignore(username)}>Ignore</button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  accept: (username) => dispatch(acceptRequest(username)),
  ignore: (username) => dispatch(ignoreRequest(username)),
});
export default connect(null, mapDispatchToProps)(RequestListItem);
