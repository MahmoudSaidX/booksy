import React, { useState, useEffect } from "react";
import axios from "axios";
import Book from "../book/Book";
import Pagination from "../pagination/Pagination";
import "./popular-now.css";

function PopularNow() {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(6);

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get("https://gutendex.com/books/");
      setBooks(res.data.results);
    };
    fetchBooks();
  }, []);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  const paginate = (pagNumber) => setCurrentPage(pagNumber);
  console.log(books);
  return (
    <section className="popular-now">
      <div className="popular-now_head">
        <h2>Popular Now</h2>
        <p>View All</p>
      </div>
      <div className="books-wrapper">
        {currentBooks.map((book) => (
          <Book
            key={book.id}
            bookName={book.title}
            bookAuthor={book.authors[0].name}
            bookUrl={book.formats["image/jpeg"]}
          />
        ))}
      </div>
      <Pagination
        booksPerPage={booksPerPage}
        totalBooks={books.length}
        paginate={paginate}
      />
    </section>
  );
}

export default PopularNow;
