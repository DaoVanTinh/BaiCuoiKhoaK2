const BASE_URL =
  "https://mindx-mockup-server.vercel.app/api/resources/genre?apiKey=68501d268b20679b19d90028";

export async function fetchGenre() {
  const res = await fetch(BASE_URL);
  const json = await res.json();
  return Object.values(json.data.data[0]).filter(
    (genre) => typeof genre === "object"
  );
}
