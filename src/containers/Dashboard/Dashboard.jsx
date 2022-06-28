import NavBar from '../../components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';

const Dashboard = ({ refreshPage }) => {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home refreshPage={refreshPage} />} />
        </Routes>
      </Router>
    </>
  );
};

export default Dashboard;
