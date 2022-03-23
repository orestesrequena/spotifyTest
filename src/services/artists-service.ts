import defaultConfig from '../config.json';
import { Artist } from '../model/Artist';
import { toArtists } from './to-entity-conversion-service';

const { baseUrl } = defaultConfig;
export const fetchArtistsByGenre = async (
  genre: string,
  offset: number,
  limit: number
) => {
  const myToken = sessionStorage.getItem('AuthToken');
  const headers: HeadersInit = {
    Authorization: `Bearer ${myToken}`,
  };
  try {
    const response = await fetch(
      `${baseUrl}search?type=artist&q=genre:${genre}&offset=${offset}&limit=${limit}`,
      { headers }
    );
    const data = await response.json();
    const artists: Artist[] = toArtists(data.artists.items);
    const count: number = data.artists.total;
    return { artists, count };
  } catch (e) {
    return { error: e };
  }
};
