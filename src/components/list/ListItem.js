import React from "react";

export default function ListItem({ name, username, children }) {
  return (
    <div className="list-item">
      <div className="list-item-text">
        <p className="p-name">{name}</p>
        <p className="p-username">{username}</p>
      </div>
      <div className="list-item-actions">{children}</div>
    </div>
  );
}
