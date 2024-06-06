import { useState } from "react";
import BookEdit from "./bookEdit";
import UseBooksContext from "../hooks/useBooksContext";

function BookShow({ book }) {
  const [toggleEdit, setToggleEdit] = useState(false);
  const { deleteBookById } = UseBooksContext();
  
  const handleDelete = () => {
    deleteBookById(book.id);
  }

  const handleEditToggle = () => {
    setToggleEdit(!toggleEdit)
  };

  let content = <h3>{ book.title }</h3>
  if(toggleEdit) {
    content = <BookEdit book={book} setToggleEdit={setToggleEdit} />
  }

  return (<div className="book-show">
    <img alt="books" src={`https://picsum.photos/seed/${book.id}/200/150`} />
    <div> { content } </div>
    <div className="actions">
      <button className="edit" onClick={ handleEditToggle }>
        edit
      </button>
      <button className="delete" onClick={ handleDelete }>
        delete
      </button>
    </div>
  </div>);
}

export default BookShow;