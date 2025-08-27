import { NextRequest, NextResponse } from 'next/server';

// TODO: Store your access token securely (e.g., in an environment variable or server-side file)
const access_token = process.env.SPOTIFY_ACCESS_TOKEN;

export async function GET(request: NextRequest) {
  if (!access_token) {
    return NextResponse.json({ error: 'Access token not set. Authenticate first.' }, { status: 401 });
  }

  const res = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (!res.ok) {
    const text = await res.text();
    return NextResponse.json({ error: 'Failed to fetch currently playing song.', status: res.status, body: text }, { status: res.status });
  }

  let data = null;
  try {
    data = await res.json();
  } catch (e) {
    return NextResponse.json({ error: 'No song currently playing or invalid response.' }, { status: 204 });
  }
  return NextResponse.json(data);
}
