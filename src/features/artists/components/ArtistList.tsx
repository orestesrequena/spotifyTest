import { Artist } from '../../../model/Artist';
import './ArtistList.css';

interface Props {
  artists: Artist[];
  handleArtist: (artist: Artist) => void;
}

export const ArtistList = (props: Props) => {
  const { artists, handleArtist } = props;
  const handleClick = (artist: Artist) => {
    handleArtist(artist);
  };
  return (
    <div className="artist-list">
      {artists.map((artist, key) => (
        <li key={key}>
          <button
            type="button"
            title={artist.name}
            onClick={() => handleClick(artist)}
          >
            {artist.name}
          </button>
        </li>
      ))}
    </div>
  );
};
