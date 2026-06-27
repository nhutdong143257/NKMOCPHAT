import React from "react";
import { Link } from "react-router-dom";
import { Home, ArrowLeft, Search } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 py-16">
      <div className="text-center max-w-md">
        {/* Số 404 lớn */}
        <div className="relative inline-block mb-6">
          <h1 className="text-[120px] md:text-[160px] font-bold leading-none bg-gradient-to-br from-lime-500 to-lime-700 bg-clip-text text-transparent select-none">
            404
          </h1>
          {/* icon kính lúp trang trí */}
          <div className="absolute -top-2 -right-2 w-14 h-14 bg-lime-100 rounded-full flex items-center justify-center rotate-12">
            <Search className="text-lime-600" size={26} />
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 uppercase">
          Không tìm thấy trang
        </h2>
        <p className="text-gray-500 leading-relaxed mb-8">
          Trang bạn tìm có thể đã bị xoá, đổi tên hoặc tạm thời không truy cập
          được. Hãy quay lại trang chủ để tiếp tục.
        </p>

        {/* Nút */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-lime-600 text-white font-semibold rounded-full hover:bg-lime-700 transition shadow-lg shadow-lime-600/25 hover:-translate-y-0.5 duration-200"
          >
            <Home size={18} />
            Về trang chủ
          </Link>
          <Link
            to="/san-pham"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-gray-800 font-semibold rounded-full hover:border-lime-600 hover:text-lime-600 transition"
          >
            <ArrowLeft size={18} />
            Xem sản phẩm
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
