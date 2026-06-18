import React from "react";
import tuigiay from "../assets/image/service/tuigiay.jpg";

const InTuiGiay = () => {
  return (
    <div className="space-y-4 leading-relaxed text-gray-700">
      {/* TITLE */}
      <h2 className="text-2xl font-bold text-lime-700 uppercase">
        In Túi Giấy: Giải Pháp Bao Bì Thân Thiện & Nâng Tầm Thương Hiệu
      </h2>

      {/* INTRO */}
      <p>
        Túi giấy không chỉ là vật dụng để đựng sản phẩm mà còn là công cụ quảng
        bá thương hiệu hiệu quả. Một chiếc túi giấy được thiết kế đẹp mắt sẽ giúp
        doanh nghiệp tạo ấn tượng tốt với khách hàng và tăng độ nhận diện thương hiệu.
      </p>

      <p>
        Trong xu hướng tiêu dùng xanh hiện nay, túi giấy ngày càng được ưa chuộng
        nhờ tính thân thiện với môi trường và khả năng tái sử dụng cao.
      </p>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Tại Sao Túi Giấy Lại Quan Trọng?
      </h3>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Thân thiện môi trường:</strong> Dễ phân hủy và tái chế.
        </li>
        <li>
          <strong>Quảng bá thương hiệu:</strong> Logo và thông tin được in trực tiếp trên túi.
        </li>
        <li>
          <strong>Tăng tính chuyên nghiệp:</strong> Giúp cửa hàng trở nên cao cấp hơn.
        </li>
        <li>
          <strong>Tiện lợi sử dụng:</strong> Dễ mang theo và sử dụng nhiều lần.
        </li>
      </ul>

      {/* IMAGE */}
      <img
        src={tuigiay}
        alt="In túi giấy"
        className="w-full max-w-2xl rounded-lg shadow-lg mx-auto"
      />

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Lợi Ích Khi In Túi Giấy Tại Chúng Tôi
      </h3>

      <p>
        Chúng tôi cung cấp dịch vụ in túi giấy với nhiều chất liệu như kraft,
        couche, ivory… cùng các kỹ thuật gia công như cán màng, ép kim, dập nổi
        giúp sản phẩm bền đẹp và sang trọng.
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>Thiết kế theo yêu cầu thương hiệu</li>
        <li>Chất liệu chắc chắn, chịu lực tốt</li>
        <li>In ấn sắc nét, màu chuẩn</li>
        <li>Giá tốt cho số lượng lớn</li>
      </ul>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Ứng Dụng Của Túi Giấy
      </h3>

      <p>
        Túi giấy được sử dụng phổ biến trong các cửa hàng thời trang, mỹ phẩm,
        quà tặng, siêu thị và nhiều lĩnh vực kinh doanh khác. Đây là giải pháp
        bao bì vừa tiện lợi vừa góp phần nâng cao hình ảnh thương hiệu.
      </p>

      <p>
        Nếu bạn muốn kết hợp giữa tính thẩm mỹ, tiện dụng và bảo vệ môi trường,
        in túi giấy chính là lựa chọn hoàn hảo.
      </p>
    </div>
  );
};

export default InTuiGiay;