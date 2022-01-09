import React, { useContext } from "react";
import BooksContext from "../contexts/BooksContext";
const Navbar = () => {
  const { books } = useContext(BooksContext);
  console.log(books);
  return (
    <div className="navbar">
      <h1>Reading List project</h1>
      <h2>Currently number of books to read are {books.length} .</h2>
    </div>
  );
};
export default Navbar;
