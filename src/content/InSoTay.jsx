import React from "react";
import sotay from "../assets/image/service/sotay.jpg";

const InSoTay = () => {
  return (
    <div className="space-y-4 leading-relaxed text-gray-700">
      {/* TITLE */}
      <h2 className="text-2xl font-bold text-lime-700 uppercase">
        In Sổ Tay: Giải Pháp Ghi Chép & Quảng Bá Thương Hiệu Hiệu Quả
      </h2>

      {/* INTRO */}
      <p>
        Sổ tay là vật dụng quen thuộc giúp ghi chép thông tin, kế hoạch và ý
        tưởng một cách tiện lợi trong học tập và công việc.
      </p>
      <p>
        Một cuốn sổ tay được thiết kế đẹp, in ấn chuyên nghiệp không chỉ phục vụ
        ghi chép mà còn là công cụ quảng bá thương hiệu hiệu quả.
      </p>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Tại Sao Nên In Sổ Tay?
      </h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Tiện lợi ghi chép:</strong> Dễ dàng mang theo và sử dụng hàng
          ngày.
        </li>
        <li>
          <strong>Quảng bá thương hiệu:</strong> In logo, thông tin doanh nghiệp
          trên bìa sổ.
        </li>
        <li>
          <strong>Thiết kế đa dạng:</strong> Nhiều kiểu dáng, kích thước và chất
          liệu.
        </li>
        <li>
          <strong>Ý nghĩa làm quà tặng:</strong> Phù hợp cho sự kiện, hội nghị,
          khách hàng.
        </li>
      </ul>

      {/* IMAGE */}
      <img
        src={sotay}
        alt="In sổ tay"
        className="w-full max-w-2xl rounded-lg shadow-lg mx-auto"
      />

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Lợi Ích Khi In Sổ Tay Tại Chúng Tôi
      </h3>
      <p>
        Chúng tôi cung cấp dịch vụ in sổ tay với nhiều lựa chọn như bìa cứng,
        bìa da, đóng lò xo, đóng keo… cùng công nghệ in hiện đại giúp sản phẩm
        bền đẹp và sang trọng.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Thiết kế theo yêu cầu</li>
        <li>In sắc nét, màu chuẩn</li>
        <li>Gia công chắc chắn, bền đẹp</li>
        <li>Giá hợp lý cho doanh nghiệp và cá nhân</li>
      </ul>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Ứng Dụng Của Sổ Tay
      </h3>
      <p>
        Sổ tay được sử dụng rộng rãi trong học tập, văn phòng, doanh nghiệp hoặc
        làm quà tặng quảng cáo.
      </p>
      <p>
        Nếu bạn đang tìm một sản phẩm vừa hữu ích vừa giúp quảng bá thương hiệu,
        in sổ tay chính là lựa chọn lý tưởng.
      </p>
    </div>
  );
};

export default InSoTay;
