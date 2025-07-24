import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { getMVHot } from "../services/songService";
import { nameArtist } from "../services/artistService";
import { PlayCircleOutlined } from "@ant-design/icons";

const MvHot = ({ limit = 10 }) => {
  const [songs, setSongs] = useState([]);
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    async function loadSongsAndArtists() {
      const mvHot = await getMVHot(limit);
      const artistList = await nameArtist();

      setSongs(mvHot);
      setArtists(artistList);
    }

    loadSongsAndArtists();
  }, [limit]);

  const top2 = songs.slice(0, 2);
  const rest = songs.slice(2);

  const getArtistName = (artistId) =>
    artists.find((a) => a.id === artistId)?.name || "Không rõ";

  return (
    <>
      <h2
        className="text-[26px] mb-[10px]"
        style={{ color: "var(--color-titletext)" }}
      >
        MV HOT
      </h2>
      <Row
        gutter={[
          { xs: 4, sm: 8, md: 12, lg: 16 },
          { xs: 4, sm: 8, md: 12, lg: 16 },
        ]}
      >
        {top2.map((item, index) => (
          <Col span={12} key={index}>
            <div className="relative h-[235px] overflow-hidden rounded-lg shadow-md group cursor-pointer">
              <img
                src={item.coverUrl}
                alt={item.title}
                className="w-full h-full object-cover transition duration-300 group-hover:scale-105 group-hover:opacity-70"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <PlayCircleOutlined
                className="absolute opacity-0 group-hover:opacity-100 transition duration-300 bg-blue-500 rounded-full p-3"
                style={{
                  color: "#fff",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  fontSize: "50px",
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-2 text-white">
                <p className="text-lg font-semibold">{item.title}</p>
                <p className="text-xs text-gray-300">
                  {getArtistName(item.artistId)}
                </p>
              </div>
            </div>
          </Col>
        ))}
        {rest.map((item, index) => (
          <Col span={6} key={index}>
            <div className="group relative cursor-pointer">
              <img
                src={item.coverUrl}
                alt={item.title}
                className="w-full h-full object-cover rounded-md transition duration-300 group-hover:opacity-70"
              />
              <PlayCircleOutlined
                className="absolute opacity-0 group-hover:opacity-100 transition duration-300 bg-blue-500 rounded-full p-3"
                style={{
                  color: "#fff",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  fontSize: "28px",
                }}
              />

              <p className="text-lg font-normal mt-1">{item.title}</p>
              <p className="text-xs text-[#9a9a9a]">
                {getArtistName(item.artistId)}
              </p>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default MvHot;
