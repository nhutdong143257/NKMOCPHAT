import React from "react";
import decalxe from "../assets/image/service/decalxe.webp";

const InDecalXe = () => {
  return (
    <div className="space-y-4 leading-relaxed text-gray-700">
      {/* TITLE */}
      <h2 className="text-2xl font-bold text-lime-700 uppercase">
        Decal Xe: Giải Pháp Trang Trí & Quảng Cáo Ấn Tượng Trên Mọi Hành Trình
      </h2>

      {/* INTRO */}
      <p>
        Decal xe không chỉ giúp bảo vệ lớp sơn zin mà còn là cách thể hiện cá
        tính, phong cách riêng hoặc quảng bá thương hiệu hiệu quả. Với thiết kế
        đa dạng và công nghệ in hiện đại, decal xe đang trở thành xu hướng được
        nhiều cá nhân và doanh nghiệp lựa chọn.
      </p>

      <p>
        Từ xe máy, ô tô cá nhân đến xe dịch vụ, xe công ty – decal xe giúp bạn
        nổi bật trên mọi cung đường và tạo ấn tượng mạnh với người nhìn.
      </p>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Tại Sao Nên Dán Decal Xe?
      </h3>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Bảo vệ lớp sơn:</strong> Hạn chế trầy xước và tác động từ môi
          trường.
        </li>
        <li>
          <strong>Tăng tính thẩm mỹ:</strong> Làm mới diện mạo xe theo phong cách
          riêng.
        </li>
        <li>
          <strong>Quảng cáo di động:</strong> Biến phương tiện thành công cụ
          marketing hiệu quả.
        </li>
        <li>
          <strong>Dễ thay đổi:</strong> Có thể bóc và thay decal mới khi cần.
        </li>
      </ul>

      {/* IMAGE */}
      <img
        src={decalxe}
        alt="Decal xe"
        className="w-full max-w-2xl rounded-lg shadow-lg mx-auto"
      />

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Lợi Ích Khi In Decal Xe Tại Chúng Tôi
      </h3>

      <p>
        Chúng tôi sử dụng chất liệu decal cao cấp, bám dính tốt, chống nước,
        chống phai màu và chịu được điều kiện thời tiết khắc nghiệt. Công nghệ
        in hiện đại giúp hình ảnh sắc nét, màu sắc chuẩn và bền theo thời gian.
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>Decal chất lượng cao, bền màu</li>
        <li>Thiết kế theo yêu cầu riêng</li>
        <li>In sắc nét, chuẩn màu</li>
        <li>Thi công nhanh chóng, chuyên nghiệp</li>
      </ul>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Ứng Dụng Của Decal Xe
      </h3>

      <p>
        Decal xe được sử dụng phổ biến cho xe cá nhân, xe dịch vụ (Grab, taxi),
        xe công ty, xe quảng cáo thương hiệu… Đây là hình thức marketing di động
        giúp tiếp cận hàng ngàn khách hàng mỗi ngày.
      </p>

      <p>
        Nếu bạn muốn chiếc xe của mình nổi bật hơn hoặc tận dụng để quảng bá
        thương hiệu, decal xe chính là giải pháp tối ưu và tiết kiệm chi phí.
      </p>
    </div>
  );
};

export default InDecalXe;