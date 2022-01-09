import React, { useState, useReducer, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import BooksContext from "../contexts/BooksContext";
import BookReducer from "../reducers/BookReducer";
const BooksProvider = (props) => {
  const [books, dispatch] = useReducer(BookReducer, [], () => {
    const localData = localStorage.getItem("books");
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);
  return (
    <BooksContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BooksContext.Provider>
  );
};
export default BooksProvider;
