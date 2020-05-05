import React from "react";
import { connect } from "react-redux";
import Layout from "../../components/Layout";
import Month from "../../components/month";
import { Link } from "react-router-dom";
// import { action } from '../store/actions/auth';

function Profile({ profile }) {
  return (
    <Layout>
      <header>
        <h1>{profile.name}</h1>
        <h2>{profile.username}</h2>
        {profile.requests?.length > 0 && (
          <div className="header-action">
            <Link to="/requests">Requests</Link>
          </div>
        )}
      </header>
      <Month uid="is self" />
    </Layout>
  );
}

// TODO: edit name and sign out ... vertical dots "more menu"
// const mapDispatchToProps = (dispatch) => ({
//   onSave: (name) => dispatch(changeName(name)),
// });
export default connect(({ profile }) => ({ profile }))(Profile);
