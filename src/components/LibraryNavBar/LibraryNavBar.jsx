import '../NavBar/NavBar.scss';
import { Link } from 'react-router-dom';

const LibraryNavBar = ({
  refreshPage,
  libraryName,
  addPage,
  homePath,
  libraryPath,
  addPath,
}) => {
  return (
    <div className='nav-bar'>
      <Link className='nav-bar__item' to={homePath} onClick={refreshPage}>
        Home Page
      </Link>
      <Link className='nav-bar__item' to={libraryPath} onClick={refreshPage}>
        {libraryName}
      </Link>
      <Link className='nav-bar__item' to={addPath} onClick={refreshPage}>
        {addPage}
      </Link>
    </div>
  );
};

export default LibraryNavBar;
