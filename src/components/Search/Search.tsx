import { ChangeEvent, useState } from 'react';
import './Search.scss';

function Search() {
  const [searchValue, setSearchValue] = useState('');

  const handleInput = (evt: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(evt.target.value);
  };

  const onClickClear = () => {
    setSearchValue('');
  };
  return (
    <div className="search">
      <input
        onChange={handleInput}
        type="text"
        className="search-input"
        placeholder="Поиск..."
        value={searchValue}
      />
      <svg className="search__icon" width="24" height="24">
        <use xlinkHref="img/sprite.svg#search-icon"></use>
      </svg>
      <svg
        className={`search__close-icon ${searchValue.length > 0 && 'search__close-icon--visible'}`}
        onClick={onClickClear}
        width="24"
        height="24">
        <use xlinkHref="img/sprite.svg#close-icon"></use>
      </svg>
    </div>
  );
}

export default Search;
