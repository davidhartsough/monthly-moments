import React from "react";
import { Link } from "react-router-dom";
import { Search, User, Home } from "react-feather";

// TODO get logo image
export default function Layout({ children }) {
  return (
    <>
      <nav>
        <Link to="/" className="nav-link">
          <Home />
        </Link>
        <Link to="/search" className="nav-link">
          <Search />
        </Link>
        <Link to="/profile" className="nav-link">
          <User />
        </Link>
      </nav>
      <section>{children}</section>
    </>
  );
}
