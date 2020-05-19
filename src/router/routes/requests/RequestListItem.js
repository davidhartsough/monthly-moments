import React, { useState } from "react";
import { connect } from "react-redux";
import { acceptRequest, ignoreRequest } from "../../../store/actions/general";
import Loader from "../../../components/loaders/Loader";
import ListItem from "../../../components/list/ListItem";

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
    <ListItem name={name} username={username}>
      {loading ? (
        <Loader size={2} marginTop={0} />
      ) : (
        <>
          <button onClick={onAccept}>Accept</button>
          <button onClick={onIgnore}>Ignore</button>
        </>
      )}
    </ListItem>
  );
}

const mapDispatchToProps = (dispatch) => ({
  accept: (username) => dispatch(acceptRequest(username)),
  ignore: (username) => dispatch(ignoreRequest(username)),
});
export default connect(null, mapDispatchToProps)(RequestListItem);
