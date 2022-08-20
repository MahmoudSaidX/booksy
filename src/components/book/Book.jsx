import React from "react";
import "./book.css";

function Book(props) {
  return (
    <div className="book">
      <img className="book-img" src={props.bookUrl} alt={props.bookName} />
      <p className="book-title">{props.bookName}</p>
      <p className="book-author">{props.bookAuthor}</p>
      <div className="book-rating">
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
      </div>
    </div>
  );
}

export default Book;
