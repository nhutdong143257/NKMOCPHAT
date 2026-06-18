import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faMapPin,
  faEnvelope,
  faClock,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 caret-transparent">
      <div className="max-w-8xl mx-auto p-6">
        <div className="lg:flex lg:justify-between ">
          {/* Logo + Company Info */}
          <div className="lg:w-1/3 bg-gray-200/40 p-6 rounded-lg shadow-sm">
            <div className="flex flex-col justify-center items-center mx-auto">
              <img
                className="w-50 brightness-125"
                src="/MocPhatLogo.png"
                alt="MocPhatLogo"
              />
            </div>
            <span className="text-sm text-gray-500 text-justify leading-relaxed">
              Tầm nhìn của{" "}
              <b className="text-lime-700 uppercase">Công ty TNHH NK Mộc Phát</b> là trở
              thành đơn vị in ấn uy tín hàng đầu tại Việt Nam, tiên phong ứng
              dụng công nghệ hiện đại để mang đến các giải pháp in ấn sáng tạo
              và chất lượng cao, góp phần nâng tầm thương hiệu cho khách hàng.
              Với sứ mệnh cung cấp dịch vụ in ấn chuyên nghiệp, nhanh chóng và
              chính xác, công ty không ngừng cải tiến công nghệ, nâng cao chất
              lượng sản phẩm và tối ưu chi phí để đáp ứng mọi nhu cầu của khách
              hàng, từ cá nhân đến doanh nghiệp
            </span>
          </div>

          {/* Quick Links */}
          <div className="mt-10 lg:mt-0 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="mr-10 flex flex-col gap-3">
              <span className="font-semibold uppercase text-xl">
                Liên hệ tư vấn
              </span>
              <span className="text-lg text-lime-700 uppercase font-bold">
                Công ty TNHH NK Mộc Phát
              </span>
              <p className="mt-2 text-sm text-gray-800">
                <span className="font-semibold">
                  {" "}
                  <FontAwesomeIcon
                    icon={faPhoneVolume}
                    className="text-lg px-1"
                  />
                  Số điện thoại:{" "}
                </span>
                0942 574 386
              </p>
              <p className="mt-2 text-sm text-gray-800">
                <span className="font-semibold">
                  {" "}
                  <FontAwesomeIcon icon={faMapPin} className="text-lg px-1" />
                  Địa chỉ:{" "}
                </span>
                86/25E Ông Ích Khiêm, Phường Hoà Bình, TP.HCM
              </p>

              <p className="mt-2 text-sm text-gray-800">
                <span className="font-semibold">
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    className="text-lg px-1"
                  />
                  MST:{" "}
                </span>
                0309 37 14 19
              </p>

              <p className="mt-2 text-sm text-gray-800">
                <span className="font-semibold">
                  <FontAwesomeIcon icon={faEnvelope} className="text-lg px-1" />
                  Email:{" "}
                </span>
                tranphung.qnco@gmail.com
              </p>

              <p className="mt-2 text-sm text-gray-800">
                <span className="font-semibold">
                  <FontAwesomeIcon icon={faClock} className="text-lg px-1" />
                  Giờ làm việc:
                </span>
                <div className="flex flex-col gap-1 mt-1 px-6 text-sm">
                  <span>Sáng: 8h - 12h</span>
                  <span>Chiều: 13h - 17h</span>
                  <span>Thứ 7: 8h - 12h, (Nghỉ chiều thứ 7 và Chủ nhật)</span>
                </div>
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <span className="font-semibold uppercase text-xl">
                Chính sách & Hỗ trợ
              </span>

              <Link
                to=""
                className="block mt-2 text-sm text-gray-600 hover:text-lime-600"
              >
                Chính sách bảo mật
              </Link>
              <Link
                to=""
                className="block mt-2 text-sm text-gray-600 hover:text-lime-600"
              >
                Chính sách vận chuyển
              </Link>
              <Link
                to=""
                className="block mt-2 text-sm text-gray-600 hover:text-lime-600"
              >
                Chính sách thanh toán
              </Link>
              <Link
                to=""
                className="block mt-2 text-sm text-gray-600 hover:text-lime-600"
              >
                Chính sách lưu kho
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-4">
          <p className="text-center text-gray-500 text-sm">
            © 2026 - Công ty TNHH NK Mộc Phát. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
