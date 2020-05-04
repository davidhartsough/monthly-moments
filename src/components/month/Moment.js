import React from "react";

export default function Moment({ moment }) {
  const { text, links } = moment;
  // TODO get link's title ? how?
  return (
    <div className="moment">
      <p className="moment-text">{text}</p>
      {links && links.length > 0 && (
        <div className="moment-links">
          {links.map((link) => (
            <a className="moment-link" href={link}>
              {link}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
