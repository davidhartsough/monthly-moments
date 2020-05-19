import React from "react";
import { Search } from "react-feather";
import "./SearchBox.css";

export default function SearchBox(props) {
  return (
    <label className="search">
      <Search size={20} className="search-icon" />
      <input
        type="search"
        placeholder="Search"
        maxLength="70"
        minLength="2"
        {...props}
      />
    </label>
  );
}
