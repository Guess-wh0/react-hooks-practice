import { useState } from "react";
import UseBooksContext from "../hooks/useBooksContext";

function BookCreate() {
  const [title, setTitle] = useState('');
  const { createBook } = UseBooksContext();

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle('');
  };

  return <div className="book-create">
    <h3>Add a Book</h3>
    <form onSubmit={ handleSubmit }>
      <label>Title</label>
      <input className="input" value={title} onChange={handleChange} placeholder="enter title naMe"></input>
      <button className="button">Create!</button>
    </form>
  </div>;
}

export default BookCreate;