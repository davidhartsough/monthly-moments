import React from "react";
import ResultListItem from "./ResultListItem";

export default function Results({ results }) {
  if (results.length < 1) {
    return (
      <div className="empty">
        <p>No people found for that search.</p>
      </div>
    );
  }
  return (
    <div className="people-list">
      {results.map(({ username, name }) => (
        <ResultListItem key={username} username={username} name={name} />
      ))}
    </div>
  );
}
