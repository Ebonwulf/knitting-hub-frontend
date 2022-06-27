import { useState } from 'react';

const BookForm = () => {
  const [book, setBook] = useState({
    bookTitle: '',
    bookGenre: '',
    bookAuthor: '',
    bookDescription: '',
    bookBlurb: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      'https://wolfs-knitting-hub-5h356xxfoq-nw.a.run.app/knitting-hub-frontend/book',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(book),
      }
    )
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err));
    e.target.reset();
  };
  return (
    <div className='book-form-page'>
      <div className='form'>
        <h2 className='form__heading'>Add a new book</h2>
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
          <input
            type='text'
            placeholder='brief description'
            onInput={(e) =>
              setBook({ ...book, bookDescription: e.target.value })
            }
          />
          <textarea
            type='text'
            placeholder='Blurb'
            onInput={(e) => setBook({ ...book, bookBlurb: e.target.value })}
          />
          <button type='submit' className='form__form-button'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookForm;
