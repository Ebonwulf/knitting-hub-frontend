import './Pattern.scss';
import { Link } from 'react-router-dom';

const Pattern = (props) => {
  const {
    patternName,
    patternType,
    patternDifficulty,
    woolType,
    needleSize,
    patternDescription,
  } = props.pattern;

  return (
    <>
      <div className='pattern'>
        <h3>{patternName}</h3>
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
