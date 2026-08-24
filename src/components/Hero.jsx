import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-linear-to-br from-gray-100 via-white to-lime-50/40 rounded-3xl caret-transparent">
      {/* Đốm trang trí mờ */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-lime-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-24 w-96 h-96 bg-lime-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 py-12 sm:py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8 sm:gap-12">
          {/* ẢNH */}
          <div className="shrink-0">
            <div className="relative group">
              <div className="absolute -inset-4 bg-lime-200/50 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition pointer-events-none" />

              <figure className="relative">
                <img
                  src="/MocPhatLogo.png"
                  alt="Logo Công Ty TNHH NK Mộc Phát - Công ty in ấn tại TP.HCM"
                  className="max-w-56 sm:max-w-xs w-full rounded-2xl shadow-2xl transition duration-500 group-hover:scale-105 group-hover:-rotate-1"
                />
              </figure>
            </div>
          </div>

          {/* NỘI DUNG */}
          <div className="flex-1 text-center lg:text-left">
            {/* H1 SEO */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight uppercase text-gray-900 mb-5">
              Công Ty In Ấn{" "}
              <span className="bg-linear-to-r from-lime-500 via-green-500 to-emerald-600 bg-clip-text text-transparent">
                Mộc Phát
              </span>{" "}
              – In Ấn Chuyên Nghiệp Tại TP.HCM
            </h1>

            {/* Giới thiệu */}
            <p className="text-gray-600 leading-7 sm:leading-8 text-sm sm:text-base max-w-3xl mx-auto lg:mx-0">
              <b className="uppercase">Công ty TNHH In Ấn NK Mộc Phát</b> là đơn
              vị hoạt động trong lĩnh vực in ấn và thiết kế tại TP.HCM. Mộc Phát
              cung cấp các giải pháp in ấn chất lượng, đáp ứng nhu cầu đa dạng
              của doanh nghiệp và cá nhân.
            </p>

            <p className="mt-4 text-gray-600 leading-7 sm:leading-8 text-sm sm:text-base max-w-3xl mx-auto lg:mx-0">
              Chuyên in <b>Namecard, Tờ rơi, Catalogue, Poster</b> với chất
              lượng cao. Nhận thiết kế theo yêu cầu và hỗ trợ giao hàng nhanh
              tại TP.HCM.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-3 sm:gap-5 justify-center lg:justify-start mt-8">
              <Link to="/san-pham">
                <button className="btn-draw btn-draw-sm rounded-lg text-gray-800 hover:text-lime-800">
                  <svg>
                    <rect x="0" y="0" width="100%" height="100%" />
                  </svg>
                  Xem sản phẩm
                </button>
              </Link>

              <Link to="/dich-vu">
                <button className="btn-draw btn-draw-sm rounded-lg text-gray-800 hover:text-lime-800">
                  <svg>
                    <rect x="0" y="0" width="100%" height="100%" />
                  </svg>
                  Xem dịch vụ
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
