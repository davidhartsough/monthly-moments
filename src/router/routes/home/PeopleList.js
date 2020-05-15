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
    setSearch(query);
  }
  return (
    <>
      {data.length > 10 && (
        <div className="search-bar">
          <div className="icon-prefix">
            <Search size={20} />
          </div>
          <input
            type="search"
            placeholder="Search"
            id="search-input"
            maxLength="120"
            value={search}
            onChange={handleSearch}
          />
        </div>
      )}
      <div className="connections people-list">
        {listItems.length > 0 ? (
          listItems.map(({ username, name }) => (
            <div key={username} className="list-item">
              <Link to={`/p/${username}`} className="list-item-text">
                <p className="p-name">{name}</p>
                <p className="p-username">{username}</p>
              </Link>
            </div>
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
