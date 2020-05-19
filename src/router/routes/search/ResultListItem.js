import React, { useState } from "react";
import { connect } from "react-redux";
import { acceptRequest, createRequest } from "../../../store/actions/general";
import Loader from "../../../components/loaders/Loader";
import { ListItem, LinkListItem } from "../../../components/list/";

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
    return <LinkListItem name={name} username={username} />;
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
    <ListItem name={name} username={username}>
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
    </ListItem>
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
