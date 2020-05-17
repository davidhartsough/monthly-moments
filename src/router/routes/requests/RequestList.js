import React from "react";
import RequestListItem from "./RequestListItem";

export default function RequestList({ people }) {
  return (
    <div className="requests people-list list">
      {people.map(({ username, name }) => (
        <RequestListItem key={username} username={username} name={name} />
      ))}
    </div>
  );
}
