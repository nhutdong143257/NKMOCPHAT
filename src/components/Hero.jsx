import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero bg-base-200 min-h-screen rounded-2xl caret-transparent">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
          <h1 className="text-4xl mb-3 lg:text-5xl font-bold leading-tight uppercase">
            In ấn <span className="text-lime-700">chuyên nghiệp</span> –{" "}
            <span className="text-lime-700">Giá tốt</span>
          </h1>

          <p className="py-2 text-lg text-gray-600 max-w-3xl">
            <b className="uppercase">Công ty TNHH In Ấn NK Mộc Phát</b> là đơn
            vị được phát triển và kế thừa từ{" "}
            <b className="uppercase">Công ty TNHH In Ấn Quỳnh Ngân</b> – một
            doanh nghiệp có nền tảng hoạt động trong lĩnh vực in ấn và thiết kế.
            Trải qua quá trình hình thành và phát triển,{" "}
            <b className="uppercase">NK Mộc Phát</b> tiếp tục kế thừa những giá
            trị cốt lõi, đồng thời không ngừng cải tiến công nghệ, nâng cao chất
            lượng dịch vụ nhằm đáp ứng nhu cầu ngày càng đa dạng của khách hàng
          </p>

          <p className="py-5 text-lg text-gray-600 max-w-3xl">
            Chuyên in Namecard, Tờ rơi, Catalogue, Poster với chất lượng cao.
            Nhận thiết kế theo yêu cầu và giao hàng nhanh cho doanh nghiệp và cá
            nhân tại TP.HCM
          </p>

          <div className="flex gap-4">
            <Link to="/san-pham">
              <button className="btn bg-lime-700 text-white border-none hover:bg-lime-800">
                Xem sản phẩm
              </button>
            </Link>

            <Link to="/dich-vu">
              <button className="btn btn-outline">Xem dịch vụ</button>
            </Link>
          </div>
        </div>
        {/* <img
              src="/MocPhatLogo.png"
              className="max-w-sm rounded-lg shadow-2xl"
              alt="3D card"
            /> */}
        <div className="hover-3d">
          {/* content */}
          <figure className="max-w-100">
            <img
              src="/MocPhatLogo.png"
              className="max-w-sm rounded-lg shadow-2xl"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Hero;
