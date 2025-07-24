import { fetchGenre } from "./genreService";

const BASE_URL =
  "https://mindx-mockup-server.vercel.app/api/resources/song?apiKey=68501d268b20679b19d90028";

export async function fetchSongs() {
  const res = await fetch(BASE_URL);
  const json = await res.json();
  return Object.values(json.data.data[0]);
}

//VTNV
export async function getRandomVietnamSongs(limit = 5) {
  const allSongs = await fetchSongs();
  const vietnamSongs = allSongs.filter(
    (song) => song.country?.toLowerCase() === "vietnam"
  );
  const randomVietnamSongs = vietnamSongs
    .sort(() => 0.5 - Math.random())
    .slice(0, limit);
  return randomVietnamSongs;
}
//IniSong
export async function getRandomIniSongs(limit = 5) {
  const allSongs = await fetchSongs();
  const inisongs = allSongs.filter(
    (song) => song.country?.toLowerCase() === "international"
  );
  const randomIniSong = inisongs
    .sort(() => 0.5 - Math.random())
    .slice(0, limit);
  return randomIniSong;
}
//MoodSong
export async function getRandomMoodSong(limit = 5) {
  const allSongs = await fetchSongs();
  const allGenres = await fetchGenre();
  const balladGenre = allGenres.find(
    (genre) => genre?.name?.toLowerCase() === "ballad"
  );
  const moodSongs = allSongs.filter(
    (song) => song.genreId === balladGenre.genreId
  );
  const randomMoodSong = moodSongs
    .sort(() => 0.5 - Math.random())
    .slice(0, limit);
  return randomMoodSong;
}

//NewSong
export async function getNewSong(limit = 10) {
  const allSongs = await fetchSongs();
  const newSong = allSongs
    .filter((song) => !!song.releaseDate)
    .sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate))
    .slice(0, limit);

  return newSong;
}

//MvHot
export async function getMVHot(limit = 10) {
  const allSongs = await fetchSongs();

  const hotSongs = allSongs
    .filter((song) => typeof song.playCount === "number")
    .sort((a, b) => b.playCount - a.playCount)
    .slice(0, limit);

  return hotSongs;
}

//Randomsong
export async function getRandomSongs(limit = 10) {
  const allSongs = await fetchSongs();
  const validSongs = allSongs.filter(
    (song) => typeof song === "object" && song?.songId
  );

  const randomSongs = validSongs
    .sort(() => 0.5 - Math.random())
    .slice(0, limit);

  return randomSongs;
}

//BXHVN
export async function getBXHVN(limit = 10) {
  const allSongs = await fetchSongs();
  const vietnamSongs = allSongs.filter(
    (song) => song.country?.toLowerCase() === "vietnam"
  );
  const bxhVNsongs = vietnamSongs
    .filter((song) => typeof song.playCount === "number")
    .sort((a, b) => b.playCount - a.playCount)
    .slice(0, limit);

  return bxhVNsongs;
}

//SongById
export async function getSongById(songId) {
  const allSongs = await fetchSongs();
  return allSongs.find((song) => song.songId === songId);
}
