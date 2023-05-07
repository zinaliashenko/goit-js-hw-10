const BASE_URL = 'https://restcountries.com';
const filters = 'name,capital,population,flags,languages';

export async function fetchCountries(query) {
  try {
    const result = await fetch(
      `${BASE_URL}/v3.1/name/${query}?fullText=true?fields=${filters}`
    );

    if (!result.ok) {
      throw new Error(error);
    }
    return result.json();
  } catch (error) {
    console.log(error.message);
  }
}
