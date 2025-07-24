import React from "react";
import { Dropdown, Space } from "antd";
import ModalLogin from "./ModalLogin";
import ModalSign from "./ModalSign";
import { useAuth } from "../context/AuthContext";

const MenuHeader = () => {
  const { user, logout } = useAuth();

  const items = [
    {
      key: "1",
      label: (
        <button onClick={logout} className="w-full text-left">
          Thoát
        </button>
      ),
    },
  ];

  return (
    <div className="fixed w-full z-5 bg-white border-b-1 border-[#dadada] border-solid">
      <div className="menuheader">
        <ul className="menuheader-list">
          <li>
            <a href="">123</a>
          </li>
          <li>
            <a href="">Khám phá</a>
          </li>
          <li>
            <a href="">Bài hát</a>
          </li>
          <li>
            <a href="">Playlist</a>
          </li>
          <li>
            <a href="">Tuyển tập</a>
          </li>
          <li>
            <a href="">Video</a>
          </li>
          <li>
            <a href="">BXH</a>
          </li>
          <li>
            <a href="">Top 100</a>
          </li>
          <a href="">...</a>
        </ul>

        <div className="menuheader-ils flex items-center">
          <div className="menuheader-search">
            <div className="menuheader-searchbox">i</div>
            <input type="text" placeholder="Tìm kiếm" />
          </div>
          <div>A</div>
          <div className="menuheader-line"></div>

          <div className="menuheader-ls flex items-center space-x-4">
            {user ? (
              // ✅ Nếu đã đăng nhập
              <div className="text-[14px] text-[#000000] font-bold">
                <Dropdown menu={{ items }}>
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                      <p className="cursor-pointer">{user.username}</p>
                    </Space>
                  </a>
                </Dropdown>
              </div>
            ) : (
              // ✅ Nếu chưa đăng nhập
              <>
                <ModalLogin />
                <div className="flex items-center text-[13.5px] text-white">
                  <ModalSign />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuHeader;
