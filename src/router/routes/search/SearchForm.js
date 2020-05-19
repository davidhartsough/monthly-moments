import React, { useState } from "react";
import { connect } from "react-redux";
import { runQuery } from "../../../store/actions/search";
import SearchBox from "../../../components/search/";

function SearchForm({ submit, query, loading }) {
  const [input, setInput] = useState(query.toLowerCase());
  const onChange = ({ target }) => setInput(target.value);
  function onSubmit(e) {
    e.preventDefault();
    if (loading) return;
    const search = input.trim().toUpperCase();
    if (search.length > 1 && search !== query) {
      submit(search);
    }
  }
  return (
    <form onSubmit={onSubmit} className="search-form">
      <SearchBox value={input} onChange={onChange} />
      <button type="submit" hidden className="hide" disabled={loading}>
        Search
      </button>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => ({
  submit: (query) => dispatch(runQuery(query)),
});
export default connect(null, mapDispatchToProps)(SearchForm);
