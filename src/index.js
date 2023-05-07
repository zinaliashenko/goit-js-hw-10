import './css/styles.css';

// import { debounce } from 'debounce';

// const DEBOUNCE_DELAY = debounce(onTextInput, 300);

import { Notify } from 'notiflix';
import { fetchCountries } from './js/fetchCountries';
import { createMarkupOneCard, createMarkupNormalCard } from './js/markup';

const textInputRef = document.querySelector('input#search-box');
const countryListRef = document.querySelector('.country-list');

textInputRef.addEventListener('input', onTextInput);
// textInputRef.addEventListener('input', DEBOUNCE_DELAY);

async function onTextInput(event) {
  const query = event.currentTarget.value.toLowerCase().trim();

  try {
    const countries = await fetchCountries(query);
    const {} = countries;
    console.log('result:', countries);

    if (countries.length === 1) {
      Notify.success(`We found ${countries.length} countries`);
      countryListRef.innerHTML = createMarkupOneCard(countries);
      return;
    }

    if (countries.length > 1 && countries.length <= 10) {
      Notify.success(`We found ${countries.length} countries`);
      countryListRef.innerHTML = createMarkupNormalCard(countries);
      return;
    }

    if (countries.length > 10) {
      Notify.info('Too many matches found. Please enter a more specific name.');
      countryListRef.innerHTML = '';
      return;
    }
  } catch (error) {
    console.log(error.message);
    Notify.failure('Oops, there is no country with that name');
  }
}
