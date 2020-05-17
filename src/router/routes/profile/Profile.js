import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../../components/Layout";
import Month from "../../../components/month";
import MoreMenu from "./MoreMenu";
import { currentMonth } from "../../../date-utils";
import { UserPlus } from "react-feather";

export default function Profile({ name, username, requestCount }) {
  return (
    <Layout>
      <header>
        <div className="header-text">
          <h1>{name}</h1>
          <h2>{username}</h2>
        </div>
        {requestCount > 0 && (
          <div className="header-action">
            <Link to="/requests" className="requests-link primary">
              <UserPlus size={16} className="request-icon" /> {requestCount}
            </Link>
          </div>
        )}
        <div className="header-more">
          <MoreMenu />
        </div>
      </header>
      <hr />
      <Month uid="my profile" initialMonth={currentMonth} />
    </Layout>
  );
}
