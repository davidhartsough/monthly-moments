import React from "react";
import Layout from "../../components/Layout";
import Month from "../../components/month";
import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import { action } from '../store/actions/auth';

export default function Profile({ profile, month }) {
  // TODO: edit name and sign out
  return (
    <Layout>
      <header>
        <h1>{profile.name}</h1>
        <h2>{profile.username}</h2>
        {profile.requests && profile.requests.length > 0 && (
          <div className="header-action">
            <Link to="/requests">Requests</Link>
          </div>
        )}
      </header>
      <Month initialMonth={month} uid={profile.uid} isSelf={true} />
    </Layout>
  );
}

// TODO: edit name
// const mapDispatchToProps = (dispatch) => ({
//   onSave: (name) => dispatch(changeName(name)),
// });
// const mapStateToProps = ({ profile }) => ({ profile });
// export default connect(mapStateToProps)(Profile);
