import './Book.scss';
import FullDescription from '../FullDescription/FullDescription';
import React, { useState } from 'react';
import Button from '../Button/Button';
import UpdateBook from '../UpdateBook/UpdateBook';

const Book = ({
  bookId,
  bookTitle,
  bookGenre,
  bookAuthor,
  bookDescription,
  bookBlurb,
  refreshPage,
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showUpdateBox, setShowUpdateBox] = useState(false);

  const handleDelete = () => {
    fetch(
      'https://wolfs-knitting-hub-5h356xxfoq-nw.a.run.app/knitting-hub-frontend/book/' +
        bookId,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err));
    console.log('deleted');
    refreshPage();
  };

  const toggleUpdateBox = () => {
    setShowUpdateBox(!showUpdateBox);
  };

  const toggleDetails = () => {
    console.log(showDetails);
    setShowDetails(!showDetails);
  };

  return (
    <div className='book'>
      {showUpdateBox && (
        <UpdateBook
          bookId={bookId}
          bookAuthor={bookAuthor}
          bookBlurb={bookBlurb}
          bookTitle={bookTitle}
          bookDescription={bookDescription}
          bookGenre={bookGenre}
          toggleUpdateBox={toggleUpdateBox}
        />
      )}
      <h2>{bookTitle}</h2>
      <h4>Author: {bookAuthor}</h4>
      <h4>Genre: {bookGenre}</h4>
      <p>Description: {bookDescription}</p>
      <div className='book__btn-box'>
        <div className='book__link' onClick={toggleDetails}>
          Go to full book description
          {showDetails && (
            <FullDescription
              toggleDetails={toggleDetails}
              bookAuthor={bookAuthor}
              bookBlurb={bookBlurb}
              bookTitle={bookTitle}
              bookDescription={bookDescription}
            />
          )}
        </div>
        <Button onClickType={handleDelete} buttonText='Delete' />
        <Button onClickType={toggleUpdateBox} buttonText='Update' />
      </div>
    </div>
  );
};

export default Book;
