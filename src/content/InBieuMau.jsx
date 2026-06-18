import React from "react";
import bieumau from "../assets/image/service/bieumau.jpg";

const InBieuMau = () => {
  return (
    <div className="space-y-4 leading-relaxed text-gray-700">
      {/* TITLE */}
      <h2 className="text-2xl font-bold text-lime-700 uppercase">
        In Biểu Mẫu: Giải Pháp Quản Lý & Làm Việc Hiệu Quả
      </h2>

      {/* INTRO */}
      <p>
        Biểu mẫu là công cụ quan trọng giúp thu thập thông tin, quản lý dữ liệu và chuẩn hóa quy trình làm việc trong doanh nghiệp.
      </p>
      <p>
        Một mẫu biểu được in rõ ràng, khoa học sẽ giúp việc ghi chép, lưu trữ và xử lý thông tin trở nên nhanh chóng và chính xác hơn.
      </p>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Tại Sao Nên In Biểu Mẫu?
      </h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Chuẩn hóa quy trình:</strong> Giúp làm việc thống nhất và chuyên nghiệp hơn.
        </li>
        <li>
          <strong>Dễ dàng quản lý:</strong> Thu thập và lưu trữ thông tin hiệu quả.
        </li>
        <li>
          <strong>Tiện lợi sử dụng:</strong> Dễ ghi chép, dễ kiểm tra.
        </li>
        <li>
          <strong>Thiết kế theo yêu cầu:</strong> Phù hợp từng mục đích sử dụng.
        </li>
      </ul>

      {/* IMAGE */}
      <img
        src={bieumau}
        alt="In biểu mẫu"
        className="w-full max-w-2xl rounded-lg shadow-lg mx-auto"
      />

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Lợi Ích Khi In Biểu Mẫu Tại Chúng Tôi
      </h3>
      <p>
        Chúng tôi cung cấp dịch vụ in biểu mẫu với nhiều loại như phiếu thu, phiếu chi, phiếu xuất kho, đơn đăng ký… phù hợp với mọi lĩnh vực kinh doanh.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>In rõ nét, dễ viết</li>
        <li>Thiết kế bố cục khoa học</li>
        <li>Chất liệu giấy đa dạng</li>
        <li>Giá hợp lý cho doanh nghiệp</li>
      </ul>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Ứng Dụng Của Biểu Mẫu
      </h3>
      <p>
        Biểu mẫu được sử dụng rộng rãi trong doanh nghiệp, cửa hàng, tổ chức để phục vụ công việc quản lý, kế toán và vận hành.
      </p>
      <p>
        Nếu bạn cần chuẩn hóa quy trình làm việc và quản lý thông tin hiệu quả, in biểu mẫu chính là giải pháp cần thiết.
      </p>
    </div>
  );
};

export default InBieuMau;