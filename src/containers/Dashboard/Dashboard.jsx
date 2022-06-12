import { useState, useEffect } from 'react';
import PatternList from '../../pages/PatternList/PatternList';
import PatternHub from '../../pages/PatternHub/PatternHub';
import PatternNavBar from '../../components/PatternNavBar/PatternNavBar';
import PatternForm from '../../pages/PatternForm/PatternForm';
import PatternPage from '../../pages/PatternPage/PatternPage';
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
    return pattern.patternName.toLowerCase().includes(searchText);
  });

  return (
    <Router>
      <PatternNavBar />
      <Routes>
        <Route path='/pattern-hub' element={<PatternHub />} />
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
    </Router>
  );
};

export default Dashboard;
