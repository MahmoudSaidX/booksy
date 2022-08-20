import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="!#" className="active-link">Home</a>
        </li>
        <li>
          <a href="!#">Bestseller</a>
        </li>
        <li>
          <a href="!#">Category</a>
        </li>
        <li>
          <a href="!#">Find a store</a>
        </li>
        <li>
          <a href="!#">Blog</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
