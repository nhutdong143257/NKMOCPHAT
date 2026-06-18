import React from "react";
import hoadon from "../assets/image/service/hoadon.jpg";

const InHoaDon = () => {
  return (
    <div className="space-y-4 leading-relaxed text-gray-700">
      {/* TITLE */}
      <h2 className="text-2xl font-bold text-lime-700 uppercase">
        In Hóa Đơn: Giải Pháp Quản Lý & Giao Dịch Chuyên Nghiệp
      </h2>

      {/* INTRO */}
      <p>
        Hóa đơn là chứng từ quan trọng trong hoạt động kinh doanh, giúp ghi nhận
        giao dịch và quản lý tài chính hiệu quả.
      </p>
      <p>
        Một mẫu hóa đơn được in rõ ràng, chuyên nghiệp không chỉ đảm bảo tính
        pháp lý mà còn thể hiện uy tín của doanh nghiệp.
      </p>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Tại Sao Nên In Hóa Đơn?
      </h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Đảm bảo tính pháp lý:</strong> Ghi nhận đầy đủ thông tin giao
          dịch theo quy định.
        </li>
        <li>
          <strong>Quản lý dễ dàng:</strong> Hỗ trợ theo dõi doanh thu và kiểm
          soát tài chính.
        </li>
        <li>
          <strong>Tăng độ chuyên nghiệp:</strong> Thể hiện sự rõ ràng và minh
          bạch trong kinh doanh.
        </li>
        <li>
          <strong>Đa dạng mẫu mã:</strong> Có thể thiết kế theo nhu cầu riêng
          của doanh nghiệp.
        </li>
      </ul>

      {/* IMAGE */}
      <img
        src={hoadon}
        alt="In hóa đơn"
        className="w-full max-w-2xl rounded-lg shadow-lg mx-auto"
      />

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Lợi Ích Khi In Hóa Đơn Tại Chúng Tôi
      </h3>
      <p>
        Chúng tôi cung cấp dịch vụ in hóa đơn với nhiều loại như hóa đơn bán lẻ,
        hóa đơn GTGT, hóa đơn nhiều liên… cùng chất liệu giấy và công nghệ in
        đảm bảo rõ nét và chính xác.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>In rõ nét, không lem mực</li>
        <li>Đầy đủ thông tin theo yêu cầu</li>
        <li>Giấy in chất lượng, dễ lưu trữ</li>
        <li>Giá hợp lý cho doanh nghiệp</li>
      </ul>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Ứng Dụng Của Hóa Đơn
      </h3>
      <p>
        Hóa đơn được sử dụng rộng rãi trong các doanh nghiệp, cửa hàng, công ty
        để ghi nhận giao dịch mua bán và quản lý tài chính.
      </p>
      <p>
        Nếu bạn cần một giải pháp in ấn hóa đơn rõ ràng, chính xác và chuyên
        nghiệp, đây chính là lựa chọn phù hợp.
      </p>
    </div>
  );
};

export default InHoaDon;
