import './BookList.scss';
import Book from '../../components/Book/Book';
import SearchBar from '../../components/SearchBar/SearchBar';

const BookList = ({ filteredBooks, toggleSearch, showSearch }) => {
  return (
    <>
      <div className='book-list'>
        {showSearch && <SearchBar toggleSearch={toggleSearch} />}
        <h2 className='book-list__heading'>Book Library</h2>
        <div className='search-bar__button' onClick={toggleSearch}>
          Book Finder
        </div>
        <div className='book-list__cont'>
          {filteredBooks &&
            filteredBooks.map((book) => (
              <Book
                key={book.bookTitle}
                bookTitle={book.bookTitle}
                bookId={book.bookId}
                bookGenre={book.bookGenre}
                bookAuthor={book.bookAuthor}
                bookDescription={book.bookDescription}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default BookList;
