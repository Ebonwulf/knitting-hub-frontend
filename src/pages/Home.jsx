import './Home.scss';
import { Link } from 'react-router-dom';
import knittingHeading from '../assets/images/knitting-heading.png';

const Home = ({ refreshPage }) => {
  return (
    <>
      <div className='home'>
        <Link
          className='home__page home__knit-page'
          to='/patterns'
          onClick={refreshPage}
        >
          <img src={knittingHeading} alt='Knitting' /> library
        </Link>
        <Link
          className='home__page home__book-page'
          to='/books'
          onClick={refreshPage}
        >
          Warhammer 30K book series
        </Link>
      </div>
    </>
  );
};

export default Home;
