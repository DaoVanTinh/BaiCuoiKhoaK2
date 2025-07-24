import React, { useState } from "react";
import { Card, List } from "antd";
import VietNamsong from "./VietNamsong";
import IniSong from "./IniSong";
import MoodSong from "./MoodSong";
import NewSong from "./NewSong";
import MvHot from "./MvHot";
import RandomSong from "./RandomSong";
import BXHVN from "./BXHVN";
import BXHUS from "./BXHUS";
import BXHJP from "./BXHJP";

const Container = () => {
  const [activeTab, setActiveTab] = useState("vn");
  return (
    <div className="mr-[150px] ml-[150px] flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-3/4">
        <div className="list_album">
          <VietNamsong />
        </div>
        <div className="list_album">
          <IniSong />
        </div>
        <div className="list_album">
          <MoodSong />
        </div>
        <div className="list_album">
          <NewSong />
        </div>
        <div className="list_albumhot">
          <MvHot />
        </div>
        <div className="list_song">
          <RandomSong />
        </div>
      </div>
      <div className="w-full md:w-1/4">
        <h2 className="text-[26px] text-(--color-titletext) mb-2">
          BXH BÀI HÁT
        </h2>
        <div className="flex mb-5 w-full">
          <button
            className={`pt-1 pb-1 w-1/3 rounded-l-4xl cursor-pointer
            ${
              activeTab === "vn"
                ? "bg-[#e74c3c] text-white"
                : "bg-[#e5e5e5] text-[#333333]"
            }`}
            onClick={() => setActiveTab("vn")}
          >
            Việt Nam
          </button>

          <button
            className={`pt-1 pb-1 w-1/3 cursor-pointer
            ${
              activeTab === "usuk"
                ? "bg-[#e74c3c] text-white"
                : "bg-[#e5e5e5] text-[#333333]"
            }`}
            onClick={() => setActiveTab("usuk")}
          >
            Âu Mỹ
          </button>

          <button
            className={`pt-1 pb-1 w-1/3 rounded-r-4xl cursor-pointer
            ${
              activeTab === "kpop"
                ? "bg-[#e74c3c] text-white"
                : "bg-[#e5e5e5] text-[#333333]"
            }`}
            onClick={() => setActiveTab("kpop")}
          >
            Nhật Bản
          </button>
        </div>

        {activeTab === "vn" && <BXHVN />}
        {activeTab === "usuk" && <BXHUS />}
        {activeTab === "kpop" && <BXHJP />}
      </div>
    </div>
  );
};

export default Container;
