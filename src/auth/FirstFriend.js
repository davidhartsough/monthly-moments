import React from "react";
import { connect } from "react-redux";
import { dismissDavid, addDavid } from "../store/actions/auth";

function FirstFriend({ noThanks, yesPlease }) {
  return (
    <section>
      <header>
        <h1>Get Started</h1>
        <h2>Your first connection</h2>
      </header>
      <div id="intro">
        <p>
          Since you're brand new here, would you like to automatically connect
          with David Hartsough? He's the guy who made this app, and he just
          wants to make sure you start this experience with at least one friend.
          <br />
          (Yes, this is a "Tom from Myspace" thing, except it's opt-in.)
        </p>
        <div className="intro-actions">
          <button onClick={noThanks}>No Thanks</button>
          <button onClick={yesPlease}>Yes Please</button>
        </div>
      </div>
    </section>
  );
}

const mapDispatchToProps = (dispatch) => ({
  noThanks: () => dispatch(dismissDavid()),
  yesPlease: () => dispatch(addDavid()),
});
export default connect(null, mapDispatchToProps)(FirstFriend);
