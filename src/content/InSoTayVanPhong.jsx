import React from "react";
import sotayvp from "../assets/image/service/sotayvp.jpg";

const InSoTayVanPhong = () => {
  return (
    <div className="space-y-4 leading-relaxed text-gray-700">
      {/* TITLE */}
      <h2 className="text-2xl font-bold text-lime-700 uppercase">
        In Sổ Tay Văn Phòng: Giải Pháp Ghi Chép & Quản Lý Công Việc Hiệu Quả
      </h2>

      {/* INTRO */}
      <p>
        Sổ tay văn phòng là công cụ quen thuộc giúp nhân viên ghi chép công việc, kế hoạch và ý tưởng một cách khoa học và tiện lợi.
      </p>
      <p>
        Một cuốn sổ tay được thiết kế chuyên nghiệp, in ấn sắc nét không chỉ hỗ trợ công việc mà còn góp phần xây dựng hình ảnh thương hiệu doanh nghiệp.
      </p>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Tại Sao Nên In Sổ Tay Văn Phòng?
      </h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Quản lý công việc hiệu quả:</strong> Ghi chép rõ ràng, dễ theo dõi tiến độ.
        </li>
        <li>
          <strong>Tăng tính chuyên nghiệp:</strong> Thống nhất hình ảnh trong môi trường làm việc.
        </li>
        <li>
          <strong>Quảng bá thương hiệu:</strong> In logo và thông tin doanh nghiệp trên bìa sổ.
        </li>
        <li>
          <strong>Tiện lợi sử dụng:</strong> Dễ mang theo, phù hợp cho mọi nhân viên.
        </li>
      </ul>

      {/* IMAGE */}
      <img
        src={sotayvp}
        alt="In sổ tay văn phòng"
        className="w-full max-w-2xl rounded-lg shadow-lg mx-auto"
      />

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Lợi Ích Khi In Sổ Tay Văn Phòng Tại Chúng Tôi
      </h3>
      <p>
        Chúng tôi cung cấp dịch vụ in sổ tay văn phòng với nhiều lựa chọn như bìa cứng, bìa da, đóng lò xo, đóng keo… cùng công nghệ in hiện đại giúp sản phẩm bền đẹp và chuyên nghiệp.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Thiết kế theo nhận diện thương hiệu</li>
        <li>In sắc nét, màu chuẩn</li>
        <li>Gia công chắc chắn, bền đẹp</li>
        <li>Giá hợp lý cho doanh nghiệp</li>
      </ul>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Ứng Dụng Của Sổ Tay Văn Phòng
      </h3>
      <p>
        Sổ tay văn phòng được sử dụng rộng rãi trong doanh nghiệp để ghi chép công việc, lập kế hoạch, họp hành và quản lý thông tin nội bộ.
      </p>
      <p>
        Nếu bạn muốn nâng cao hiệu quả làm việc và xây dựng hình ảnh chuyên nghiệp, in sổ tay văn phòng chính là lựa chọn phù hợp.
      </p>
    </div>
  );
};

export default InSoTayVanPhong;