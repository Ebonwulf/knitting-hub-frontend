import './SearchBar.scss';

const Search = ({
  toggleSearch,
  searchBoxTitle,
  libraryName,
  searchTextHandler,
  searchResultCount,
  itemName,
}) => {
  const searchResults =
    searchResultCount === 1
      ? searchResultCount + ' found'
      : searchResultCount > 1
      ? searchResultCount + ' found'
      : 'No match found!';
  return (
    <div className='search-bar'>
      <form className='search-bar__form'>
        <label htmlFor='' className='search-bar__label'>
          {searchBoxTitle}
        </label>
        <input
          type='text'
          className='search-bar__input'
          placeholder={itemName}
          onChange={searchTextHandler}
        />

        <div className='search-bar__back-button' onClick={toggleSearch}>
          Back
        </div>
        <p className='library-count'>
          Number of {libraryName}'s : {searchResults}
        </p>
      </form>
    </div>
  );
};

export default Search;
