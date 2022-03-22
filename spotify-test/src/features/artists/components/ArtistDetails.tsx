import { Artist } from '../../../model/Artist';

interface Props {
  artist: Artist;
}

export const ArtistDetails = (props: Props) => {
  const { artist } = props;

  return (
    <section key={artist.id}>
      <div>
        <img src={artist.image} alt="" />
      </div>
      <h3>Name: {artist.name}</h3>
      <p>
        Spotify link:{' '}
        <a href={artist.spotifyLink} target="_blank" rel="noreferrer">
          {artist.spotifyLink}
        </a>
      </p>
      <p>
        Popularity: {artist.popularity}
        <br />
        Total Followers: <span>{artist.followers}</span>
      </p>
    </section>
  );
};
