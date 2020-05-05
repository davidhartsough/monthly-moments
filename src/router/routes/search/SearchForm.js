import React from "react";
import { connect } from "react-redux";
import { runQuery } from "../../../store/actions/search";
import { Search as SearchIcon } from "react-feather";
import { useForm } from "react-hook-form";

function SearchForm({ submit, loading }) {
  const { register, handleSubmit } = useForm();
  function onSubmit(data) {
    console.log(data);
    submit(data.search);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="search-form">
      <div className="search-bar">
        <div className="icon-prefix">
          <SearchIcon size={20} />
        </div>
        <input
          type="search"
          placeholder="Search"
          id="search-input"
          maxLength="120"
          name="search"
          ref={register}
        />
      </div>
      <button type="submit" className="search-button" disabled={loading}>
        Search
      </button>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => ({
  submit: (query) => dispatch(runQuery(query)),
});
export default connect(null, mapDispatchToProps)(SearchForm);
