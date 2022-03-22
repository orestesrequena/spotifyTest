import React from 'react';
import { getToken } from '../../services/getToken';

interface Props {
  handleAuthenticated: (genre: string) => void;
}

export const LoginContainer = (props: Props) => {
  const { handleAuthenticated } = props;

  const [idValue, setIdValue] = React.useState('');
  const [secretValue, setSecretValue] = React.useState('');

  const handleChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIdValue(e.target.value);
  };
  const handleChangeSecret = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSecretValue(e.target.value);
  };
  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    getToken(idValue, secretValue).then((token) => handleAuthenticated(token));
  };

  return (
    <>
      <form autoComplete="off" onSubmit={onSubmit}>
        <label htmlFor="ClientId" title="ClientId">
          Client Id:{' '}
        </label>
        <input type="text" id="ClientId" onChange={handleChangeId} />

        <label htmlFor="ClientSecret" title="ClientSecret">
          Client Secret:{' '}
        </label>
        <input type="text" id="ClientSecret" onChange={handleChangeSecret} />

        <button type="button" title="Submit" onClick={onSubmit}>
          Submit
        </button>
      </form>
    </>
  );
};
