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
  const policies = [
    "Chính sách bảo mật",
    "Chính sách vận chuyển",
    "Chính sách thanh toán",
    "Chính sách lưu kho",
  ];

  const address = "86/25E Ông Ích Khiêm, Phường Hoà Bình, TP.HCM";
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    address,
  )}&output=embed`;

  return (
    <footer className="bg-gray-100 border-t border-lime-100 caret-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {/* CỘT 1 — Logo + giới thiệu */}
          <div className="bg-white p-6 sm:p-7 rounded-3xl border border-gray-100 shadow-sm sm:col-span-2 lg:col-span-1">
            <div className="flex justify-center mb-5">
              <img
                className="w-40 sm:w-48 brightness-125"
                src="/MocPhatLogo.png"
                alt="MocPhatLogo"
              />
            </div>
            <p className="text-sm text-gray-500 text-justify leading-relaxed">
              Tầm nhìn của{" "}
              <b className="text-lime-700 uppercase">
                Công ty TNHH NK Mộc Phát
              </b>{" "}
              là trở thành đơn vị in ấn uy tín hàng đầu tại Việt Nam, tiên phong
              ứng dụng công nghệ hiện đại để mang đến các giải pháp in ấn sáng
              tạo và chất lượng cao, góp phần nâng tầm thương hiệu cho khách
              hàng. Với sứ mệnh cung cấp dịch vụ in ấn chuyên nghiệp, nhanh
              chóng và chính xác, công ty không ngừng cải tiến công nghệ, nâng
              cao chất lượng sản phẩm và tối ưu chi phí để đáp ứng mọi nhu cầu
              của khách hàng, từ cá nhân đến doanh nghiệp.
            </p>
          </div>

          {/* CỘT 2 — Liên hệ */}
          <div>
            <h3 className="font-bold uppercase text-lg mb-1 text-gray-900">
              Liên hệ tư vấn
            </h3>
            <div className="w-12 h-1 bg-lime-600 rounded-full mb-5"></div>
            <p className="text-lime-700 uppercase font-bold mb-4">
              Công ty TNHH NK Mộc Phát
            </p>

            <ul className="space-y-3.5 text-sm text-gray-700">
              <li className="flex gap-3">
                <span className="w-8 h-8 rounded-full bg-lime-100 text-lime-600 flex items-center justify-center shrink-0">
                  <FontAwesomeIcon icon={faPhoneVolume} />
                </span>
                <span className="self-center">
                  <span className="font-semibold">Điện thoại: </span>
                  <a href="tel:0942574386" className="hover:text-lime-600">
                    0942 574 386
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <span className="w-8 h-8 rounded-full bg-lime-100 text-lime-600 flex items-center justify-center shrink-0">
                  <FontAwesomeIcon icon={faMapPin} />
                </span>
                <span className="self-center">
                  <span className="font-semibold">Địa chỉ: </span>
                  {address}
                </span>
              </li>
              <li className="flex gap-3">
                <span className="w-8 h-8 rounded-full bg-lime-100 text-lime-600 flex items-center justify-center shrink-0">
                  <FontAwesomeIcon icon={faBriefcase} />
                </span>
                <span className="self-center">
                  <span className="font-semibold">MST: </span>0309 37 14 19
                </span>
              </li>
              <li className="flex gap-3">
                <span className="w-8 h-8 rounded-full bg-lime-100 text-lime-600 flex items-center justify-center shrink-0">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <span className="self-center">
                  <span className="font-semibold">Email: </span>
                  <a
                    href="mailto:tranphung.qnco@gmail.com"
                    className="hover:text-lime-600 break-all"
                  >
                    tranphung.qnco@gmail.com
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <span className="w-8 h-8 rounded-full bg-lime-100 text-lime-600 flex items-center justify-center shrink-0">
                  <FontAwesomeIcon icon={faClock} />
                </span>
                <div>
                  <span className="font-semibold">Giờ làm việc:</span>
                  <div className="flex flex-col gap-1 mt-1 text-gray-600">
                    <span>Sáng: 8h - 12h</span>
                    <span>Chiều: 13h - 17h</span>
                    <span>Thứ 7: 8h - 12h (Nghỉ chiều T7 và Chủ nhật)</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* CỘT 3 — Chính sách + Bản đồ */}
          <div>
            <h3 className="font-bold uppercase text-lg mb-1 text-gray-900">
              Chính sách & Hỗ trợ
            </h3>
            <div className="w-12 h-1 bg-lime-600 rounded-full mb-5"></div>

            <ul className="space-y-3 mb-8">
              {policies.map((item, i) => (
                <li key={i}>
                  <Link
                    to=""
                    className="group inline-flex items-center gap-2 text-sm text-gray-600 hover:text-lime-600 transition"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-lime-600 opacity-0 group-hover:opacity-100 transition"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            {/* BẢN ĐỒ */}
            <h3 className="font-bold uppercase text-lg mb-1 text-gray-900">
              Tìm chúng tôi trên bản đồ
            </h3>
            <div className="w-12 h-1 bg-lime-600 rounded-full mb-5"></div>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <iframe
                title="Bản đồ Mộc Phát"
                src={mapSrc}
                width="100%"
                height="200"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-10 sm:mt-12 pt-6">
          <p className="text-center text-gray-500 text-sm">
            © 2026 - Công ty TNHH NK Mộc Phát. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
