import React from "react";
import decal from "../assets/image/service/decal.jpeg";

const InDecal = () => {
  return (
    <div className="space-y-4 leading-relaxed text-gray-700">
      {/* TITLE */}
      <h2 className="text-2xl font-bold text-lime-700 uppercase">
        In Decal: Giải Pháp Trang Trí & Quảng Cáo Linh Hoạt, Hiệu Quả
      </h2>

      {/* INTRO */}
      <p>
        In decal là phương pháp in ấn phổ biến giúp truyền tải thông điệp quảng
        cáo, trang trí không gian hoặc nhận diện thương hiệu một cách linh hoạt.
        Với khả năng bám dính tốt trên nhiều bề mặt, decal mang lại sự tiện lợi
        và tính ứng dụng cao trong thực tế.
      </p>

      <p>
        Từ decal dán kính, dán tường đến decal sản phẩm, tất cả đều góp phần làm
        nổi bật hình ảnh thương hiệu và tạo ấn tượng mạnh mẽ với khách hàng.
      </p>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Tại Sao Nên In Decal?
      </h3>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Dễ dàng sử dụng:</strong> Dán nhanh chóng trên nhiều bề mặt
          khác nhau.
        </li>
        <li>
          <strong>Chi phí hợp lý:</strong> Phù hợp với nhiều nhu cầu quảng cáo.
        </li>
        <li>
          <strong>Đa dạng ứng dụng:</strong> Trang trí, quảng cáo, dán sản phẩm…
        </li>
        <li>
          <strong>Hiệu quả cao:</strong> Thu hút sự chú ý và tăng nhận diện
          thương hiệu.
        </li>
      </ul>

      {/* IMAGE */}
      <img
        src={decal}
        alt="In decal"
        className="w-full max-w-2xl rounded-lg shadow-lg mx-auto"
      />

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Lợi Ích Khi In Decal Tại Chúng Tôi
      </h3>

      <p>
        Chúng tôi cung cấp dịch vụ in decal với nhiều chất liệu như decal giấy,
        decal nhựa, decal trong suốt, decal lưới, decal phản quang… đáp ứng đa
        dạng nhu cầu sử dụng. Công nghệ in hiện đại đảm bảo hình ảnh sắc nét,
        màu sắc bền đẹp và chống phai theo thời gian.
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>In sắc nét, màu chuẩn</li>
        <li>Đa dạng chất liệu decal</li>
        <li>Bám dính tốt, độ bền cao</li>
        <li>Thiết kế theo yêu cầu</li>
      </ul>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Ứng Dụng Của Decal
      </h3>

      <p>
        Decal được sử dụng rộng rãi trong quảng cáo cửa hàng, trang trí nội thất,
        dán kính văn phòng, dán xe, tem nhãn sản phẩm… Đây là giải pháp linh hoạt
        và hiệu quả cho mọi nhu cầu truyền thông và branding.
      </p>

      <p>
        Nếu bạn đang tìm kiếm một phương pháp quảng cáo tiết kiệm nhưng hiệu quả,
        in decal chính là lựa chọn lý tưởng.
      </p>
    </div>
  );
};

export default InDecal;