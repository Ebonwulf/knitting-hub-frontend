import BookHub from '../../pages/BookHub/BookHub';
import PatternHub from '../../pages/PatternHub/PatternHub';
import NavBar from '../../components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';

const Dashboard = ({ refreshPage }) => {
  return (
    <>
      <NavBar refreshPage={refreshPage} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pattern-hub' element={<PatternHub />} />
        <Route path='/book-hub' element={<BookHub />} />
      </Routes>
    </>
  );
};

export default Dashboard;
