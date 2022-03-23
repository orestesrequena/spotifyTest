export function mockValidApiResponse(mockResponse: unknown) {
  const mockJsonPromise = Promise.resolve(mockResponse);
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise,
  }) as Promise<Response>;
  jest.spyOn(window, 'fetch').mockImplementation(() => mockFetchPromise);
}
