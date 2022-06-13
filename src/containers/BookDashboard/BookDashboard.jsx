import { useState, useEffect } from 'react';
import BookList from '../../pages/BookList/BookList';
import BookForm from '../../pages/BookForm/BookForm';
import BookHub from '../../pages/BookHub/BookHub';
import { Routes, Route } from 'react-router-dom';
import BookNavBar from '../../components/BookNavBar/BookNavBar';

const BookDashboard = ({ refreshPage }) => {
  const [books, setBooks] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState('');

  const getBooks = () => {
    fetch('https://wolfs-knitting-hub-5h356xxfoq-nw.a.run.app/books')
      .then((res) => res.json())
      .then((json) => setBooks(json))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getBooks();
  }, []);

  const toggleSearch = () => {
    console.log(showSearch);
    setShowSearch(!showSearch);
  };

  const searchTextHandler = (e) => {
    const text = e.target.value;
    setSearchText(text);
  };

  const filteredBooks = books.filter((book) => {
    return book.bookTitle.toLowerCase().includes(searchText);
  });

  return (
    <>
      <BookNavBar refreshPage={refreshPage} />
      <Routes>
        <Route path='/book-hub' element={<BookHub />} />
        <Route
          path='/books'
          element={
            <BookList
              showSearch={showSearch}
              toggleSearch={toggleSearch}
              filteredBooks={filteredBooks}
              searchTextHandler={searchTextHandler}
            />
          }
        />
        <Route path='/new-book' element={<BookForm />} />
      </Routes>
    </>
  );
};

export default BookDashboard;