import './SearchBar.scss';

const Search = ({
  toggleSearch,
  searchBoxTitle,
  displayCount,
  libraryName,
}) => {
  return (
    <div className='search-bar'>
      <form className='search-bar__form'>
        <label htmlFor='' className='search-bar__label'>
          {searchBoxTitle}
        </label>
        <input type='text' className='search-bar__input' />

        <div className='search-bar__back-button' onClick={toggleSearch}>
          Back
        </div>
        <p className='library-count'>
          Number of {libraryName}'s in search: {displayCount}
        </p>
      </form>
    </div>
  );
};

export default Search;
