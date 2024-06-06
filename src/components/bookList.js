import BookShow from './bookShow';
import UseBooksContext from "../hooks/useBooksContext";

function BookList() {
  const { books } = UseBooksContext();

  const renderedBooks = books.map((book) => {
    return(
      <BookShow key={book.id} book={book} />
    );
  })
  return (<div className='book-list'>
    { renderedBooks }
  </div>);
}

export default BookList;