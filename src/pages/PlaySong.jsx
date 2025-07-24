import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSongById } from "../services/songService";
import { nameArtist } from "../services/artistService";
import {
  Heart,
  Download,
  Share2,
  Smartphone,
  MoreHorizontal,
  Flag,
  Info,
} from "lucide-react";

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
  function getYoutubeEmbedUrl(url) {
    if (!url) return "";
    let videoId = "";

    if (url.includes("watch?v=")) {
      videoId = url.split("v=")[1].split("&")[0]; // chỉ lấy phần trước dấu &
    } else if (url.includes("youtu.be/")) {
      videoId = url.split("youtu.be/")[1].split("?")[0];
    }

    return `https://www.youtube.com/embed/${videoId}`;
  }

  const [expanded, setExpanded] = useState(false);
  const lines = song?.lyrics ? song.lyrics.split("\n") : [];
  const visibleLines = expanded ? lines : lines.slice(0, 7);

  if (!song) return <p className="pt-[60px] pl-37.5">Đang tải...</p>;

  const artistName =
    artists.find((a) => a.id === song.artistId)?.name || "Không rõ";
  return (
    <>
      <div className="mr-[150px] ml-[150px] pt-[60px] flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-3/4">
          <div>
            <h1 className="text-2xl text-[#000000] font-medium mb-4">
              {song.title} - {artistName}
            </h1>
            {song?.audioUrl && (
              <div className="relative w-full pb-[56.25%] h-0">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={getYoutubeEmbedUrl(song.audioUrl)}
                  title={song.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
            <div className="pt-5 pb-2 flex justify-end">
              <div className="flex items-center gap-4 mt-2 text-gray-600">
                <button className="flex items-center gap-1 text-[#212121] hover:text-blue-600">
                  <Heart size={16} /> Thêm vào yêu thích
                </button>
                <button className="flex items-center gap-1 text-[#212121] hover:text-blue-600">
                  <Download size={16} /> Tải nhạc
                </button>
                <button className="flex items-center gap-1 text-[#212121] hover:text-blue-600">
                  <Share2 size={16} /> Chia sẻ/Chép link
                </button>
                <button className="flex items-center gap-1 text-[#212121] hover:text-blue-600">
                  <Smartphone size={16} /> Nhạc chờ
                </button>
                <div className="relative group">
                  <button className="flex items-center gap-1 text-[#212121] cursor-pointer hover:text-blue-600">
                    <MoreHorizontal size={18} />
                  </button>

                  <div
                    className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-md opacity-0 invisible 
                          group-hover:opacity-100 group-hover:visible transition duration-200 z-10"
                  >
                    <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <Flag size={14} /> Báo lỗi
                    </button>
                    <div className="border-t"></div>
                    <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <Info size={14} /> Thông tin
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="border p-5 pt-3 text-gray-800 leading-relaxed space-y-2">
              {visibleLines.map((line, index) => (
                <p
                  key={index}
                  className={
                    line.startsWith("[")
                      ? "font-semibold text-gray-900"
                      : "text-gray-700"
                  }
                >
                  {line.trim() === "" ? "\u00A0" : line}
                </p>
              ))}

              {lines.length > 7 && (
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="text-[#2daaed] hover:underline text-sm mt-2"
                >
                  {expanded ? "▲ Thu gọn" : "▼ Xem toàn bộ"}
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/4">123</div>
      </div>
    </>
  );
}
