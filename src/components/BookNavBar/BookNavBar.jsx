import { Link } from 'react-router-dom';
import '../NavBar/NavBar.scss';

const BookNavBar = () => {
  return (
    <div className='nav-bar'>
      <Link className='nav-bar__item' to='/book-hub'>
        Books Home
      </Link>

      <Link className='nav-bar__item' to='/books'>
        Books
      </Link>

      <Link className='nav-bar__item' to='/new-book'>
        Add Book
      </Link>
    </div>
  );
};

export default BookNavBar;
