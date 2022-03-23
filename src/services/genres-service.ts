import defaultConfig from '../config.json';

const { baseUrl } = defaultConfig;
export const fetchAllGenres = async () => {
  const myToken = sessionStorage.getItem('AuthToken');
  const headers: HeadersInit = {
    Authorization: `Bearer ${myToken}`,
  };
  try {
    const response = await fetch(
      `${baseUrl}recommendations/available-genre-seeds`,
      { headers }
    );
    const data = await response.json();
    const genres = data.genres;
    return genres;
  } catch (e) {
    return { error: e };
  }
};
