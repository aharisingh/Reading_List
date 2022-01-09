import React, { useContext, useState } from "react";
import BooksContext from "../contexts/BooksContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const BookForm = () => {
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const { dispatch } = useContext(BooksContext);

  const notify = () => {
    toast.success("Book Added Successfully!");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
    console.log(newBook);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(newBook);
    setFormErrors(errors);
    if (Object.keys(errors).length === 0 && errors.constructor === Object) {
      dispatch({
        type: "ADD_BOOK",
        book: { title: newBook.title, author: newBook.author },
      });
      setNewBook({ title: "", author: "" });
      notify();
    }
  };

  const validate = (values) => {
    const errors = {};
    const regT = /^[0-9 ]*$/; //check that string contains only digit .
    const regA = /^[a-zA-Z ]*$/; //check that string contain only alphabet and space.
    if (!values.title) {
      errors.title = "Title is required!";
    } else if (values.title.length < 3) {
      errors.title = "Title length must be more than 2 Characters.";
    } else if (regT.test(values.title)) {
      errors.title = "Title Can't be a Number .";
    }

    if (!values.author) {
      errors.author = "Author is required!";
    } else if (values.author.length < 3) {
      errors.author = "Author length must be more than 2 Characters.";
    } else if (!regA.test(values.author)) {
      errors.author = "Author Should  contain only Alphabets And Space .";
    }

    return errors;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="title">Title</label>
          <br></br>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter Title of Book"
            onChange={handleChange}
            value={newBook.title}
          />
          <p className="warning">{formErrors.title}</p>
        </div>
        <div>
          <label className="author">Author</label>
          <br></br>
          <input
            type="text"
            id="author"
            name="author"
            placeholder="Enter Author of Book"
            onChange={handleChange}
            value={newBook.author}
          />
          <p className="warning">{formErrors.author}</p>
        </div>
        <button className="btn">Add Book</button>
      </form>
      <ToastContainer autoClose={1500} />
    </div>
  );
};

export default BookForm;
