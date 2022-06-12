import { Link } from 'react-router-dom';
import '../NavBar/NavBar.scss';

const PatternNavBar = () => {
  return (
    <div className='nav-bar'>
      <Link className='nav-bar__item' to='/'>
        Home
      </Link>
      <Link className='nav-bar__item' to='/patterns'>
        Patterns
      </Link>
      <Link className='nav-bar__item' to='/new-pattern'>
        Add Pattern
      </Link>
    </div>
  );
};

export default PatternNavBar;
