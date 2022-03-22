import React from 'react';
import { Pagination } from '../../components/pagination/Pagination';
import { Artist } from '../../model/Artist';
import { fetchArtistsByGenre } from '../../services/artists-service';
import { ArtistDetails } from './components/ArtistDetails';
import { ArtistList } from './components/ArtistList';

import './ArtistContainer.css';

interface Props {
  genre: string;
}

const limit = 20;
const ARTIST_BY_DEFAULT = {
  id: '',
  name: '',
  image: '',
  spotifyLink: '',
  popularity: 0,
  followers: 0,
};

export const ArtistContainer = (props: Props) => {
  const { genre } = props;
  const [artists, setArtists] = React.useState([ARTIST_BY_DEFAULT]);
  const [artist, setArtist] = React.useState(ARTIST_BY_DEFAULT);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [offset, setOffset] = React.useState(0);
  const [total, setTotal] = React.useState(0);
  const [error, setError] = React.useState('');

  const handlePageChange = (page: number) => {
    const pageToOffset = (page > 0 ? page - 1 : 0) * limit;
    setOffset(pageToOffset);
    setCurrentPage(page);
  };

  React.useEffect(() => {
    fetchArtistsByGenre(genre, offset, limit).then((data) => {
      if (data) {
        const { artists, count } = data;
        if (artists) {
          setArtists(artists);
          setArtist(ARTIST_BY_DEFAULT);
          setError('');
        } else {
          setError("Please,try again.There's been an error");
        }
        //set limit to 500 to avoid errors.
        if (count) count > 500 ? setTotal(500) : setTotal(count);
      }
    });
  }, [genre, offset]);
  const handleArtist = (id: Artist) => {
    setArtist(id);
  };

  return (
    <>
      {error ? (
        <p>{error}</p>
      ) : (
        <main>
          <nav>
            <Pagination
              currentPage={currentPage}
              totalCount={total}
              pageSize={limit}
              onPageChange={handlePageChange}
            />
            <ArtistList artists={artists} handleArtist={handleArtist} />
          </nav>
          {artist !== ARTIST_BY_DEFAULT && <ArtistDetails artist={artist} />}
        </main>
      )}
    </>
  );
};
