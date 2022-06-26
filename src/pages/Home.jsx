import './Home.scss';
import { Link } from 'react-router-dom';

const Home = ({ refreshPage }) => {
  return (
    <>
      <div className='home'>
        <Link
          className='home__page home__knit-page'
          to='pattern-hub'
          onClick={refreshPage}
        >
          Knitting library
        </Link>
        <Link
          className='home__page home__book-page'
          to='/book-hub'
          onClick={refreshPage}
        >
          Warhammer 30K book series
        </Link>
      </div>
    </>
  );
};

export default Home;
