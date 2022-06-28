import { useState, useEffect } from 'react';
import BookList from '../../pages/BookList/BookList';
import BookForm from '../../pages/BookForm/BookForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LibraryNavBar from '../../components/LibraryNavBar/LibraryNavBar.jsx';

const BookDashboard = ({ refreshPage }) => {
  const [books, setBooks] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState('');

  const getBooks = () => {
    fetch(
      'https://wolfs-knitting-hub-5h356xxfoq-nw.a.run.app/knitting-hub-frontend/books'
    )
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
      <Router basename={process.env.PUBLIC_URL}>
        <LibraryNavBar
          refreshPage={refreshPage}
          libraryName='Books'
          addPage='Add Book'
          homePath='/'
          libraryPath='/books'
          addPath='/new-book'
        />
        <Routes>
          <Route
            path='/books'
            element={
              <BookList
                showSearch={showSearch}
                toggleSearch={toggleSearch}
                filteredBooks={filteredBooks}
                searchTextHandler={searchTextHandler}
                searchResultCount={filteredBooks.length}
              />
            }
          />
          <Route path='/new-book' element={<BookForm />} />
        </Routes>
      </Router>
    </>
  );
};

export default BookDashboard;
