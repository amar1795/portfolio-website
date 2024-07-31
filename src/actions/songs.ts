
const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const redirectUri = 'http://localhost:3000';

const generateRandomString = (length) => {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const values = crypto.getRandomValues(new Uint8Array(length));
    return values.reduce((acc, x) => acc + possible[x % possible.length], "");
  }
  
  const sha256 = async (plain) => {
    const encoder = new TextEncoder()
    const data = encoder.encode(plain)
    return window.crypto.subtle.digest('SHA-256', data)
  }

  const base64encode = (input) => {
    return btoa(String.fromCharCode(...new Uint8Array(input)))
      .replace(/=/g, '')
      .replace(/\+/g, '-')
      .replace(/\//g, '_');
  }
  
//   const codeVerifier  = generateRandomString(64);
//   const hashed = await sha256(codeVerifier)
// const codeChallenge = base64encode(hashed);

const generateTestFunction = () => {
    const params =  {
        response_type: 'code',
        client_id: client_id,
        scope,
        code_challenge_method: 'S256',
        code_challenge: codeChallenge,
        redirect_uri: redirectUri,
      }
      
      authUrl.search = new URLSearchParams(params).toString();
      window.location.href = authUrl.toString();
}

  const scope = 'user-read-private user-read-email';
  const authUrl = new URL("https://accounts.spotify.com/authorize")


export async function getToken() {

    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      body: new URLSearchParams({
        grant_type: 'client_credentials'
    
      }),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64')),
      },
    });
    // console.log("this is the response ",response)
    return await response.json();
  }

  export async function RefreshToken(oldToken:string) {
    
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: oldToken,
      }),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64')),
      },
    });
    const data = await response.json();
    console.log("this is the refreshed Token ",data)
    return data;
  }

 export async function getProfile(accessToken) {
 
  console.log("this is the access token in getprofile function ",accessToken)
    const response = await fetch('https://api.spotify.com/v1/me', {
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    });

    const data = await response.json();
    console.log("this is the get profile response ",data)
  }

  export async function getRecentPlayingTrack( accessToken) {
    // let accessToken = "BQD8-X9V5UnJ6SUL1h97JHS6xvQhUbWpbhxjWVBKz7qj6KjIq6aH8vM0iWnXUv7BaV4GDRF9dNyWnBQ0pGQ8SfFz7-irvDll-zy3Us0L6UomC5RoYZI";
  
    const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    });
    const data = await response.json();
    console.log("this is the recent playing track  ",data)
  }
  

  export async function RefreshTokens( accessToken) {
    // let accessToken = "BQD8-X9V5UnJ6SUL1h97JHS6xvQhUbWpbhxjWVBKz7qj6KjIq6aH8vM0iWnXUv7BaV4GDRF9dNyWnBQ0pGQ8SfFz7-irvDll-zy3Us0L6UomC5RoYZI";
  
    const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    });
    const data = await response.json();
    console.log("this is the recent playing track  ",data)
  }
  

