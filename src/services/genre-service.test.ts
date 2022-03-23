import { mockValidApiResponse } from '../utils/mockTests';
import * as service from './genres-service';

beforeEach(() => {
  jest
    .spyOn(window.localStorage.__proto__, 'getItem')
    .mockImplementation(() => '123');
});

test('should successfully get fetchAllGenres', async () => {
  const mockAPIResponse = { genres: ['genre1', 'genre2'] };
  const mockSuccessResponse = ['genre1', 'genre2'];

  mockValidApiResponse(mockAPIResponse);

  const response = await service.fetchAllGenres();

  expect(response).toEqual(mockSuccessResponse);

  const fetchParams = {
    headers: {
      Authorization: 'Bearer 123',
    },
  };
  expect(window.fetch).toHaveBeenCalledWith(
    expect.stringContaining('recommendations/available-genre-seeds'),
    fetchParams
  );
});
