import './SearchBar.scss';

const SearchBar = ({ searchTerm, searchTermHandler, toggleSearch }) => {
  return (
    <div className='search-bar'>
      <form className='search-bar__form'>
        <div className='search-bar__back-button' onClick={toggleSearch}>
          Back
          <label htmlFor='' className='search-bar__label'>
            Search for a pattern
          </label>
          <input
            type='text'
            className='search-bar__input'
            value={searchTerm}
            onChange={searchTermHandler}
          />
        </div>
        <h3>Filters</h3>
        <div className='filters-checkboxes'>
          <label htmlFor='filters-checkboxes__needles'>Needle size</label>
          <input id='filters-checkboxes__needles' type='checkbox' />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
