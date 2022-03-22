export const getToken = async (clientId: string, clientSecret: string) => {
  const token = 'Basic ' + btoa(clientId + ':' + clientSecret);
  const getTokenUrl = 'https://accounts.spotify.com/api/token';
  const myHeaders = new Headers();
  myHeaders.append('Authorization', token);
  myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
  const urlencoded = new URLSearchParams();
  urlencoded.append('grant_type', 'client_credentials');
  const requestOptions: any = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow',
  };
  const validToken = await fetch(getTokenUrl, requestOptions).then((response) =>
    response.json()
  );
  sessionStorage.setItem('AuthToken', validToken.access_token);
  return validToken.access_token;
};
