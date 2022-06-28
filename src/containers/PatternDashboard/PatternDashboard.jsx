import { useState, useEffect } from 'react';
import PatternList from '../../pages/PatternList/PatternList';
import LibraryNavBar from '../../components/LibraryNavBar/LibraryNavBar';
import PatternForm from '../../pages/PatternForm/PatternForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const PatternDashboard = ({ refreshPage }) => {
  const [patterns, setPatterns] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState('');

  const getPatterns = () => {
    fetch(
      'https://wolfs-knitting-hub-5h356xxfoq-nw.a.run.app/knitting-hub-frontend/patterns'
    )
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
    const text = e.target.value.toLowerCase();
    setSearchText(text);
  };

  const filteredPatterns = patterns.filter((pattern) => {
    return pattern.patternName.toLowerCase().includes(searchText);
  });

  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <LibraryNavBar
          refreshPage={refreshPage}
          libraryName='Patterns'
          addPage='Add Pattern'
          homePath='/'
          libraryPath='/patterns'
          addPath='/new-pattern'
        />
        <Routes>
          <Route
            path='/patterns'
            element={
              <PatternList
                showSearch={showSearch}
                toggleSearch={toggleSearch}
                filteredPatterns={filteredPatterns}
                searchTextHandler={searchTextHandler}
                searchResultCount={filteredPatterns.length}
              />
            }
          />
          <Route path='/new-pattern' element={<PatternForm />} />
        </Routes>
      </Router>
    </>
  );
};

export default PatternDashboard;
