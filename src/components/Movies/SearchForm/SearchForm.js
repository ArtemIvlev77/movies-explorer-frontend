import React from 'react';
import './SearchForm.css';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <div className='search'>
      <form className='search__form'>
        <fieldset className='search__field'>
          <input className='search__input' type='text' placeholder='Фильм' required/>
          <button className='search__submit' type='submit' value='' />
        </fieldset>
      </form>
      <FilterCheckbox />
    </div>
  );
}

export default SearchForm;