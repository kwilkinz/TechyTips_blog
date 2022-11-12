import React from "react";
import "./Search.css";

///? All we be passed from the parent component

const Search = ({ value, handleSearchKey, clearSearch, formSubmit }) => (
  <div className="searchBar-wrap">
    <form onSubmit={formSubmit}>
      <input
        type="text"
        placeholder="Search By Category"
        value={value}
        onChange={handleSearchKey}
      />
      {/* this is evaluating the input */}
      {value && <span onClick={clearSearch}>X</span>}
      <button>Go</button>
    </form>
  </div>
);

export default Search;
