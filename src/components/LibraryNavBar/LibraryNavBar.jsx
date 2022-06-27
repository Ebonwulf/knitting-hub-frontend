import '../NavBar/NavBar.scss';
import { Link } from 'react-router-dom';

const LibraryNavBar = ({
  refreshPage,
  hubName,
  libraryName,
  addPage,
  homePath,
  hubPath,
  libraryPath,
  addPath,
}) => {
  return (
    <div className='nav-bar'>
      <Link className='nav-bar__item' to={homePath} onClick={refreshPage}>
        Home Page
      </Link>
      <Link className='nav-bar__item' to={hubPath} onClick={refreshPage}>
        {hubName}
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
