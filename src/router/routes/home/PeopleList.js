import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "react-feather";

export default function PeopleList({ data }) {
  const [search, setSearch] = useState("");
  const [listItems, setListItems] = useState(data);
  function handleSearch({ target }) {
    const query = target.value.trim().toUpperCase();
    let people = [...data];
    if (query.length > 0) {
      people = people.filter(
        ({ name, username }) =>
          name.toUpperCase().includes(query) ||
          username.toUpperCase().includes(query)
      );
    }
    setListItems(people);
    setSearch(target.value);
  }
  return (
    <>
      {data.length > 10 && (
        <label className="search">
          <Search size={20} className="search-icon" />
          <input
            type="search"
            placeholder="Search"
            id="filter-input"
            maxLength="100"
            minLength="2"
            value={search}
            onChange={handleSearch}
          />
        </label>
      )}
      <div className="connections people-list list">
        {listItems.length > 0 ? (
          listItems.map(({ username, name }, i) => (
            <Link
              to={`/p/${username}`}
              key={`${username}-${name}-${i}`}
              className="list-item"
            >
              <div className="list-item-text">
                <p className="p-name">{name}</p>
                <p className="p-username">{username}</p>
              </div>
            </Link>
          ))
        ) : (
          <div className="empty">
            <p>None of your connections match that search.</p>
            <Link to="/search">Find friends</Link>
          </div>
        )}
      </div>
    </>
  );
}
