import React from "react";
import hiflex from "../assets/image/service/banner.jpg"; // bạn có thể đổi sang ảnh hiflex riêng nếu có

const InHiflex = () => {
  return (
    <div className="space-y-4 leading-relaxed text-gray-700">
      {/* TITLE */}
      <h2 className="text-2xl font-bold text-lime-700 uppercase">
        In Hiflex: Giải Pháp In Bạt Quảng Cáo Giá Tốt & Bền Bỉ
      </h2>

      {/* INTRO */}
      <p>
        In hiflex (in bạt) là phương pháp in quảng cáo phổ biến nhờ chi phí thấp
        và độ bền cao. Đây là lựa chọn lý tưởng cho các nhu cầu quảng cáo ngoài trời
        như banner, bảng hiệu, backdrop hay các chương trình khuyến mãi.
      </p>

      <p>
        Với khả năng chịu nắng mưa tốt, chất liệu hiflex giúp hình ảnh luôn rõ nét,
        màu sắc ổn định theo thời gian, phù hợp cho cả sử dụng ngắn hạn và dài hạn.
      </p>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Tại Sao In Hiflex Được Ưa Chuộng?
      </h3>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Chi phí thấp:</strong> Phù hợp với mọi ngân sách quảng cáo.
        </li>
        <li>
          <strong>Độ bền cao:</strong> Chống nước, chống nắng tốt.
        </li>
        <li>
          <strong>Kích thước linh hoạt:</strong> In được khổ lớn theo yêu cầu.
        </li>
        <li>
          <strong>Dễ thi công:</strong> Thuận tiện treo, lắp đặt nhiều vị trí.
        </li>
      </ul>

      {/* IMAGE */}
      <img
        src={hiflex}
        alt="In hiflex"
        className="w-full max-w-2xl rounded-lg shadow-lg mx-auto"
      />

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Lợi Ích Khi In Hiflex Tại Chúng Tôi
      </h3>

      <p>
        Chúng tôi sử dụng công nghệ in hiện đại giúp hình ảnh sắc nét, màu sắc
        sống động và bền màu. Ngoài ra, dịch vụ gia công như đóng khoen, hàn biên
        giúp sản phẩm chắc chắn và dễ lắp đặt.
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>In nhanh, đáp ứng số lượng lớn</li>
        <li>Màu sắc chuẩn, không lem nhòe</li>
        <li>Gia công chắc chắn, bền bỉ</li>
        <li>Giá tốt cho mọi đơn hàng</li>
      </ul>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Ứng Dụng Của In Hiflex
      </h3>

      <p>
        Hiflex được sử dụng rộng rãi trong quảng cáo ngoài trời như banner,
        bảng hiệu, backdrop sự kiện, biển quảng cáo, chương trình khuyến mãi
        và các chiến dịch marketing ngắn hạn.
      </p>

      <p>
        Nếu bạn cần một giải pháp quảng cáo tiết kiệm, bền bỉ và hiệu quả,
        in hiflex chính là lựa chọn tối ưu.
      </p>
    </div>
  );
};

export default InHiflex;