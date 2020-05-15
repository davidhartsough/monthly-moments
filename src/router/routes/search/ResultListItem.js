import React from "react";
import { connect } from "react-redux";
import { acceptRequest, createRequest } from "../../../store/actions/general";
import { Link } from "react-router-dom";

function ResultListItem({
  username,
  name,
  connections,
  requested,
  requests,
  accept,
  request,
}) {
  if (connections.includes(username)) {
    return (
      <div className="list-item">
        <Link to={`/p/${username}`} className="list-item-text">
          <p className="p-name">{name}</p>
          <p className="p-username">{username}</p>
        </Link>
      </div>
    );
  }
  return (
    <div className="list-item">
      <div className="list-item-text">
        <p className="p-name">{name}</p>
        <p className="p-username">{username}</p>
      </div>
      <div className="list-item-actions">
        {requested.includes(username) ? (
          <button disabled>Request Pending</button>
        ) : requests.includes(username) ? (
          <button onClick={() => accept(username)}>Accept Request</button>
        ) : (
          <button onClick={() => request(username)}>Connect</button>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = ({
  profile: { connections, requested, requests },
}) => ({
  connections,
  requested,
  requests,
});
const mapDispatchToProps = (dispatch) => ({
  accept: (username) => dispatch(acceptRequest(username)),
  request: (username) => dispatch(createRequest(username)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ResultListItem);
