import { Link } from 'react-router-dom';
import '../NavBar/NavBar.scss';

const BookNavBar = ({ refreshPage }) => {
  return (
    <div className='nav-bar'>
      <Link className='nav-bar__item' to='/' onClick={refreshPage}>
        Home Page
      </Link>
      <Link className='nav-bar__item' to='/book-hub' onClick={refreshPage}>
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
