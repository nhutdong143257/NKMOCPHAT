import React from "react";
import lich from "../assets/image/service/lich.jpg";

const InLich = () => {
  return (
    <div className="space-y-4 leading-relaxed text-gray-700">
      {/* TITLE */}
      <h2 className="text-2xl font-bold text-lime-700 uppercase">
        In Lịch: Giải Pháp Quảng Bá Thương Hiệu Suốt Cả Năm
      </h2>

      {/* INTRO */}
      <p>
        Lịch là ấn phẩm quen thuộc trong mỗi gia đình và doanh nghiệp, không chỉ dùng để xem ngày tháng mà còn là công cụ quảng bá thương hiệu hiệu quả.
      </p>
      <p>
        Một cuốn lịch được thiết kế đẹp, in ấn chất lượng sẽ giúp doanh nghiệp ghi dấu ấn với khách hàng trong suốt cả năm.
      </p>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Tại Sao Nên In Lịch?
      </h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Quảng bá thương hiệu lâu dài:</strong> Hiển thị logo và thông tin doanh nghiệp mỗi ngày.
        </li>
        <li>
          <strong>Tính ứng dụng cao:</strong> Sử dụng hàng ngày trong gia đình và văn phòng.
        </li>
        <li>
          <strong>Đa dạng mẫu mã:</strong> Lịch treo tường, lịch để bàn, lịch bloc…
        </li>
        <li>
          <strong>Ý nghĩa quà tặng:</strong> Phù hợp làm quà tặng khách hàng, đối tác dịp cuối năm.
        </li>
      </ul>

      {/* IMAGE */}
      <img
        src={lich}
        alt="In lịch"
        className="w-full max-w-2xl rounded-lg shadow-lg mx-auto"
      />

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Lợi Ích Khi In Lịch Tại Chúng Tôi
      </h3>
      <p>
        Chúng tôi cung cấp dịch vụ in lịch với nhiều loại như lịch treo tường, lịch để bàn, lịch bloc… cùng công nghệ in hiện đại giúp hình ảnh sắc nét, màu sắc bền đẹp.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Thiết kế theo nhận diện thương hiệu</li>
        <li>In sắc nét, màu chuẩn</li>
        <li>Chất liệu giấy cao cấp</li>
        <li>Gia công chắc chắn, đẹp mắt</li>
      </ul>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Ứng Dụng Của Lịch
      </h3>
      <p>
        Lịch được sử dụng rộng rãi trong gia đình, văn phòng, doanh nghiệp và là quà tặng phổ biến trong các dịp lễ, Tết.
      </p>
      <p>
        Nếu bạn muốn quảng bá thương hiệu hiệu quả và lâu dài, in lịch chính là lựa chọn không thể bỏ qua.
      </p>
    </div>
  );
};

export default InLich;