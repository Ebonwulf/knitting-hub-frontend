import './FullPattern.scss';
import Button from '../Button/Button';

const FullPattern = ({
  toggleDetails,
  patternName,
  patternType,
  patternDifficulty,
  patternDescription,
  woolType,
  needleSize,
  pattern,
}) => {
  return (
    <section className='description'>
      <div className='description__div'>
        <h2 className='description__title'>{patternName}</h2>
        <h3>{patternType}</h3>
        <h4>{patternDifficulty}</h4>
        <h4>{woolType}</h4>
        <h4>{needleSize}</h4>
        <h5>{patternDescription}</h5>
        <p>{pattern}</p>
        <Button onClickType={toggleDetails} buttonText='Back' />
      </div>
    </section>
  );
};

export default FullPattern;
