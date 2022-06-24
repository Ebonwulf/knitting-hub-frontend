import './Home.scss';

const Home = () => {
  return (
    <>
      <h1>
        Welcome to Wolf's <br></br>
        Knitting hub and <br></br>
        Book library!
      </h1>
      <div className='home'>
        <div className='home__knitting-page'>Knitting library</div>
        <div className='home__book-page'>Warhammer 30K book series</div>
      </div>
    </>
  );
};

export default Home;
