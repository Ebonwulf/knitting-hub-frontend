import './Book.scss';
import DescriptionPage from '../../pages/DescriptionPage/DescriptionPage';
import { useState } from 'react';

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

  const toggleDetails = () => {
    console.log(showDetails);
    setShowDetails(!showDetails);
  };

  return (
    <div className='book'>
      <div className='book__btn-container'>
        <h2>{bookTitle}</h2>
        <button onClick={handleDelete} className='book__btn'>
          Del
        </button>
      </div>
      <h4>Author: {bookAuthor}</h4>
      <h4>Genre: {bookGenre}</h4>
      <p>Description: {bookDescription}</p>
      <div className='book__link' onClick={toggleDetails}>
        Go to full book description
        {showDetails && (
          <DescriptionPage
            toggleDetails={toggleDetails}
            bookAuthor={bookAuthor}
            bookBlurb={bookBlurb}
            bookTitle={bookTitle}
            bookDescription={bookDescription}
          />
        )}
      </div>
    </div>
  );
};

export default Book;
