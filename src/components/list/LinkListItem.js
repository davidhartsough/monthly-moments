import React from "react";
import { Link } from "react-router-dom";

export default function LinkListItem({ username, name }) {
  return (
    <Link to={`/p/${username}`} className="list-item">
      <div className="list-item-text">
        <p className="p-name">{name}</p>
        <p className="p-username">{username}</p>
      </div>
    </Link>
  );
}
