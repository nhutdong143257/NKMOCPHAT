import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-linear-to-br from-gray-100 via-white to-lime-50/40 rounded-3xl caret-transparent">
      {/* đốm trang trí mờ */}
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
                  alt="NK Mộc Phát"
                  className="max-w-56 sm:max-w-xs w-full rounded-2xl shadow-2xl transition duration-500 group-hover:scale-105 group-hover:-rotate-1"
                />
              </figure>
            </div>
          </div>

          {/* NỘI DUNG */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight uppercase text-gray-900 mb-5">
              In ấn <span className="text-lime-700">chuyên nghiệp</span> –{" "}
              <span className="text-lime-700">Giá tốt</span>
            </h1>

            <p className="text-gray-600 leading-7 sm:leading-8 text-sm sm:text-base max-w-3xl mx-auto lg:mx-0">
              <b className="uppercase">Công ty TNHH In Ấn NK Mộc Phát</b> là đơn
              vị được phát triển và kế thừa từ{" "}
              <b className="uppercase">Công ty TNHH In Ấn Quỳnh Ngân</b> – một
              doanh nghiệp có nền tảng hoạt động trong lĩnh vực in ấn và thiết
              kế. Trải qua quá trình hình thành và phát triển,{" "}
              <b className="uppercase">NK Mộc Phát</b> tiếp tục kế thừa những
              giá trị cốt lõi, đồng thời không ngừng cải tiến công nghệ, nâng
              cao chất lượng dịch vụ nhằm đáp ứng nhu cầu ngày càng đa dạng của
              khách hàng.
            </p>

            <p className="mt-4 text-gray-600 leading-7 sm:leading-8 text-sm sm:text-base max-w-3xl mx-auto lg:mx-0">
              Chuyên in Namecard, Tờ rơi, Catalogue, Poster với chất lượng cao.
              Nhận thiết kế theo yêu cầu và giao hàng nhanh cho doanh nghiệp và
              cá nhân tại TP.HCM.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start mt-8">
              <Link to="/san-pham">
                <button className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 bg-lime-700 text-white font-semibold rounded-full hover:bg-lime-800 transition shadow-lg shadow-lime-700/25 hover:shadow-lime-700/40 hover:-translate-y-0.5 duration-200">
                  Xem sản phẩm
                  <ArrowRight size={18} />
                </button>
              </Link>

              <Link to="/dich-vu">
                <button className="px-6 sm:px-7 py-3 sm:py-3.5 border border-gray-800 font-semibold rounded-full hover:border-lime-600 hover:text-lime-600 transition">
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
