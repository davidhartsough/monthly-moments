import React from "react";
import ResultListItem from "./ResultListItem";
import { List } from "../../../components/list";

export default function Results({ results }) {
  if (results.length < 1) {
    return (
      <div className="empty">
        <p>No people found for that search</p>
      </div>
    );
  }
  return (
    <List>
      {results.map(({ username, name }) => (
        <ResultListItem key={username} username={username} name={name} />
      ))}
    </List>
  );
}
