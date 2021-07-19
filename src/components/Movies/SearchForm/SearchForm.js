import React from 'react';
import './SearchForm.css';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({
  onSubmit,
  searchValue,
  setSearchValue,
  inputError,
  setInputError,
  isShortFilms,
  setIsShortFilms,
}) {
  return (
    <div className='search'>
      <form
        className='search__form'
        noValidate
        autoComplete='off'
        onSubmit={onSubmit}
      >
        <fieldset className='search__field'>
          <input
            className='search__input'
            type='text'
            placeholder='Фильм'
            required
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            onClick={() => setInputError('')}
          />
          <button className='search__submit' type='submit' value='' />
        </fieldset>
        <span className='search__input-error'>{inputError}</span>
      </form>
      <FilterCheckbox
        isShortFilms={isShortFilms}
        setIsShortFilms={setIsShortFilms}
      />
    </div>
  );
}

export default SearchForm;