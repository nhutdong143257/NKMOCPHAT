import React from "react";
import decalkinh from "../assets/image/service/decalkinh.jpg";

const InDecalKinh = () => {
  return (
    <div className="space-y-4 leading-relaxed text-gray-700">
      {/* TITLE */}
      <h2 className="text-2xl font-bold text-lime-700 uppercase">
        In Decal Kính: Giải Pháp Trang Trí & Quảng Cáo Hiện Đại
      </h2>

      {/* INTRO */}
      <p>
        In decal kính là giải pháp phổ biến giúp trang trí không gian và quảng
        bá thương hiệu một cách hiệu quả. Với khả năng dán trực tiếp lên bề mặt
        kính, decal mang lại vẻ đẹp hiện đại, chuyên nghiệp cho cửa hàng, văn
        phòng và showroom.
      </p>

      <p>
        Không chỉ giúp tăng tính thẩm mỹ, decal kính còn hỗ trợ che chắn ánh
        sáng, tạo sự riêng tư và nâng cao trải nghiệm không gian cho người sử
        dụng.
      </p>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Tại Sao Nên In Decal Kính?
      </h3>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Tăng nhận diện thương hiệu:</strong> Logo và hình ảnh nổi bật
          ngay trên mặt kính.
        </li>
        <li>
          <strong>Trang trí không gian:</strong> Giúp cửa hàng, văn phòng trở nên
          chuyên nghiệp và thu hút hơn.
        </li>
        <li>
          <strong>Tạo sự riêng tư:</strong> Hạn chế tầm nhìn từ bên ngoài vào.
        </li>
        <li>
          <strong>Dễ thi công:</strong> Dán nhanh, dễ thay thế khi cần.
        </li>
      </ul>

      {/* IMAGE */}
      <img
        src={decalkinh}
        alt="In decal kính"
        className="w-full max-w-2xl rounded-lg shadow-lg mx-auto"
      />

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Lợi Ích Khi In Decal Kính Tại Chúng Tôi
      </h3>

      <p>
        Chúng tôi cung cấp dịch vụ in decal kính với nhiều loại như decal trong,
        decal mờ (frosted), decal lưới… phù hợp với từng nhu cầu sử dụng. Công
        nghệ in hiện đại đảm bảo hình ảnh sắc nét, màu sắc bền đẹp và chống phai
        theo thời gian.
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>In sắc nét, màu chuẩn</li>
        <li>Đa dạng chất liệu decal kính</li>
        <li>Thi công nhanh chóng</li>
        <li>Độ bền cao, chống nước</li>
      </ul>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Ứng Dụng Của Decal Kính
      </h3>

      <p>
        Decal kính được sử dụng rộng rãi trong cửa hàng, showroom, văn phòng,
        quán café, trung tâm thương mại… giúp quảng bá thương hiệu và tạo điểm
        nhấn không gian.
      </p>

      <p>
        Nếu bạn muốn nâng cao hình ảnh doanh nghiệp và tối ưu không gian trưng
        bày, in decal kính chính là lựa chọn hiệu quả và tiết kiệm.
      </p>
    </div>
  );
};

export default InDecalKinh;