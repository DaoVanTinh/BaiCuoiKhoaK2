const BASE_URL =
  "https://mindx-mockup-server.vercel.app/api/resources/artist?apiKey=68501d268b20679b19d90028";

export async function fetchArtist() {
  const res = await fetch(BASE_URL);
  const json = await res.json();
  return Object.values(json.data.data[0]).filter(
    (artist) => typeof artist === "object"
  );
}

//NameArtist
export async function nameArtist() {
  const allArtists = await fetchArtist();
  const nameArtist = allArtists.map((artist) => ({
    id: artist.artistId,
    name: artist.name,
  }));
  return nameArtist;
}
