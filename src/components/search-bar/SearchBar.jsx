import React from "react";
import "./search-bar.css";

function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search by author, title, name" />
    </div>
  );
}

export default SearchBar;
