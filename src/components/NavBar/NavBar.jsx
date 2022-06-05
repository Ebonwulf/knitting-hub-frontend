import './NavBar.scss';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='nav-bar'>
      <Link className='nav-bar-menu__item' to='/'>
        Home
      </Link>

      <Link className='nav-bar-menu__item' to='/patterns'>
        Patterns
      </Link>

      <Link className='nav-bar-menu__item' to='/new-pattern'>
        Add Pattern
      </Link>
    </div>
  );
};

export default NavBar;
