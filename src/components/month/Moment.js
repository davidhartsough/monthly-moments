import React from "react";

/*
const getTitle = (url) => {  
  return fetch(url)
    .then((response) => response.text())
    .then((html) => {
      console.log(html);
      // const doc = new DOMParser().parseFromString(html, "text/html");
      // const title = doc.querySelectorAll('title')[0];
      // return title.innerText;
      const start = html.indexOf("<title>") + 7;
      const end = html.indexOf("</title>");
      return html.substring(start, end);
    }).catch(console.warn);
};
*/
// TODO get link's title ? how? Try ^ above. Consider axios
const urlPrefixes = ["https://", "http://", "www.", "www2."];
function formatLink(link) {
  let formattedLink = link;
  urlPrefixes.forEach((prefix) => {
    if (formattedLink.startsWith(prefix)) {
      formattedLink.replace(prefix, "");
    }
  });
  return formattedLink;
}

export default function Moment({ moment }) {
  const { text, links } = moment;
  return (
    <div className="moment">
      <p className="moment-text">{text}</p>
      {links?.length > 0 && (
        <div className="moment-links">
          {links.map((link, index) => (
            <a
              key={`${link}-${index}`}
              className="moment-link"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {formatLink(link)}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
