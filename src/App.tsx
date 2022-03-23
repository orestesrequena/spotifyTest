import React from 'react';
import { ArtistContainer } from './features/artists/ArtistContainer';
import { GenresContainer } from './features/genres/GenresContainer';
import { LoginContainer } from './features/login/LoginContainer';

import './App.css';

export const App = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState('');
  const [genreSelected, setGenreSelected] = React.useState('');

  const handleGenre = (genreSelected: string) => {
    setGenreSelected(genreSelected);
  };

  const handleAuthenticated = (authenticated: string) => {
    setIsAuthenticated(authenticated);
  };
  return (
    <div className="App">
      {!isAuthenticated ? (
        <LoginContainer handleAuthenticated={handleAuthenticated} />
      ) : (
        <>
          <header className="App-header">
            <GenresContainer handleGenre={handleGenre} />
          </header>
          <div className="container">
            {genreSelected && <ArtistContainer genre={genreSelected} />}
          </div>
        </>
      )}
    </div>
  );
};

export default App;
