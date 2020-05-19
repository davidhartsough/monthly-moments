import React from "react";
import RequestListItem from "./RequestListItem";
import { List } from "../../../components/list";

export default function RequestList({ people }) {
  return (
    <List>
      {people.map(({ username, name }) => (
        <RequestListItem key={username} username={username} name={name} />
      ))}
    </List>
  );
}
