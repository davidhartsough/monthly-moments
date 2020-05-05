import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function ResultListItem({ username, name, connections, requested }) {
  if (connections.includes(username)) {
    return (
      <div className="list-item">
        <Link to={`/p/${username}`}>
          <p>{name}</p>
          <p>{username}</p>
        </Link>
      </div>
    );
  }
  // TODO connect action
  return (
    <div className="list-item">
      <div className="list-item-text">
        <p>{name}</p>
        <p>{username}</p>
      </div>
      <div className="list-item-actions">
        {requested.includes(username) ? (
          <button disabled>Request Pending</button>
        ) : (
          <button>Connect</button>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = ({ profile: { connections, requested } }) => ({
  connections,
  requested,
});
export default connect(mapStateToProps)(ResultListItem);
