import { NextRequest, NextResponse } from 'next/server';

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

export async function GET(request: NextRequest) {
  if (!refresh_token) {
    return NextResponse.json({ error: 'No refresh token set.' }, { status: 401 });
  }

  const body = new URLSearchParams({
    grant_type: 'refresh_token',
    refresh_token,
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
    return NextResponse.json({ access_token: tokenData.access_token });
  } else {
    return NextResponse.json({ error: 'Failed to refresh access token.', details: tokenData }, { status: 400 });
  }
}
