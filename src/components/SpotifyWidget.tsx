import React, { useEffect, useState } from 'react';

type SongInfo = {
  name: string;
  artists: string;
  albumArt: string;
  url: string;
};

const matrixGreen = 'bg-gradient-to-br from-[#0f0] via-[#0a0] to-[#003300]';

export default function SpotifyWidget() {
  const [song, setSong] = useState<SongInfo | null>(null);
  const [lastSong, setLastSong] = useState<SongInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSongs() {
      setLoading(true);
      // Fetch currently playing
      const res = await fetch('/api/spotify/currently-playing');
      const data = await res.json();
      if (data && data.item) {
        setSong({
          name: data.item.name,
          artists: data.item.artists.map((a: any) => a.name).join(', '),
          albumArt: data.item.album.images[0]?.url,
          url: data.item.external_urls.spotify,
        });
        setLoading(false);
        return;
      }
      // If not playing, fetch recently played
      const lastRes = await fetch('/api/spotify/recently-played');
      const lastData = await lastRes.json();
      if (lastData && lastData.items && lastData.items.length > 0) {
        const track = lastData.items[0].track;
        setLastSong({
          name: track.name,
          artists: track.artists.map((a: any) => a.name).join(', '),
          albumArt: track.album.images[0]?.url,
          url: track.external_urls.spotify,
        });
      }
      setLoading(false);
    }
    fetchSongs();
  }, []);

  return (
    <div className={`rounded-xl shadow-lg p-4 w-full max-w-xs mx-auto ${matrixGreen} text-[#0f0] border border-[#0f0]`}>
      <h3 className="text-lg font-bold mb-2 text-[#0f0] text-center">Spotify Now</h3>
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : song ? (
        <a href={song.url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
          <img src={song.albumArt} alt={song.name} className="rounded-lg w-24 h-24 mb-2 border border-[#0f0]" />
          <div className="font-semibold text-[#0f0]">{song.name}</div>
          <div className="text-xs text-[#0f0]">{song.artists}</div>
          <div className="mt-2 text-xs text-[#0f0]">Currently Playing</div>
        </a>
      ) : lastSong ? (
        <a href={lastSong.url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
          <img src={lastSong.albumArt} alt={lastSong.name} className="rounded-lg w-24 h-24 mb-2 border border-[#0f0]" />
          <div className="font-semibold text-[#0f0]">{lastSong.name}</div>
          <div className="text-xs text-[#0f0]">{lastSong.artists}</div>
          <div className="mt-2 text-xs text-[#0f0]">Last Played</div>
        </a>
      ) : (
        <div className="text-center text-[#0f0]">No song info available.</div>
      )}
    </div>
  );
}
