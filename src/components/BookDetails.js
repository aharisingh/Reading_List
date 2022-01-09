import React, { useContext } from "react";
import BooksContext from "../contexts/BooksContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const BookDetails = ({ book }) => {
  const { dispatch } = useContext(BooksContext);

  const notify = () => {
    toast.error("Book Deleted Successfully!");
  };

  const handleOnClick = () => {
    dispatch({ type: "REMOVE_BOOK", id: book.id });
    notify();
  };
  return (
    <div>
      <li onClick={handleOnClick}>
        <div className="title">{book.title}</div>
        <div className="author">{book.author}</div>
      </li>
      <ToastContainer autoClose={1500} />
    </div>
  );
};

export default BookDetails;
