import './PatternList.scss';
import Pattern from '../../components/Pattern/Pattern';
import { Route, Routes } from 'react-router-dom';
import PatternPage from '../PatternPage/PatternPage';

const PatternList = (props) => {
  return (
    <>
      <h2 className='heading'>Knitting Library</h2>
      <div className='container'>
        {props.patterns &&
          props.patterns.map((pattern) => (
            <Pattern key={pattern.patternName} pattern={pattern} />
          ))}
      </div>
      <Routes>
        <Route path='/pattern-page' element={<PatternPage />} />
      </Routes>
    </>
  );
};

export default PatternList;
