import { useContext, useState } from 'react';
import BooksContext from '../context/books';
import BookShow from './bookShow';

function BookList({ books, onDelete, updateBook }) {
  const { count, incrementCount } = useContext(BooksContext);

  const renderedBooks = books.map((book) => {
    return(
      <BookShow key={book.id} book={book} onDelete = { onDelete } updateBook={updateBook}/>
    );
  })
  return (<div className='book-list'>
    { count }
    <button onClick= {incrementCount} >Increment count</button>
    { renderedBooks }
  </div>);
}

export default BookList;