import './BookList.scss';
import Book from '../../components/Book/Book';
import SearchBar from '../../components/SearchBar/SearchBar';

const BookList = ({
  filteredBooks,
  toggleSearch,
  showSearch,
  searchTextHandler,
  searchResultCount,
  refreshPage,
}) => {
  const handleRefresh = () => {
    window.location.refresh(true);
  };

  return (
    <div className='book-list-page'>
      <div className='book-list'>
        {showSearch && (
          <SearchBar
            toggleSearch={toggleSearch}
            searchBoxTitle={'Search for books'}
            libraryName={'Book'}
            searchTextHandler={searchTextHandler}
            searchResultCount={searchResultCount}
            itemName='Search by book title'
          />
        )}
        <div className='search-bar__button' onClick={toggleSearch}>
          Book Finder
        </div>
        <h2 className='book-list__heading'>Warhammer 30K Library</h2>
        <div className='search-bar__button' onClick={handleRefresh}>
          Refresh Page
        </div>
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
              bookBlurb={book.bookBlurb}
              refreshPage={refreshPage}
            />
          ))}
      </div>
    </div>
  );
};

export default BookList;
