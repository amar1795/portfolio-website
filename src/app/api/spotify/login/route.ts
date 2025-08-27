import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

const client_id = process.env.SPOTIFY_CLIENT_ID;
const redirect_uri = process.env.SPOTIFY_REDIRECT_URI || 'http://localhost:3000/api/spotify/callback';
const stateKey = 'spotify_auth_state';

function generateRandomString(length: number) {
  return crypto.randomBytes(length).toString('hex');
}

export async function GET(request: NextRequest) {
  const state = generateRandomString(16);
  const scope = 'user-read-private user-read-email user-read-currently-playing user-read-recently-played';

  // Set state in cookies for CSRF protection
  const response = NextResponse.redirect(
    `https://accounts.spotify.com/authorize?` +
      new URLSearchParams({
        response_type: 'code',
        client_id: client_id!,
        scope,
        redirect_uri,
        state,
      }).toString()
  );
  response.cookies.set(stateKey, state, { path: '/', httpOnly: true });
  return response;
}
