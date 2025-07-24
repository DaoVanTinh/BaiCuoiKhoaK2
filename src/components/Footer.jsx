import { Carousel } from "antd";
import { Row, Col } from "antd";
import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import React from "react";

const Footer = () => {
  const footerImages = [
    "https://stc-id.nixcdn.com/v11/images/footer/1-new.png",
    "https://stc-id.nixcdn.com/v11/images/footer/2-new.png",
    "https://stc-id.nixcdn.com/v11/images/footer/17.png",
    "https://stc-id.nixcdn.com/v11/images/footer/19.png",
    "https://stc-id.nixcdn.com/v11/images/footer/12.png",
    "https://stc-id.nixcdn.com/v11/images/footer/9.png",
    "https://stc-id.nixcdn.com/v11/images/footer/15.png",
    "https://stc-id.nixcdn.com/v11/images/footer/3-new.png",
    "https://stc-id.nixcdn.com/v11/images/footer/20.png",
    "https://stc-id.nixcdn.com/v11/images/footer/14.png",
  ];
  const contactItems = [
    {
      icon: <EnvironmentOutlined className="text-gray-600 text-lg mr-2" />,
      value: "Tầng 19, Tòa nhà 678, 67 Hoàng Văn Thái, P.Tân Phú, Q.7, TP.HCM",
    },
    {
      icon: <MailOutlined className="text-gray-600 text-lg mr-2" />,
      title: "Liên hệ về bản quyền",
      value: "music.copyright@nct.vn",
    },
    {
      icon: <MailOutlined className="text-gray-600 text-lg mr-2" />,
      title: "Liên hệ hỗ trợ",
      value: "support@nct.vn",
    },
    {
      icon: <PhoneOutlined className="text-gray-600 text-lg mr-2" />,
      title: "Hotline",
      value: "(028) 3868 7979",
    },
  ];
  return (
    <>
      <div className="mt-5">
        <div className="footer-logo bg-[#efefef]">
          <div className="mr-37.5 ml-37.5">
            <p className="text-sm font-bold pt-3">
              NHACCUATUI LIÊN KẾT VÀ HỢP TÁC
            </p>
            <Carousel dots={false} slidesToShow={6} slidesToScroll={1} autoplay>
              {footerImages.map((src, index) => (
                <div className="h-[100px]" key={index}>
                  <img src={src} alt={`footer-${index}`} />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
        <div className="footer-navigation bg-[#f5f5f5]">
          <div className="ml-37.5 mr-37.5">
            <Row gutter={16}>
              <Col span={8}>
                <div className="pr-5">
                  <p className="mt-10 mb-2 font-bold text-sm">HỖ TRỢ</p>
                  <ul class="list-none p-0 grid grid-cols-2">
                    <li class="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer pt-3 pb-3 before:content-['›'] before:mr-2 before:text-gray-400">
                      Trợ giúp
                    </li>
                    <li class="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer pt-3 pb-3 before:content-['›'] before:mr-2 before:text-gray-400">
                      Chính sách bảo mật và bảo vệ, xử lý thông tin cá nhân
                    </li>
                    <li class="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer pt-3 pb-3 before:content-['›'] before:mr-2 before:text-gray-400">
                      Sơ đồ
                    </li>
                    <li class="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer pt-3 pb-3 before:content-['›'] before:mr-2 before:text-gray-400">
                      Chính sách SHTT
                    </li>
                    <li class="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer pt-3 pb-3 before:content-['›'] before:mr-2 before:text-gray-400">
                      NCCI
                    </li>
                    <li class="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer pt-3 pb-3 before:content-['›'] before:mr-2 before:text-gray-400">
                      Thỏa thuận sử dụng
                    </li>
                    <li class="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer pt-3 pb-3 before:content-['›'] before:mr-2 before:text-gray-400">
                      Liên hệ quảng cáo
                    </li>
                  </ul>
                </div>
              </Col>
              <Col span={8}>
                <div className="pr-5">
                  <p className="mt-10 mb-2 font-bold text-sm">SẢN PHẨM KHÁC</p>
                  <ul class="list-none p-0 grid grid-cols-2">
                    <li class="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer pt-3 pb-3 before:content-['›'] before:mr-2 before:text-gray-400">
                      Mobile App
                    </li>
                    <li class="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer pt-3 pb-3 before:content-['›'] before:mr-2 before:text-gray-400">
                      Dịch vụ 3G
                    </li>
                    <li class="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer pt-3 pb-3 before:content-['›'] before:mr-2 before:text-gray-400">
                      Mobile Web
                    </li>
                    <li class="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer pt-3 pb-3 before:content-['›'] before:mr-2 before:text-gray-400">
                      NCT Corp
                    </li>
                    <li class="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer pt-3 pb-3 before:content-['›'] before:mr-2 before:text-gray-400">
                      Smart TV
                    </li>
                    <li class="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer pt-3 pb-3 before:content-['›'] before:mr-2 before:text-gray-400">
                      Tuyển dụng
                    </li>
                    <li class="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer pt-3 pb-3 before:content-['›'] before:mr-2 before:text-gray-400">
                      Desktop
                    </li>
                  </ul>
                </div>
              </Col>
              <Col span={8}>
                <div className="pr-5">
                  <p className="mt-10 mb-2 font-bold text-sm">TOP TỪ KHÓA</p>
                  <p>
                    <a href="">The cruel angel's thesis, </a>
                    <a href="">Blue, </a>
                    <a href="">MASAYUME CHASING, </a>
                    <a href="">Ma meilleure ennemie.</a>
                  </p>
                  <p className="mt-3 mb-3 font-bold text-sm">
                    KẾT NỐI VỚI CHÚNG TÔI
                  </p>
                  <div className="w-full mb-4 flex">
                    <a href="" className="mr-4">
                      <img
                        className="w-[32px] h-[32px]"
                        src="https://stc-id.nixcdn.com/v11/images/footer/t_ic_facebook.png"
                        alt=""
                      />
                    </a>
                    <a href="" className="mr-4">
                      <img
                        src="https://stc-id.nixcdn.com/v11/images/footer/t_ic_tiktok.png"
                        alt=""
                      />
                    </a>
                    <a href="" className="mr-4">
                      <img
                        src="https://stc-id.nixcdn.com/v11/images/footer/t_ic_zalo.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="w-full mb-4 flex">
                    <a href="" className="mr-4">
                      <img
                        src="https://stc-id.nixcdn.com/v11/images/footer/t_google_play.png"
                        alt=""
                      />
                    </a>
                    <a href="" className="mr-4">
                      <img
                        src="https://stc-id.nixcdn.com/v11/images/footer/t_google_play.png"
                        alt=""
                      />
                    </a>
                    <a href="" className="mr-4">
                      <img
                        src="https://stc-id.nixcdn.com/v11/images/footer/t_appgallery.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="w-full flex">
                    <a href="" className="mr-4">
                      <img
                        src="https://stc-id.nixcdn.com/v11/images/footer/vibenation.png"
                        alt=""
                      />
                    </a>
                    <a href="" className="mr-4">
                      <img
                        src="https://stc-id.nixcdn.com/v11/images/footer/loops.png"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
            <div className="border-t-1 border-[#cccccc] mt-10 mb-10"></div>
            <div className="flex items-center">
              <a href="" className="mr-8 h-[96px] w-80px flex items-center">
                <img
                  src="https://stc-id.nixcdn.com/v11/images/footer/t_logo_company.png"
                  alt=""
                />
              </a>
              <div className="mr-2">
                <p className="text-base font-bold text-[#909090] mb-2">
                  CÔNG TY CỔ PHẦN NCT
                </p>
                <p className="before:content-['•'] before:mr-2 before:text-[#909090] text-[#909090] text-xs">
                  Giấy phép MXH số 499/GP-BTTTT do Bộ Thông Tin và Truyền thông
                  cấp ngày 28/09/2015.
                </p>
                <p className="before:content-['•'] before:mr-2 before:text-[#909090] text-[#909090] text-xs">
                  Giấy Chứng nhận Đăng ký Kinh doanh số 0305535715 do Sở kế
                  hoạch và Đầu tư thành phố Hồ Chí Minh cấp ngày 01/03/2008.
                </p>
                <p className="before:content-['•'] before:mr-2 before:text-[#909090] text-[#909090] text-xs">
                  Nhân sự chịu trách nhiệm quản lý nội dung thông tin: Ông Nhan
                  Thế Luân
                </p>
              </div>
              <a href="" className="mr-8 h-[120px] w-[126px] flex items-center">
                <img
                  src="https://stc-id.nixcdn.com/v11/images/footer/t_bo_cong_thuong.png"
                  alt=""
                />
              </a>
              <a href="" className="h-[120px] w-[126px] flex items-center">
                <img
                  src="https://stc-id.nixcdn.com/v11/images/footer/t_dmca.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-container bg-[#D5D5D5]">
          <div className="ml-37.5 mr-37.5 flex justify-between">
            <div className="flex items-center">
              {contactItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center h-10 max-w-[251px] bg-[#E2E2E2] mr-4 mt-2 mb-2 p-2 rounded-lg"
                >
                  {item.icon}
                  <div className="flex flex-col">
                    <span className="text-xs font-normal text-[#444444]">
                      {item.title}
                    </span>
                    {item.value && (
                      <span className="text-xs font-medium text-[#7a7a7a]">
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-2 mb-2">
              <img
                className="w-[145px]"
                src="https://stc-id.nixcdn.com/v11/images/footer/nct_copyright_logo.png"
                alt=""
              />
              <span className="text-xs font-medium text-[#7a7a7a]">
                © NCT Corp. All rights reserved
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
