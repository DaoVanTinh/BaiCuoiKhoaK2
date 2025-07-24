import React, { useEffect, useState } from "react";
import { nameArtist } from "../services/artistService";
import { useNavigate } from "react-router-dom";
import { getBXHJP } from "../services/songService";

export default function BXHJP({ limit = 10 }) {
  const [songs, setSongs] = useState([]);
  const [artists, setArtists] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadSongsAndArtists() {
      const jpSongs = await getBXHJP(limit);
      const artistList = await nameArtist();
      setSongs(jpSongs || []);
      setArtists(artistList || []);
    }

    loadSongsAndArtists();
  }, [limit]);

  const getArtistName = (artistId) =>
    artists.find((a) => a.id === artistId)?.name || "Không rõ";

  const top1 = songs.slice(0, 1);
  const rest = songs.slice(1);

  return (
    <div className="flex mb-2 flex-col">
      {top1.map((item, index) => (
        <div className="flex justify-evenly items-center pb-2 border-b border-gray-200 relative mb-2">
          <span className="text-center text-lg font-bold text-[#ffffff] absolute bottom-2 left-0 w-8 h-8 bg-[#e74c3c] flex items-center justify-center">
            {index + 1}
          </span>

          <img
            src={item.coverUrl}
            alt={item.title}
            className="w-[100px] h-[100px] mr-3 cursor-pointer"
          />
          <div>
            <p
              className="text-xl text-[rgba(0,0,0,0.88)] font-normal mb-1 hover:text-blue-500 cursor-pointer"
              onClick={() => navigate(`/song/${item.songId}`)}
            >
              {item.title}
            </p>
            <p className="text-[13px] text-[#acacac] font-normal">
              {getArtistName(item.artistId)}
            </p>
          </div>
        </div>
      ))}
      {rest.map((item, index) => {
        const rank = top1.length + index + 1;
        const rankColor =
          rank === 1
            ? "#ff4d4f"
            : rank === 2
            ? "#1abc9c"
            : rank === 3
            ? "#f39c12"
            : "#7a7a7a";

        return (
          <div
            className="flex items-center border-b border-gray-200 pb-3 mb-3"
            key={item.id}
          >
            <span
              className="w-6 text-center text-xl font-bold mr-2"
              style={{ color: rankColor }}
            >
              {rank}
            </span>

            <div>
              <p
                className="text-sm text-[rgba(0,0,0,0.88)] font-normal mb-1 hover:text-blue-500 cursor-pointer"
                onClick={() => navigate(`/song/${item.songId}`)}
              >
                {item.title}
              </p>
              <p className="text-[13px] text-[#acacac] font-normal">
                {getArtistName(item.artistId)}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
