import './Pattern.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import UpdatePattern from '../UpdatePattern/UpdatePattern';
import Button from '../../components/Button/Button';

const Pattern = ({
  patternId,
  patternName,
  patternType,
  patternDifficulty,
  patternDescription,
  woolType,
  needleSize,
  pattern,
}) => {
  const [showUpdateBox, setShowUpdateBox] = useState(false);
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

  const toggleUpdateBox = () => {
    setShowUpdateBox(!showUpdateBox);
  };

  return (
    <>
      <div className='pattern'>
        {showUpdateBox && (
          <UpdatePattern
            patternId={patternId}
            pattern={pattern}
            patternDescription={patternDescription}
            patternName={patternName}
            patternDifficulty={patternDifficulty}
            patternType={patternType}
            woolType={woolType}
            needleSize={needleSize}
            toggleUpdateBox={toggleUpdateBox}
          />
        )}
        <h3>{patternName}</h3>
        <h4>Pattern type: {patternType}</h4>
        <h5>Difficulty: {patternDifficulty}</h5>
        <h5>Wool type: {woolType}</h5>
        <h6>Needle/hook size: {needleSize}</h6>
        <p>Description: {patternDescription}</p>
        <div className='pattern__link-div'>
          <Link to='/pattern-page'>Go to pattern</Link>
          <Button onClickType={handleDelete} buttonText='Del' />
          <Button onClickType={toggleUpdateBox} buttonText='Update' />
        </div>
      </div>
    </>
  );
};

export default Pattern;
