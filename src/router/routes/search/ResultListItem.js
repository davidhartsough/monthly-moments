import React, { useState } from "react";
import { connect } from "react-redux";
import { acceptRequest, createRequest } from "../../../store/actions/general";
import { Link } from "react-router-dom";
import Loader from "../../../components/loaders/Loader";

function ResultListItem({
  username,
  name,
  connections,
  requested,
  requests,
  accept,
  request,
  myUsername,
}) {
  const [loading, setLoading] = useState(false);
  if (connections.includes(username) || myUsername === username) {
    return (
      <Link to={`/p/${username}`} className="list-item">
        <div className="list-item-text">
          <p className="p-name">{name}</p>
          <p className="p-username">{username}</p>
        </div>
      </Link>
    );
  }
  function onAccept() {
    setLoading(true);
    accept(username).then(() => setLoading(false));
  }
  function onRequest() {
    setLoading(true);
    request(username).then(() => setLoading(false));
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
        ) : requested.includes(username) ? (
          <button disabled>
            <span className="extra-text">Request </span>Pending
          </button>
        ) : requests.includes(username) ? (
          <button onClick={onAccept}>
            Accept<span className="extra-text"> Request</span>
          </button>
        ) : (
          <button onClick={onRequest}>Connect</button>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = ({
  profile: { connections, requested, requests, username },
}) => ({
  connections,
  requested,
  requests,
  myUsername: username,
});
const mapDispatchToProps = (dispatch) => ({
  accept: (username) => dispatch(acceptRequest(username)),
  request: (username) => dispatch(createRequest(username)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ResultListItem);
