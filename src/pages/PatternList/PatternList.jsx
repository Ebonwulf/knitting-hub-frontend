import './PatternList.scss';
import Pattern from '../../components/Pattern/Pattern';
import SearchBar from '../../components/SearchBar/SearchBar';
import knittingLibrary from '../../assets/images/knitting-library.png';
import Button from '../../components/Button/Button';

const PatternList = ({
  filteredPatterns,
  toggleSearch,
  showSearch,
  searchTextHandler,
  searchResultCount,
  refreshPage,
}) => {
  return (
    <div className='pattern-list-page'>
      <div className='pattern-list'>
        {showSearch && (
          <SearchBar
            toggleSearch={toggleSearch}
            searchBoxTitle={'Search for patterns'}
            libraryName={'Pattern'}
            searchTextHandler={searchTextHandler}
            searchResultCount={searchResultCount}
            itemName='Search by pattern name'
          />
        )}
        <img
          className='pattern-list__img'
          src={knittingLibrary}
          alt='knitting'
        />
        <h2 className='pattern-list__heading'>Library</h2>
        <Button onClickType={toggleSearch} buttonText='Pattern Finder' />
        <Button onClickType={refreshPage} buttonText='Refresh Page' />
      </div>
      <div className='pattern-list__container'>
        {filteredPatterns &&
          filteredPatterns.map((pattern) => (
            <Pattern
              key={pattern.patternName}
              patternName={pattern.patternName}
              patternId={pattern.patternId}
              patternType={pattern.patternType}
              patternDifficulty={pattern.patternDifficulty}
              woolType={pattern.woolType}
              needleSize={pattern.needleSize}
              pattern={pattern.pattern}
            />
          ))}
      </div>
    </div>
  );
};

export default PatternList;
