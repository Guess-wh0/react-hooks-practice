import { useState } from "react";

function BookEdit({ book, updateBook, setToggleEdit }) {
  const [title, setTitle] = useState(book.title)

  const handleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    updateBook(book.id, title, setToggleEdit)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Title:</label>
      <input className="input" value={title} onChange={handleChange}></input>
      <button className="button is-primary">Save</button>
    </form>
  );
}

export default BookEdit;