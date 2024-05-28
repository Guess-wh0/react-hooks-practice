import { useState, useEffect } from "react";
import BookCreate from "./components/bookCreate";
import BookList from "./components/bookList";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async() => {
    const response = await(axios.get(
      "http://localhost:3001/books"
    ))
    setBooks(response.data)
  };

  useEffect(
    () => {
      fetchBooks()
    }, []
  );

  const createBook = async(title) => {
    const response = await(axios.post(
      "http://localhost:3001/books", {
        "title": title
      }
    ));
    const addedBooks = [
      ...books,
      response.data
    ]
    setBooks(addedBooks)
  }

  const deleteBookById = async(id) => {
    await axios.delete(`http://localhost:3001/books/${id}`)
    const updatedBooks = books.filter((book) => {
      return book.id !== id
    })
    setBooks(updatedBooks)
  }

  const updateBook = async (id, title, setToggleEdit) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`,
      {title: title}
    )
    const updatedBooks = books.map((book, idx) => {
      if(book.id === id) {
        return { ...book, ...response.data }
      }
      return book
    })
    setBooks(updatedBooks)
    setToggleEdit(false)
  };

return <div className="app">
    <h1>Reading List</h1>
    <BookList books={books} onDelete = { deleteBookById } updateBook={ updateBook } />
    <BookCreate onCreate = {createBook} />
  </div>;
}

export default App;