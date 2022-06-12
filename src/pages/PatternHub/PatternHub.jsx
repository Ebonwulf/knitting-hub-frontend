import './PatternHub.scss';
import knitting from '../../assets/images/knitting-heading.png';

const PatternHub = () => {
  return (
    <div className='pattern-hub'>
      <h1>
        Welcome to Wolf's <br></br>
        <img className='pattern-hub__image' src={knitting} alt='knitting' />
        <br></br> hub!
      </h1>
    </div>
  );
};

export default PatternHub;
