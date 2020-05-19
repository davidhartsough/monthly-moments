import React from "react";
import "./Moment.css";

const urlPattern = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/;
const urlPrefixes = ["https://", "http://", "www.", "www2."];
function formatLink(url) {
  let link = url;
  urlPrefixes.forEach((prefix) => {
    if (link.startsWith(prefix)) {
      link = link.replace(prefix, "");
    }
  });
  if (link.charAt(link.length - 1) === "/") {
    link = link.slice(0, -1);
  }
  if (link.length > 40) {
    link = link.substr(0, 40) + "…";
  }
  return link;
}

const MomentLink = ({ url }) => (
  <a
    className="moment-link"
    href={url}
    target="_blank"
    rel="noopener noreferrer"
  >
    {` ${formatLink(url)} `}
  </a>
);
const hasALink = (str) => str.includes("https://") || str.includes("http://");
const whitespacePattern = /\s/;
function formatText(str) {
  let text = [];
  let remaining = str;
  while (hasALink(remaining)) {
    let urlIndex = remaining.indexOf("https://");
    let altUrlIndex = remaining.indexOf("http://");
    if (altUrlIndex !== -1 && (urlIndex > altUrlIndex || urlIndex === -1)) {
      urlIndex = altUrlIndex;
    }
    let url = remaining.slice(urlIndex);
    let nextSpaceIndex = url.search(whitespacePattern);
    if (nextSpaceIndex === -1) {
      nextSpaceIndex = remaining.length - 1;
      if (!urlPattern.test(url)) {
        text.push(remaining);
        remaining = "";
        break;
      }
      text.push(remaining.slice(0, urlIndex));
      text.push(
        <MomentLink key={`${url}-${urlIndex}-${nextSpaceIndex}`} url={url} />
      );
      remaining = "";
      break;
    } else {
      url = url.slice(0, nextSpaceIndex);
      nextSpaceIndex += urlIndex;
    }
    if (!urlPattern.test(url)) {
      text.push(remaining.slice(0, nextSpaceIndex));
      remaining = remaining.slice(nextSpaceIndex);
      continue;
    }
    text.push(remaining.slice(0, urlIndex));
    text.push(
      <MomentLink key={`${url}-${urlIndex}-${nextSpaceIndex}`} url={url} />
    );
    remaining = remaining.slice(nextSpaceIndex);
  }
  return text;
}

export default function Moment({ moment }) {
  const { text } = moment;
  return (
    <div className="moment">
      <p className="moment-text">{hasALink(text) ? formatText(text) : text}</p>
    </div>
  );
}
