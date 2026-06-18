import React from "react";
import photobook from "../assets/image/service/photobook.jpg";

const InPhotobook = () => {
  return (
    <div className="space-y-4 leading-relaxed text-gray-700">
      {/* TITLE */}
      <h2 className="text-2xl font-bold text-lime-700 uppercase">
        In Photobook: Lưu Giữ Khoảnh Khắc Theo Cách Nghệ Thuật
      </h2>

      {/* INTRO */}
      <p>
        Photobook là dạng album ảnh cao cấp giúp lưu giữ những khoảnh khắc đáng
        nhớ một cách chuyên nghiệp và đầy cảm xúc.
      </p>
      <p>
        Với thiết kế hiện đại và chất lượng in ấn sắc nét, photobook không chỉ
        là nơi lưu giữ hình ảnh mà còn là một sản phẩm nghệ thuật mang dấu ấn cá
        nhân.
      </p>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Tại Sao Nên In Photobook?
      </h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Lưu giữ kỷ niệm:</strong> Ghi lại những khoảnh khắc quan trọng
          như cưới hỏi, du lịch, gia đình.
        </li>
        <li>
          <strong>Thiết kế sang trọng:</strong> Bố cục đẹp mắt, chuyên nghiệp
          như một cuốn tạp chí.
        </li>
        <li>
          <strong>Chất lượng hình ảnh cao:</strong> In sắc nét, màu sắc trung
          thực.
        </li>
        <li>
          <strong>Ý nghĩa làm quà tặng:</strong> Phù hợp làm quà cho người thân,
          bạn bè hoặc đối tác.
        </li>
      </ul>

      {/* IMAGE */}
      <img
        src={photobook}
        alt="In photobook"
        className="w-full max-w-2xl rounded-lg shadow-lg mx-auto"
      />

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Lợi Ích Khi In Photobook Tại Chúng Tôi
      </h3>
      <p>
        Chúng tôi cung cấp dịch vụ in photobook với nhiều lựa chọn như bìa cứng,
        bìa da, mở phẳng 180 độ… cùng công nghệ in hiện đại giúp hình ảnh sắc
        nét, bền màu theo thời gian.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Thiết kế theo yêu cầu cá nhân</li>
        <li>In ảnh chất lượng cao, màu chuẩn</li>
        <li>Chất liệu cao cấp, bền đẹp</li>
        <li>Gia công tỉ mỉ, sang trọng</li>
      </ul>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Ứng Dụng Của Photobook
      </h3>
      <p>
        Photobook được sử dụng phổ biến cho album cưới, kỷ niệm gia đình, du
        lịch, sự kiện hoặc portfolio cá nhân.
      </p>
      <p>
        Nếu bạn muốn lưu giữ những khoảnh khắc theo cách tinh tế và đẳng cấp,
        photobook chính là lựa chọn hoàn hảo.
      </p>
    </div>
  );
};

export default InPhotobook;
