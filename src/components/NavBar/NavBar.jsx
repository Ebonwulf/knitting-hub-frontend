import './NavBar.scss';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='nav-bar'>
      <Link className='nav-bar__item' to='/'>
        Home
      </Link>

      <Link className='nav-bar__item' to='/pattern-hub'>
        Knitting Hub
      </Link>

      <Link className='nav-bar__item' to='/book-hub'>
        Book library
      </Link>
    </div>
  );
};

export default NavBar;
