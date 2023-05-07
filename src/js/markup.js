export function createMarkupOneCard(countries) {
  return countries
    .map(
      ({ name, capital, population, flags, languages }) =>
        `<li class="countriesItem">
        <img src="${flags.svg}" alt="${name.official}" class="image" height="20px">
        <nobr class="name"">${name.official}</nobr>
        <p class="capital">Capital: ${capital}</p>
        <p class="population">Population: ${population}</p>
        <p class="languages">Languages: ${languages}</p>
        </li>`
    )
    .join('');
}

export function createMarkupNormalCard(countries) {
  return countries
    .map(
      ({ name, flags }) =>
        `<li class="countriesItem">
        <img src="${flags.svg}" alt="${name.official}" class="image" height="10px">
        <nobr class="name">${name.official}</nobr>
        </li>`
    )
    .join('');
}
