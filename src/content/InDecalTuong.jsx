import React from "react";
import decaltuong from "../assets/image/service/decaltuong.jpg";

const InDecalTuong = () => {
  return (
    <div className="space-y-4 leading-relaxed text-gray-700">
      {/* TITLE */}
      <h2 className="text-2xl font-bold text-lime-700 uppercase">
        Decal Tường: Giải Pháp Trang Trí Không Gian Hiện Đại & Tiết Kiệm
      </h2>

      {/* INTRO */}
      <p>
        Decal tường là lựa chọn trang trí nội thất thông minh giúp biến không
        gian trở nên sinh động, ấn tượng mà không cần thi công phức tạp. Với
        thiết kế đa dạng, decal tường phù hợp cho nhà ở, quán café, văn phòng,
        showroom hay cửa hàng kinh doanh.
      </p>

      <p>
        Không chỉ mang tính thẩm mỹ cao, decal tường còn dễ dàng thay đổi theo
        xu hướng, giúp bạn làm mới không gian nhanh chóng với chi phí tiết kiệm.
      </p>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Tại Sao Nên Sử Dụng Decal Tường?
      </h3>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Trang trí nhanh chóng:</strong> Thi công đơn giản, không cần
          sơn sửa phức tạp.
        </li>
        <li>
          <strong>Tiết kiệm chi phí:</strong> Giá thành rẻ hơn nhiều so với các
          phương pháp trang trí truyền thống.
        </li>
        <li>
          <strong>Dễ thay đổi:</strong> Có thể bóc ra và thay mới khi cần.
        </li>
        <li>
          <strong>Đa dạng mẫu mã:</strong> Phù hợp nhiều phong cách từ hiện đại
          đến nghệ thuật.
        </li>
      </ul>

      {/* IMAGE */}
      <img
        src={decaltuong}
        alt="Decal tường"
        className="w-full max-w-2xl rounded-lg shadow-lg mx-auto"
      />

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Lợi Ích Khi In Decal Tường Tại Chúng Tôi
      </h3>

      <p>
        Chúng tôi cung cấp dịch vụ in decal tường với chất liệu cao cấp, bám dính
        tốt, không bong tróc và an toàn cho bề mặt tường. Công nghệ in hiện đại
        giúp hình ảnh sắc nét, màu sắc sống động và bền màu theo thời gian.
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>In sắc nét, màu chuẩn</li>
        <li>Chất liệu bền, dễ thi công</li>
        <li>Thiết kế theo yêu cầu</li>
        <li>Phù hợp mọi không gian</li>
      </ul>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Ứng Dụng Của Decal Tường
      </h3>

      <p>
        Decal tường được sử dụng rộng rãi trong trang trí phòng khách, phòng ngủ,
        phòng trẻ em, quán café, nhà hàng, văn phòng và showroom. Đây là giải
        pháp tối ưu giúp không gian trở nên nổi bật và chuyên nghiệp hơn.
      </p>

      <p>
        Nếu bạn muốn làm mới không gian sống hoặc kinh doanh một cách nhanh chóng
        và hiệu quả, decal tường chính là lựa chọn hoàn hảo.
      </p>
    </div>
  );
};

export default InDecalTuong;