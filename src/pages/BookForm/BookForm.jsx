import './BookForm.scss';
import { useState } from 'react';

const BookForm = () => {
  const [book, setBook] = useState({
    bookTitle: '',
    bookGenre: '',
    bookAuthor: '',
    bookDescription: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://wolfs-knitting-hub-5h356xxfoq-nw.a.run.app/book', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err));
    e.target.reset();
  };
  return (
    <div className='book-form-page'>
      <div className='book-form'>
        <h2>Add a new book</h2>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='book title'
            onInput={(e) => setBook({ ...book, bookTitle: e.target.value })}
          />
          <input
            type='text'
            placeholder='book genre'
            onInput={(e) => setBook({ ...book, bookGenre: e.target.value })}
          />
          <input
            type='text'
            placeholder='book author'
            onInput={(e) => setBook({ ...book, bookAuthor: e.target.value })}
          />
          <textarea
            type='text'
            placeholder='description'
            onInput={(e) =>
              setBook({ ...book, bookDescription: e.target.value })
            }
          />
          <button type='submit' className='book-form__button'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookForm;
