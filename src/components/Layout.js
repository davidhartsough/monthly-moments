import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Search, User, Home, PlusCircle } from "react-feather";
import "./Layout.css";

function Layout({ children, username }) {
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
          <NavLink to="/add" className="nav-link">
            <PlusCircle />
          </NavLink>
          <NavLink to={`/p/${username}`} className="nav-link">
            <User />
          </NavLink>
        </div>
      </nav>
      <section>{children}</section>
    </>
  );
}

export default connect(({ profile: { username } }) => ({ username }))(Layout);
