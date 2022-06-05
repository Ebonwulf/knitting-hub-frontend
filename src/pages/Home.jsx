import './Home.scss';
import knitting from '../assets/images/knitting.png';

const Home = () => {
  return (
    <div className='home'>
      <h1>
        Welcome to Wolf's <br></br>
        <img
          className='home__image'
          src={knitting}
          alt='knitting'
        /> <br></br> hub!
      </h1>
    </div>
  );
};

export default Home;
