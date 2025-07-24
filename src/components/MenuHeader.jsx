import React from "react";
import { Dropdown, Input, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import ModalLogin from "./ModalLogin";
import ModalSign from "./ModalSign";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

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
        <ul className="menuheader-list flex items-center">
          <li>
            <Link to="/">
              <img src={Logo} alt="Logo" className="h-10 w-auto" />
            </Link>
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
            <Input addonBefore={<SearchOutlined />} placeholder="Tìm kiếm" />
          </div>
          <img
            src="https://stc-id.nixcdn.com/v11/images/header_new/ic_store.png"
            alt="Logo"
            className="w-[28px] h-[28px]"
          />
          <div className="menuheader-line"></div>
          <div className="menuheader-ls flex items-center space-x-4">
            {user ? (
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
