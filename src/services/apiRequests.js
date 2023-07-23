import {apiConfig} from './apiConfig';

// Function to fetch access token
export async function getAccessToken() {
  try {
    const response = await fetch('https://connect.deezer.com/oauth/access_token.php', {
      method: 'POST',
      body: `app_id=${apiConfig.appId}&secret=${apiConfig.appKey}&output=json`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const data = await response.json();
    console.log(data)
    return data.access_token;
  } catch (error) {
    console.error('Error fetching access token:', error);
    return null;
  }
}

// Function to make API requests using the access token
export async function makeApiRequest(endpoint) {
  const accessToken = await getAccessToken();

  if (!accessToken) {
    console.error('Failed to get access token. Cannot make API request.');
    return null;
  }

  try {
    const response = await fetch(`${apiConfig.apiUrl}/${endpoint}?access_token=${accessToken}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error making API request:', error);
    return null;
  }
}
