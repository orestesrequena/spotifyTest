import React from 'react';
import { fetchAllGenres } from '../../services/genres-service';

interface Props {
  handleGenre: (genre: string) => void;
}
export const GenresContainer = (props: Props) => {
  const { handleGenre } = props;
  const [genres, setGenres] = React.useState([]);
  const [selectValue, setSelectValue] = React.useState('');

  React.useEffect(() => {
    fetchAllGenres().then((genres) => setGenres(genres));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
    handleGenre(e.target.value);
  };

  return (
    <>
      <label htmlFor="genres-names">Choose a music genre:</label>
      <select
        name="genres-names"
        id="genres-names"
        onChange={handleChange}
        value={selectValue}
      >
        {genres.map((genre) => (
          <option key={genre}>{genre}</option>
        ))}
      </select>
    </>
  );
};
