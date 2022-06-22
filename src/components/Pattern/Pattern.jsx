import './Pattern.scss';
import { Link } from 'react-router-dom';

const Pattern = ({
  patternId,
  patternName,
  patternType,
  patternDifficulty,
  woolType,
  needleSize,
  patternDescription,
}) => {
  const handleDelete = () => {
    fetch(
      'https://wolfs-knitting-hub-5h356xxfoq-nw.a.run.app/knitting-hub-frontend/pattern/' +
        patternId,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err));
    console.log('deleted');
  };

  return (
    <>
      <div className='pattern'>
        <div className='pattern__btn-div'>
          <h3>{patternName}</h3>
          <button onClick={handleDelete} className='pattern__btn'>
            Del
          </button>
        </div>
        <h4>Pattern type: {patternType}</h4>
        <h5>Difficulty: {patternDifficulty}</h5>
        <h5>Wool type: {woolType}</h5>
        <h6>Needle/hook size: {needleSize}</h6>
        <p>Description: {patternDescription}</p>
        <Link to='/pattern-page'>Go to pattern</Link>
      </div>
    </>
  );
};

export default Pattern;
