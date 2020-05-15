import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../../components/Layout";
import Month from "../../../components/month";
import MoreMenu from "./MoreMenu";

export default function Profile({ profile }) {
  return (
    <Layout>
      <header>
        <div className="header-text"></div>
        <h1>{profile.name}</h1>
        <h2>{profile.username}</h2>
        {profile.requests?.length > 0 && (
          <div className="header-action">
            <Link to="/requests">Requests</Link>
          </div>
        )}
        <div className="header-more">
          <MoreMenu />
        </div>
      </header>
      <Month uid="is self" />
    </Layout>
  );
}
