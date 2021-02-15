import React from "react";

function Search({ search, setSearch, currentUser }) {
  return (
    <div className="search">
      <input
        type="text"
        id="search"
        placeholder="Search for a Restaurant"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
