import React from "react";
import SearchBar from "../search-bar/SearchBar";
import Widget from "../widget/Widget";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <h1 className="logo">Booksy</h1>
      <SearchBar />
      <Widget />
    </div>
  );
}

export default Header;
