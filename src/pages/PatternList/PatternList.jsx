import './PatternList.scss';
import Pattern from '../../components/Pattern/Pattern';
import SearchBar from '../../components/SearchBar/SearchBar';
import knittingLibrary from '../../assets/images/knitting-library.png';

const PatternList = ({
  filteredPatterns,
  toggleSearch,
  needleSizeSearch,
  handleNeedleSearch,
  woolTypeSearch,
  handleWoolTypeSearch,
  difficultySearch,
  handleDifficultySearch,
  showSearch,
}) => {
  return (
    <>
      <div className='pattern-list'>
        {showSearch && <SearchBar toggleSearch={toggleSearch} />}
        <img
          className='pattern-list__img'
          src={knittingLibrary}
          alt='knitting'
        />
        <h2 className='pattern-list__heading'>Library</h2>
        <div className='search-bar__button' onClick={toggleSearch}>
          Pattern Finder
        </div>
      </div>
      <div className='pattern-list__container'>
        {filteredPatterns &&
          filteredPatterns.map((pattern) => (
            <Pattern
              key={pattern.patternName}
              patternName={pattern.patternName}
              patterId={pattern.patterId}
              patternType={pattern.patternType}
              patternDifficulty={pattern.patternDifficulty}
              woolType={pattern.woolType}
              needleSize={pattern.needleSize}
            />
          ))}
      </div>
    </>
  );
};

export default PatternList;
