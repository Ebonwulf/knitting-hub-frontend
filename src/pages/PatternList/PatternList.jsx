import './PatternList.scss';
import Pattern from '../../components/Pattern/Pattern';

const PatternList = (props) => {
  return (
    <>
      <h2 className='heading'>Knitting Library</h2>
      <div className='container'>
        {props.patterns &&
          props.patterns.map((pattern) => (
            <Pattern key={pattern.patternId} pattern={pattern} />
          ))}
      </div>
    </>
  );
};

export default PatternList;
