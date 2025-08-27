import { NextRequest, NextResponse } from 'next/server';

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
let access_token = process.env.SPOTIFY_ACCESS_TOKEN;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

async function fetchRecentlyPlayed(token: string) {
  const res = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
}

async function refreshAccessToken() {
  if (!refresh_token) return null;
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
    access_token = tokenData.access_token;
    return access_token;
  }
  return null;
}

export async function GET(request: NextRequest) {
  if (!access_token) {
    return NextResponse.json({ error: 'Access token not set. Authenticate first.' }, { status: 401 });
  }

  let res = await fetchRecentlyPlayed(access_token);

  // If unauthorized, try to refresh token and retry
  if (res.status === 401 && refresh_token) {
    const newToken = await refreshAccessToken();
    if (newToken) {
      res = await fetchRecentlyPlayed(newToken);
    } else {
      return NextResponse.json({ error: 'Failed to refresh access token.' }, { status: 401 });
    }
  }

  if (!res.ok) {
    const text = await res.text();
    return NextResponse.json({ error: 'Failed to fetch recently played song.', status: res.status, body: text }, { status: res.status });
  }

  let data = null;
  try {
    data = await res.json();
  } catch (e) {
    return NextResponse.json({ error: 'No song found or invalid response.' }, { status: 204 });
  }
  return NextResponse.json(data);
}
