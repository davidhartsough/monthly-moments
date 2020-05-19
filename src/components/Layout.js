import React from "react";
import { NavLink } from "react-router-dom";
import { Search, User, Home } from "react-feather";
import "./Layout.css";

export default function Layout({ children }) {
  return (
    <>
      <nav>
        <div className="nav-links">
          <NavLink to="/" exact className="nav-link">
            <Home />
          </NavLink>
          <NavLink to="/search" className="nav-link">
            <Search />
          </NavLink>
          <NavLink to="/profile" className="nav-link">
            <User />
          </NavLink>
        </div>
      </nav>
      <section>{children}</section>
    </>
  );
}
