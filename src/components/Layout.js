import React from "react";
import { Link } from "react-router-dom";
import { Search, User } from "react-feather";

// TODO get logo image
export default function Layout({ children }) {
  return (
    <>
      <nav>
        <Link to="/" className="logo-link">
          <p>MM</p>
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
