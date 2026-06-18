import React from "react";
import tuivai from "../assets/image/service/tuivai.jpg";

const InTuiVai = () => {
  return (
    <div className="space-y-4 leading-relaxed text-gray-700">
      {/* TITLE */}
      <h2 className="text-2xl font-bold text-lime-700 uppercase">
        In Túi Vải: Giải Pháp Thân Thiện Môi Trường & Quảng Bá Thương Hiệu
      </h2>

      {/* INTRO */}
      <p>
        Túi vải là sản phẩm thân thiện với môi trường, được sử dụng rộng rãi thay thế túi nilon trong đời sống và kinh doanh.
      </p>
      <p>
        Việc in logo, thông điệp lên túi vải không chỉ giúp quảng bá thương hiệu mà còn thể hiện trách nhiệm với môi trường.
      </p>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Tại Sao Nên In Túi Vải?
      </h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Thân thiện môi trường:</strong> Giảm thiểu rác thải nhựa.
        </li>
        <li>
          <strong>Quảng bá thương hiệu:</strong> Logo xuất hiện mỗi khi khách hàng sử dụng.
        </li>
        <li>
          <strong>Độ bền cao:</strong> Sử dụng nhiều lần, tiết kiệm chi phí.
        </li>
        <li>
          <strong>Thẩm mỹ cao:</strong> Thiết kế đẹp, phù hợp nhiều đối tượng.
        </li>
      </ul>

      {/* IMAGE */}
      <img
        src={tuivai}
        alt="In túi vải"
        className="w-full max-w-2xl rounded-lg shadow-lg mx-auto"
      />

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Lợi Ích Khi In Túi Vải Tại Chúng Tôi
      </h3>
      <p>
        Chúng tôi cung cấp dịch vụ in túi vải với nhiều loại như túi canvas, túi không dệt… cùng công nghệ in hiện đại giúp hình ảnh sắc nét và bền màu.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Thiết kế theo nhận diện thương hiệu</li>
        <li>In sắc nét, bền màu</li>
        <li>Chất liệu vải chắc chắn</li>
        <li>Giá hợp lý cho doanh nghiệp</li>
      </ul>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Ứng Dụng Của Túi Vải
      </h3>
      <p>
        Túi vải được sử dụng trong cửa hàng, siêu thị, sự kiện, hội chợ hoặc làm quà tặng quảng cáo.
      </p>
      <p>
        Nếu bạn muốn vừa quảng bá thương hiệu vừa góp phần bảo vệ môi trường, in túi vải chính là lựa chọn tối ưu.
      </p>
    </div>
  );
};

export default InTuiVai;