import React, { useState } from "react";
import { Button, Checkbox, Input, Modal } from "antd";
import MyButton from "./MyButton";
import Ggplus from "../assets/ggplus.svg";
import Fb from "../assets/fb.svg";
import Scan from "../assets/scan.svg";
import { checkLogin } from "../services/userService";
import { useAuth } from "../context/AuthContext"; // ✅ Dùng AuthContext

const ModalLogin = () => {
  const { login } = useAuth(); // ✅ Lấy hàm login từ Context

  const [agreed, setAgreed] = useState(false);
  const [checkBox, setCheckBox] = useState(null);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => {
    setCheckBox(null);
    setResult(null);
    setIsModalOpen(false);
  };

  const handleLogin = async () => {
    if (!agreed) {
      setCheckBox(
        "Vui lòng đồng ý các điều khoản về Chính sách bảo mật và Thỏa thuận sử dụng"
      );
      setResult(null);
      return;
    }
    if (!username || !password) {
      setResult("Vui lòng nhập đầy đủ thông tin");
      setCheckBox(null);
      return;
    }

    const user = await checkLogin({ username, password });
    if (user) {
      login(user); // ✅ Lưu user vào Context
      setIsModalOpen(false); // ✅ Đóng modal khi đăng nhập thành công
      setUsername("");
      setPassword("");
      setResult(null);
      setCheckBox(null);
    } else {
      setResult("Sai tài khoản hoặc mật khẩu!");
    }
  };

  return (
    <>
      <button type="primary" onClick={showModal}>
        <div className="menuheader-login">
          <p>Đăng nhập</p>
        </div>
      </button>

      <Modal
        style={{ boxShadow: "none" }}
        width={800}
        footer={null}
        className="rounded-[4px] shadow-[1px_1px_6px_#333]"
        open={isModalOpen}
        onCancel={handleCancel}
      >
        <div className="px-6 py-4 border-b">
          <h2 className="text-xl font-bold text-gray-800">ĐĂNG NHẬP</h2>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Form bên trái */}
          <div className="w-full md:w-2/3 pt-[13px] pb-[30px] pr-[30px]">
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

            <div className="flex items-center pt-[5px]">
              <label className="pr-[15px] w-[120px]"></label>
              <Checkbox className="!text-[14px] !text-[#333333]">
                Nhớ mật khẩu
              </Checkbox>
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
                  Tôi đã đọc, hiểu rõ và tự nguyện đồng ý các điều khoản về việc
                  thu thập, xử lý dữ liệu cá nhân...
                  <span className="text-[#0689ba] px-1 hover:underline cursor-pointer">
                    Chính sách bảo mật
                  </span>
                  và
                  <span className="text-[#0689ba] px-1 hover:underline cursor-pointer">
                    Thỏa thuận sử dụng
                  </span>
                </p>
              </div>
            </div>

            <div className="flex justify-end pt-[5px] w-full">
              <a className="mt-[15px] mr-[16px] !text-[#0689ba]" href="">
                Quên mật khẩu?
              </a>
            </div>

            <div className="flex items-center">
              <label className="pr-[15px] w-[120px]"></label>
              <MyButton
                onClick={handleLogin}
                type="primary"
                className="flex-1 h-[36px] mt-[5px] mb-[5px] pl-[20px] pr-[20px]"
              >
                <span className="!text-white">ĐĂNG NHẬP</span>
              </MyButton>
            </div>

            {result && (
              <p className="mt-[5px] mb-[5px] pt-[5px] pb-[5px] bg-red-500 text-white flex items-center justify-center">
                {result}
              </p>
            )}
            {checkBox && (
              <p className="mt-[5px] mb-[5px] pt-[5px] pb-[5px] bg-red-500 text-white flex items-center justify-center text-center">
                {checkBox}
              </p>
            )}
          </div>

          {/* Bên phải */}
          <div className="w-full md:w-1/3 pr-[10px] pb-[15px] pl-[10px] border-t md:border-t-0 md:border-l">
            <div className="flex justify-center items-center flex-col mt-[10px] mb-[10px]">
              <p className="text-[13px] text-[#333333] whitespace-nowrap mb-[10px]">
                Bạn chưa có tài khoản NCT ID?
              </p>
              <Button className="w-full !h-[36px] !bg-[#e74c3c] !text-white">
                <a href="" className="text-[15px]">
                  ĐĂNG KÝ NGAY
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

export default ModalLogin;
