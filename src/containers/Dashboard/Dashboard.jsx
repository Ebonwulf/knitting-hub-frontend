import { useState, useEffect } from 'react';
import './Dashboard.scss';
import PatternList from '../../pages/PatternList/PatternList';
import Home from '../../pages/Home';
import NavBar from '../../components/NavBar/NavBar';
import PatternForm from '../../pages/PatternForm/PatternForm';
import PatternPage from '../../pages/PatternPage/PatternPage';
import BookForm from '../../pages/BookForm/BookForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Dashboard = () => {
  const [patterns, setPatterns] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState('');

  const getPatterns = () => {
    fetch('https://wolfs-knitting-hub-5h356xxfoq-nw.a.run.app/patterns')
      .then((res) => res.json())
      .then((json) => setPatterns(json))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPatterns();
  }, []);

  const toggleSearch = () => {
    console.log(showSearch);
    setShowSearch(!showSearch);
  };

  const searchTextHandler = (e) => {
    const text = e.target.value;
    setSearchText(text);
  };

  const filteredPatterns = patterns.filter((pattern) => {
    return pattern.name.toLowerCase().includes(searchText);
  });

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/patterns'
          element={
            <PatternList
              showSearch={showSearch}
              toggleSearch={toggleSearch}
              filteredPatterns={filteredPatterns}
              searchTextHandler={searchTextHandler}
            />
          }
        />
        <Route path='/new-pattern' element={<PatternForm />} />
      </Routes>
      <Routes>
        <Route path='/pattern-page' element={<PatternPage />} />
      </Routes>
      <Routes>
        <Route path='/new-book' element={<BookForm />} />
      </Routes>
    </Router>
  );
};

export default Dashboard;
