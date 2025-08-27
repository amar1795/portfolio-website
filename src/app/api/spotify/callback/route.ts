import { NextRequest, NextResponse } from 'next/server';

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const redirect_uri = process.env.SPOTIFY_REDIRECT_URI || 'http://localhost:3000/api/spotify/callback';
const stateKey = 'spotify_auth_state';

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');
  const storedState = request.cookies.get(stateKey)?.value;

  if (!state || state !== storedState) {
    return NextResponse.redirect('http://localhost:3000/?error=state_mismatch');
  }

  // Exchange code for access token
  const body = new URLSearchParams({
    code: code!,
    redirect_uri,
    grant_type: 'authorization_code',
  });

  const authHeader = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

  const tokenRes = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${authHeader}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body,
  });

  const tokenData = await tokenRes.json();

  if (tokenData.access_token) {
    // Optionally, set tokens in cookies or redirect with tokens
    return NextResponse.redirect(`http://localhost:3000/?access_token=${tokenData.access_token}&refresh_token=${tokenData.refresh_token}`);
  } else {
    return NextResponse.redirect('http://localhost:3000/?error=invalid_token');
  }
}
