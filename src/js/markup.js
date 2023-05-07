export function createMarkupOneCard(countries) {
  return countries
    .map(
      ({ name, capital, population, flags, languages }) =>
        `<table>
         <tr>
           <td>
             <img src="${flags.svg}" alt="${
          name.official
        }" class="image" width="30px">
           </td>
           <td>
             <h2 class="name">${name.official}</h2>
           <td/>
         </tr>
        </table>
        <p class="capital"><b>Capital:</b> ${capital}</p>
        <p class="population"><b>Population:</b> ${population} people</p>
        <p class="languages"><b>Languages:</b> ${Object.values(languages).join(
          ', '
        )}</p>
        
        </div>`
    )
    .join('');
}

export function createMarkupNormalCard(countries) {
  return countries
    .map(
      ({ name, flags }) =>
        `<table>
           <tr>
             <td>
               <img src="${flags.svg}" alt="${name.official}" class="image" width="30px">
             </td>
             <td>
               <p class="name">${name.official}</p>
             <td/>
           </tr>
         </table>`
    )
    .join('');
}
