import React, { useState } from "react";
import CreateProfile from "./CreateProfile";
import "./Intro.css";

export default function Intro({ auth }) {
  const [ready, setReady] = useState(
    window.localStorage.getItem(`ready--${auth.uid}`) === "true"
  );
  function progress() {
    setReady(true);
    window.localStorage.setItem(`ready--${auth.uid}`, "true");
  }
  if (ready) {
    return (
      <CreateProfile
        displayName={auth.displayName}
        suggestion={auth.suggestion}
      />
    );
  }
  return (
    <section>
      <header>
        <h1>Monthly Moments</h1>
        <h2>Introduction</h2>
      </header>
      <div id="intro">
        <p>
          <strong>Welcome!</strong> This app is a minimal yet meaningful social
          platform for you and your friends to share amazing moments with each
          other — one month at a time.
        </p>
        <p>
          <strong>How Monthly Moments works</strong>
        </p>
        <p>
          It's like a monthly newsletter; everyone writes about Moments from
          their lives throughout each month, and then at the beginning of the
          next month, all of those Moments are shared out to their friends.
        </p>
        <p>
          <strong>Examples of Moments</strong>
        </p>
        <p>
          Generally, Moments capture the the parts of your life that you want to
          share with your friends, including:
        </p>
        <ul>
          <li>Major life events, milestones</li>
          <li>Events you went to or were a part of</li>
          <li>Happenings, life updates, changes</li>
          <li>Projects, accomplishments, achievements</li>
          <li>
            Activities and things you enjoyed, spent time with, or found
            meaningful
          </li>
          <li>Media, entertainment, games, movies, books</li>
        </ul>
        <div className="intro-actions">
          <a
            className="button"
            href="https://davidhartsough.com/writings/monthly-moments/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
          <button onClick={progress}>Get Started</button>
        </div>
      </div>
    </section>
  );
}
