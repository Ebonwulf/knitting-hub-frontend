import Button from '../Button/Button';
import './UpdateBook.scss';
import { useState } from 'react';
import '../UpdatePattern/UpdatePattern.scss';

const UpdateBook = ({
  bookId,
  bookTitle,
  bookGenre,
  bookAuthor,
  bookDescription,
  bookBlurb,
  toggleUpdateBox,
}) => {
  const [bookUpdate, setBookUpdate] = useState({
    bookTitle: { bookTitle },
    bookGenre: { bookGenre },
    bookAuthor: { bookAuthor },
    bookDescription: { bookDescription },
    bookBlurb: { bookBlurb },
  });

  const updateBook = (e) => {
    e.preventDefault();
    fetch(
      'https://wolfs-knitting-hub-5h356xxfoq-nw.a.run.app/knitting-hub-frontend/books/' +
        bookId,
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookUpdate),
      }
    )
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err));
    console.log('updated');
  };
  return (
    <div className='update-form'>
      <form className='form' onSubmit={updateBook}>
        <h2 className='form__heading'>Update the book</h2>
        <input
          type='text'
          placeholder='book title'
          defaultValue={bookTitle}
          onInput={(e) =>
            setBookUpdate({ ...bookUpdate, bookTitle: e.target.value })
          }
        />
        <input
          type='text'
          placeholder='book genre'
          defaultValue={bookGenre}
          onInput={(e) =>
            setBookUpdate({ ...bookUpdate, bookGenre: e.target.value })
          }
        />
        <input
          type='text'
          placeholder='book author'
          defaultValue={bookAuthor}
          onInput={(e) =>
            setBookUpdate({ ...bookUpdate, bookAuthor: e.target.value })
          }
        />
        <input
          type='text'
          placeholder='brief description'
          defaultValue={bookDescription}
          onInput={(e) =>
            setBookUpdate({ ...bookUpdate, bookDescription: e.target.value })
          }
        />
        <textarea
          type='text'
          placeholder='Blurb'
          defaultValue={bookBlurb}
          onInput={(e) =>
            setBookUpdate({ ...bookUpdate, bookBlurb: e.target.value })
          }
        />
        <div className='update-form__btns-div'>
          <Button onClickType={toggleUpdateBox} buttonText='Back' />
          <button type='submit' className='update-form__button'>
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateBook;
