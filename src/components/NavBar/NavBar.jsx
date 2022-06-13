import './NavBar.scss';
import { Link } from 'react-router-dom';

const NavBar = ({ refreshPage }) => {
  return (
    <div className='nav-bar'>
      <Link className='nav-bar__item' to='/' onClick={refreshPage}>
        Home
      </Link>

      <Link className='nav-bar__item' to='/pattern-hub' onClick={refreshPage}>
        Knitting Hub
      </Link>

      <Link className='nav-bar__item' to='/book-hub' onClick={refreshPage}>
        Book library
      </Link>
    </div>
  );
};

export default NavBar;
