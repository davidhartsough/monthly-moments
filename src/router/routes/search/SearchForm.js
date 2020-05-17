import React from "react";
import { connect } from "react-redux";
import { runQuery } from "../../../store/actions/search";
import { Search as SearchIcon } from "react-feather";
import { useForm } from "react-hook-form";

function SearchForm({ submit, query, loading }) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => submit(data.search.trim().toUpperCase());
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="search-form">
      <label className="search">
        <SearchIcon size={20} className="search-icon" />
        <input
          type="search"
          placeholder="Search"
          id="search-input"
          maxLength="100"
          minLength="2"
          name="search"
          defaultValue={query}
          ref={register({
            maxLength: {
              value: 100,
              message: "Please use fewer than 100 characters.",
            },
            minLength: {
              value: 2,
              message: "Please enter at least 2 letters.",
            },
          })}
        />
      </label>
      <button
        type="submit"
        hidden
        className="search-button hide"
        disabled={loading}
      >
        Search
      </button>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => ({
  submit: (query) => dispatch(runQuery(query)),
});
export default connect(null, mapDispatchToProps)(SearchForm);
