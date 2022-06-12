import './Book.scss';

const Book = ({
  bookId,
  bookTitle,
  bookGenre,
  bookAuthor,
  bookDescription,
}) => {
  const handleDelete = () => {
    fetch('https://wolfs-knitting-hub-5h356xxfoq-nw.a.run.app/book/' + bookId, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err));
    console.log('deleted');
  };

  return (
    <div className='book'>
      <div className='book__btn-container'>
        <h2>{bookTitle}</h2>
        <button onClick={handleDelete} className='book__btn'>
          Del
        </button>
      </div>
      <h3>Author: {bookAuthor}</h3>
      <h4>Genre: {bookGenre}</h4>
      <p>Description: {bookDescription}</p>
      <Link to='/book-page'>Go to full book description</Link>
    </div>
  );
};

export default Book;
