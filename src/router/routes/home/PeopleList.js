import React, { useState } from "react";
import { Link } from "react-router-dom";
import { List, LinkListItem } from "../../../components/list/";
import SearchBox from "../../../components/search/";

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
      {data.length > 10 && <SearchBox value={search} onChange={handleSearch} />}
      <List>
        {listItems.length > 0 ? (
          listItems.map(({ username, name }, i) => (
            <LinkListItem
              key={`${username}-${name}-${i}`}
              username={username}
              name={name}
            />
          ))
        ) : (
          <div className="empty">
            <p>None of your connections match that search.</p>
            <Link to="/search">Find friends</Link>
          </div>
        )}
      </List>
    </>
  );
}
