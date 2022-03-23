import { Artist } from '../model/Artist';

export const toArtists = (artists: any[]): Artist[] => {
  return artists.map((artist: any) => toArtist(artist));
};

export const toArtist = (data: any): Artist => ({
  id: data.id,
  name: data.name,
  image: data.images[1].url,
  spotifyLink: data.external_urls.spotify,
  popularity: data.popularity,
  followers: data.followers.total,
});
