import React, { useContext } from "react";
import BooksContext from "../contexts/BooksContext";
import BookDetails from "./BookDetails";
const BookList = () => {
  const { books } = useContext(BooksContext);
  return books.length ? (
    <div className="books-list">
      <ul>
        {books.map((book) => {
          return <BookDetails book={book} key={book.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No Books to read . Enjoy your free Time.</div>
  );
};

export default BookList;
