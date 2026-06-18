import React from "react";
import quatang from "../assets/image/service/quatang.png";

const InQuaTang = () => {
  return (
    <div className="space-y-4 leading-relaxed text-gray-700">
      {/* TITLE */}
      <h2 className="text-2xl font-bold text-lime-700 uppercase">
        In Quà Tặng: Giải Pháp Quảng Bá Thương Hiệu Ấn Tượng
      </h2>

      {/* INTRO */}
      <p>
        Quà tặng in ấn là một trong những phương thức quảng bá thương hiệu hiệu quả, giúp doanh nghiệp ghi dấu ấn với khách hàng và đối tác.
      </p>
      <p>
        Những sản phẩm quà tặng được thiết kế đẹp, in ấn chuyên nghiệp không chỉ mang giá trị sử dụng mà còn thể hiện sự quan tâm và chuyên nghiệp của doanh nghiệp.
      </p>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Tại Sao Nên In Quà Tặng?
      </h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Quảng bá thương hiệu:</strong> Logo và thông tin doanh nghiệp xuất hiện trên sản phẩm.
        </li>
        <li>
          <strong>Tăng độ nhận diện:</strong> Khách hàng ghi nhớ thương hiệu lâu hơn.
        </li>
        <li>
          <strong>Ý nghĩa tặng quà:</strong> Thể hiện sự tri ân đối với khách hàng, đối tác.
        </li>
        <li>
          <strong>Đa dạng sản phẩm:</strong> Có thể in trên nhiều loại quà tặng khác nhau.
        </li>
      </ul>

      {/* IMAGE */}
      <img
        src={quatang}
        alt="In quà tặng"
        className="w-full max-w-2xl rounded-lg shadow-lg mx-auto"
      />

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Lợi Ích Khi In Quà Tặng Tại Chúng Tôi
      </h3>
      <p>
        Chúng tôi cung cấp dịch vụ in quà tặng với nhiều sản phẩm như ly, áo, sổ tay, bút… cùng công nghệ in hiện đại giúp hình ảnh sắc nét và bền màu.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Thiết kế theo nhận diện thương hiệu</li>
        <li>In sắc nét, màu chuẩn</li>
        <li>Đa dạng sản phẩm quà tặng</li>
        <li>Giá hợp lý cho doanh nghiệp</li>
      </ul>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Ứng Dụng Của Quà Tặng
      </h3>
      <p>
        Quà tặng in ấn được sử dụng trong các chương trình marketing, sự kiện, hội nghị hoặc làm quà tri ân khách hàng.
      </p>
      <p>
        Nếu bạn muốn xây dựng mối quan hệ bền vững với khách hàng và nâng cao hình ảnh thương hiệu, in quà tặng chính là lựa chọn hiệu quả.
      </p>
    </div>
  );
};

export default InQuaTang;