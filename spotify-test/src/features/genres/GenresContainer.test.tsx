import { fireEvent, render, screen } from '@testing-library/react';
import { GenresContainer } from './GenresContainer';
import { act } from 'react-dom/test-utils';
import { mockValidApiResponse } from '../../utils/mockTests';

test('should render the GenresContainer component', async () => {
  const handleGenreFn = jest.fn();
  const value = 'rock';
  const mockAPIResponse = { genres: ['rock', 'pop'] };

  mockValidApiResponse(mockAPIResponse);

  render(<GenresContainer handleGenre={handleGenreFn} />);

  screen.getByText(/choose a music genre:/i);
  const selectGenre = screen.getByRole('combobox', {
    name: /choose a music genre:/i,
  });
  // eslint-disable-next-line testing-library/no-unnecessary-act
  await act(async () => {
    fireEvent.change(selectGenre, { target: { value } });
  });

  expect(handleGenreFn).toBeCalledTimes(1);
});
