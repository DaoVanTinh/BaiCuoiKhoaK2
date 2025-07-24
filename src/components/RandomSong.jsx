import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { getRandomSongs } from "../services/songService";
import { nameArtist } from "../services/artistService";
import { useNavigate } from "react-router-dom";

const RandomSong = ({ limit = 10 }) => {
  const [songs, setSongs] = useState([]);
  const [artists, setArtists] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadSongsAndArtists() {
      const randomSong = await getRandomSongs(limit);
      const artistList = await nameArtist();

      setSongs(randomSong);
      setArtists(artistList);
    }

    loadSongsAndArtists();
  }, [limit]);
  const getArtistName = (artistId) =>
    artists.find((a) => a.id === artistId)?.name || "Không rõ";

  return (
    <>
      <h2
        className="text-[26px] mb-2 mt-8"
        style={{ color: "var(--color-titletext)" }}
      >
        BÀI HÁT
      </h2>
      <Row gutter={[1, 1]}>
        {songs.map((item, index) => (
          <Col key={index} span={12}>
            <div
              className="h-[70px] flex items-center gap-2"
              onClick={() => navigate(`/song/${item.songId}`)}
            >
              <div className="flex items-center">
                <img
                  className="w-[60px] h-[60px] object-cover rounded cursor-pointer"
                  src={item.coverUrl}
                  alt=""
                />
              </div>
              <div className="flex flex-col leading-normal">
                <p className="text-sm font-normal text-black/90 transition-colors duration-300 hover:text-blue-500 cursor-pointer">
                  {item.title}
                </p>
                <p className="text-xs text-black/50 transition-colors duration-300 hover:text-blue-500 cursor-pointer">
                  {getArtistName(item.artistId)}
                </p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default RandomSong;
