import { createContext, useContext, useState } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = async() => {
    const response = await(axios.get(
      "http://localhost:3001/books"
    ))
    setBooks(response.data)
  };

  
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

  const valuesToShare = {
    books,
    fetchBooks,
    updateBook,
    deleteBookById,
    createBook
  }


  return (
    <BooksContext.Provider value={ valuesToShare }>
      {children}
    </BooksContext.Provider>
  )
}

export { Provider };
export default BooksContext;
