import BooksProvider from "./components/BooksProvider";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import NewBookForm from "./components/NewBookForm";
function App() {
  return (
    <div className="App">
      <BooksProvider>
        <Navbar />
        <BookList />
        <NewBookForm />
      </BooksProvider>
    </div>
  );
}

export default App;
