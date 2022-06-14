import BookHub from '../../pages/BookHub/BookHub';
import PatternHub from '../../pages/PatternHub/PatternHub';
import NavBar from '../../components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';

const Dashboard = ({ refreshPage }) => {
  return (
    <>
      <Router>
        <NavBar refreshPage={refreshPage} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pattern-hub' element={<PatternHub />} />
          <Route path='/book-hub' element={<BookHub />} />
        </Routes>
      </Router>
    </>
  );
};

export default Dashboard;
