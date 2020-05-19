import React from "react";
import Layout from "../../../components/Layout";
import Month from "../../../components/month";
import MoreMenu from "./MoreMenu";
import { currentMonth } from "../../../date-utils";
import RequestsLink from "./RequestsLink";

export default function Profile({ name, username, requestCount }) {
  return (
    <Layout>
      <header className="flex-parent">
        <div className="flex-fill">
          <h1>{name}</h1>
          <h2>{username}</h2>
        </div>
        {requestCount > 0 && (
          <div className="flex-center">
            <RequestsLink requestCount={requestCount} />
          </div>
        )}
        <div className="flex-center">
          <MoreMenu />
        </div>
      </header>
      <hr />
      <Month uid="my profile" initialMonth={currentMonth} />
    </Layout>
  );
}
