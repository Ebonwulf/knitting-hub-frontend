import { useState, useEffect } from 'react';
import './Dashboard.scss';
import PatternList from '../../pages/PatternList/PatternList';
import Home from '../../pages/Home';
import NavBar from '../../components/NavBar/NavBar';
import PatternForm from '../../pages/PatternForm/PatternForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Dashboard = () => {
  const [patterns, setPatterns] = useState([]);

  const getPatterns = () => {
    fetch('http://localhost:8080/patterns')
      .then((res) => res.json())
      .then((json) => setPatterns(json))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPatterns();
  }, []);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/patterns' element={<PatternList patterns={patterns} />} />
        <Route path='/new-pattern' element={<PatternForm />} />
      </Routes>
    </Router>
  );
};

export default Dashboard;
