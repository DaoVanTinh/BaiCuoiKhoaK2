import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSongById } from "../services/songService";
import { nameArtist } from "../services/artistService";
import MenuHeader from "../components/MenuHeader";
import Footer from "../components/Footer";

export default function PlaySong() {
  const { id } = useParams();
  const [song, setSong] = useState(null);
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getSongById(id);
      const artistList = await nameArtist();
      setSong(data);
      setArtists(artistList);
    }
    fetchData();
  }, [id]);

  if (!song) return <p>Đang tải...</p>;

  const artistName =
    artists.find((a) => a.id === song.artistId)?.name || "Không rõ";

  return (
    <>
      <div className="mr-[150px] ml-[150px] pt-[60px] flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-3/4">123</div>
        <div className="w-full md:w-1/4">123</div>
      </div>
    </>
  );
}
