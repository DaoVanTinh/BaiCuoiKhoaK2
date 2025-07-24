import React, { useEffect, useState } from "react";
import { getRandomMoodSong } from "../services/songService";
import { nameArtist } from "../services/artistService";
import { List, Button } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function MoodSong({ limit = 5 }) {
  const [songs, setSongs] = useState([]);
  const [artists, setArtists] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadSongsAndArtists() {
      const moodSongs = await getRandomMoodSong(limit);
      const artistList = await nameArtist();

      setSongs(moodSongs);
      setArtists(artistList);
    }

    loadSongsAndArtists();
  }, [limit]);

  return (
    <>
      <h2
        className="text-[26px] mb-[10px]"
        style={{ color: "var(--color-titletext)" }}
      >
        TÂM TRẠNG NỔI BẬT
      </h2>
      <List
        grid={{
          gutter: 20,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 5,
          xl: 5,
          xxl: 5,
        }}
        dataSource={songs}
        renderItem={(item) => {
          const artistName =
            artists.find((a) => a.id === item.artistId)?.name || "Không rõ";

          return (
            <List.Item
              onClick={() => navigate(`/song/${item.songId}`)}
              className="cursor-pointer"
            >
              <div className="relative group w-[152px] h-[152px] cursor-pointer rounded-md overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:opacity-70 transition"
                  src={item.coverUrl}
                  alt={item.title}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <Button
                    type="primary"
                    shape="circle"
                    icon={<PlayCircleOutlined style={{ fontSize: 30 }} />}
                    size="large"
                  />
                </div>
              </div>
              <p className="text-sm font-medium">{item.title}</p>
              <p className="text-xs text-[rgba(0,0,0,0.5)]">{artistName}</p>
            </List.Item>
          );
        }}
      />
    </>
  );
}
