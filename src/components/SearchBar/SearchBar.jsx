import './SearchBar.scss';

const SearchBar = ({
  toggleSearch,
  needleSizeSearch,
  handleNeedleSearch,
  woolTypeSearch,
  handleWoolTypeSearch,
  difficultySearch,
  handleDifficultySearch,
}) => {
  return (
    <div className='search-bar'>
      <form className='search-bar__form'>
        <label htmlFor='' className='search-bar__label'>
          Search for a pattern
        </label>
        <input type='text' className='search-bar__input' />

        <h3>Filters</h3>
        <div className='filters-checkboxes'>
          <label htmlFor='filters-checkboxes__needles'>Needle size</label>
          <input
            id='filters-checkboxes__needles'
            type='checkbox'
            checked={needleSizeSearch}
            onChange={handleNeedleSearch}
          />
          <label htmlFor='filters-checkboxes__wool'>Wool type</label>
          <input
            id='filters-checkboxes__wool'
            type='checkbox'
            checked={woolTypeSearch}
            onChange={handleWoolTypeSearch}
          />
          <label htmlFor='filters-checkboxes__difficulty'>Difficulty</label>
          <input
            id='filters-checkboxes__difficulty'
            type='checkbox'
            checked={difficultySearch}
            onChange={handleDifficultySearch}
          />
        </div>
        <div className='search-bar__back-button' onClick={toggleSearch}>
          Back
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
