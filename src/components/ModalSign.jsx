import React, { useState, useEffect } from "react";
import { Button, Modal, Input, Checkbox } from "antd";
import { createUser } from "../services/userService";
import { fetchUsers } from "../services/userService";

import MyButton from "./MyButton";
import Ggplus from "../assets/ggplus.svg";
import Fb from "../assets/fb.svg";
import Scan from "../assets/scan.svg";

const ModalSign = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [checkBox, setCheckBox] = useState(null);
  const [agreed, setAgreed] = useState(false);

  useEffect(() => {
    fetchUsers()
      .then(setUsers)
      .catch((e) => console.error("Lỗi lấy user:", e));
  }, []);
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!agreed) {
      setCheckBox(
        "Vui lòng đồng ý các điều khoản về Chính sách bảo mật và Thỏa thuận sử dụng"
      );
      return;
    }
    if (!username || !email || !password || !rePassword) {
      setCheckBox(null);
      return setError("Vui lòng nhập đầy đủ thông tin.");
    }

    if (username.length < 6) {
      setCheckBox(null);
      return setError("Tên tài khoản phải có ít nhất 6 ký tự.");
    }

    if (
      users.some((u) => u.username.toLowerCase() === username.toLowerCase())
    ) {
      setCheckBox(null);
      return setError("Tên tài khoản đã tồn tại.");
    }

    if (!validateEmail(email)) {
      setCheckBox(null);
      return setError("Email không đúng định dạng.");
    }

    if (password.length < 6) {
      setCheckBox(null);
      return setError("Mật khẩu phải có ít nhất 6 ký tự.");
    }

    if (password !== rePassword) {
      setCheckBox(null);
      return setError("Mật khẩu nhập lại không khớp.");
    }
    const newUser = {
      username,
      email,
      password,
      avatarUrl: "",
      createdAt: new Date().toISOString(),
      isPremium: false,
      likedSongs: [],
      playlists: [],
    };
    try {
      await createUser(newUser);
      setMessage("Đăng ký thành công!");
      setError("");
      setUsername("");
      setEmail("");
      setPassword("");
      setRePassword("");
    } catch (err) {
      setError("Lỗi đăng ký: " + err.message);
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <MyButton
        type="primary"
        onClick={showModal}
        className="w-[80px] h-[32px]"
      >
        <p className="font-medium">Đăng Ký</p>
      </MyButton>
      <Modal
        closable={{ "aria-label": "Custom Close Button" }}
        style={{ boxShadow: "none" }}
        width={800}
        footer={null}
        className="rounded-[4px] shadow-[1px_1px_6px_#333]"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="px-6 py-4 border-b">
          <h2 className="text-xl font-bold text-gray-800">ĐĂNG KÝ</h2>
        </div>
        <div className="flex flex-col md:flex-row">
          <form onSubmit={handleSignUp} className="w-full md:w-[600px] mx-auto">
            <div className="w-full pt-[13px] pb-[30px] pr-[30px]">
              <p className="text-[#999999] text-[12px] text-right mb-[10px]">
                Những thông tin có đánh dấu (
                <span className="text-[#e74c3c]">*</span>) là bắt buộc nhập.
              </p>
              <div className="flex items-center mb-[10px]">
                <label className="pr-[15px] w-[120px] whitespace-nowrap">
                  Tên đăng nhập <span className="text-[#e74c3c]">*</span>
                </label>
                <Input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="flex-1"
                />
              </div>
              <div className="flex items-center mb-[10px]">
                <label className="pr-[15px] w-[120px] whitespace-nowrap">
                  Mật khẩu <span className="text-[#e74c3c]">*</span>
                </label>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="flex-1"
                />
              </div>
              <div className="flex items-center mb-[10px]">
                <label className="pr-[15px] w-[120px] whitespace-nowrap">
                  Nhập lại mật khẩu<span className="text-[#e74c3c]">*</span>
                </label>
                <Input
                  type="password"
                  value={rePassword}
                  onChange={(e) => setRePassword(e.target.value)}
                  className="flex-1"
                />
              </div>
              <div className="flex items-center mb-[10px]">
                <label className="pr-[15px] w-[120px] whitespace-nowrap">
                  Email <span className="text-[#e74c3c]">*</span>
                </label>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                />
              </div>
              <div className="flex items-center mb-[10px]">
                <label className="pr-[15px] w-[120px] whitespace-nowrap">
                  Mã xác nhận <span className="text-[#e74c3c]">*</span>
                </label>
              </div>
              <div className="flex items-start pt-[5px]">
                <div className="w-[120px] pr-[15px]" />
                <div className="flex items-start gap-2 flex-1">
                  <Checkbox
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-[2px]"
                  />
                  <p className="text-[14px] text-[#333333] leading-relaxed">
                    Tôi đã đọc, hiểu rõ và tự nguyện đồng ý các điều khoản về
                    việc thu thập, xử lý dữ liệu cá nhân, quyền và nghĩa vụ của
                    tôi được quy định tại
                    <span className="text-[#0689ba] px-1 hover:underline cursor-pointer">
                      Chính sách bảo mật
                    </span>
                    và
                    <span className="text-[#0689ba] px-1 hover:underline cursor-pointer">
                      Thỏa thuận sử dụng
                    </span>
                    , và các chính sách khác được ban hành bởi NCT.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <label className="pr-[15px] w-[120px]"></label>
                <MyButton
                  type="submit"
                  className="flex-1 h-[36px] mt-[5px] mb-[5px] pl-[20px] pr-[20px]"
                >
                  <span className="!text-white">ĐĂNG KÝ MỚI</span>
                </MyButton>
              </div>
            </div>
            {error && (
              <p className="mt-[5px] mb-[5px] pt-[5px] pb-[5px] bg-red-500 text-white flex items-center justify-center">
                {error}
              </p>
            )}
            {message && (
              <p className="mt-[5px] mb-[5px] pt-[5px] pb-[5px] bg-green-500 text-white flex items-center justify-center">
                {message}
              </p>
            )}
            {checkBox && (
              <p
                className="mt-[5px] mb-[5px] pt-[5px] pb-[5px] bg-red-500 text-white flex items-center justify-center text-center
"
              >
                {checkBox}
              </p>
            )}
          </form>

          <div className="w-full md:w-1/3 pr-[10px] pb-[15px] pl-[10px] border-t md:border-t-0 md:border-l">
            <div className="flex justify-center items-center flex-col mt-[10px] mb-[10px]">
              <p className="text-[13px] text-[#333333] whitespace-nowrap mb-[10px]">
                Đã có tài khoản NCT ID?
              </p>
              <Button className="w-full !h-[36px] !bg-[#e74c3c] !text-white">
                <a href="" className="text-[15px]">
                  ĐĂNG NHẬP NGAY
                </a>
              </Button>
            </div>
            <div className="flex items-center gap-4 mb-[10px]">
              <hr className="flex-grow border-t border-[#dbdbdb]" />
              <span className="text-[13px] text-[#333333]">HOẶC</span>
              <hr className="flex-grow border-t border-[#dbdbdb]" />
            </div>
            <div>
              <div className="mb-[10px] flex items-center">
                <img
                  src={Fb}
                  alt="Facebook"
                  className="w-[28px] h-[28px] mr-[8px]"
                />
                <span>Đăng nhập qua Facebook</span>
              </div>
              <div className="mb-[10px] flex items-center">
                <img
                  src={Ggplus}
                  alt="GooglePlus"
                  className="w-[28px] h-[28px] mr-[8px]"
                />
                <span>Đăng nhập qua Google +</span>
              </div>
              <div className="mb-[10px] flex items-center">
                <img
                  src={Scan}
                  alt="Scan"
                  className="w-[28px] h-[28px] mr-[8px]"
                />
                <span>Đăng nhập bằng mã QR</span>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default ModalSign;
