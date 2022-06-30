import './Pattern.scss';
import { useState } from 'react';
import UpdatePattern from '../UpdatePattern/UpdatePattern';
import Button from '../../components/Button/Button';
import FullPattern from '../FullPattern/FullPattern';

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
  const [showDetails, setShowDetails] = useState(false);
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

  const toggleDetails = () => {
    console.log(showDetails);
    setShowDetails(!showDetails);
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
          <div className='pattern__link' onClick={toggleDetails}>
            Go to pattern
            {showDetails && (
              <FullPattern
                toggleDetails={toggleDetails}
                pattern={pattern}
                patternDescription={patternDescription}
                patternName={patternName}
                patternDifficulty={patternDifficulty}
                patternType={patternType}
                woolType={woolType}
                needleSize={needleSize}
              />
            )}
          </div>
          <Button onClickType={handleDelete} buttonText='Delete' />
          <Button onClickType={toggleUpdateBox} buttonText='Update' />
        </div>
      </div>
    </>
  );
};

export default Pattern;
