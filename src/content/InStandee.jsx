import React from "react";
import standee from "../assets/image/service/standee.jpeg";

const InStandee = () => {
  return (
    <div className="space-y-4 leading-relaxed text-gray-700">
      {/* TITLE */}
      <h2 className="text-2xl font-bold text-lime-700 uppercase">
        In Standee: Giải Pháp Quảng Cáo Linh Hoạt & Thu Hút Tại Điểm Bán
      </h2>

      {/* INTRO */}
      <p>
        Standee là một trong những công cụ quảng cáo phổ biến và hiệu quả nhất
        hiện nay, đặc biệt trong các sự kiện, hội chợ, showroom và cửa hàng.
        Với thiết kế gọn nhẹ, dễ di chuyển và lắp đặt, standee giúp truyền tải
        thông điệp nhanh chóng đến khách hàng.
      </p>

      <p>
        Một standee được thiết kế bắt mắt, in ấn sắc nét sẽ giúp thương hiệu của
        bạn nổi bật, thu hút sự chú ý và tạo ấn tượng mạnh mẽ ngay từ cái nhìn đầu tiên.
      </p>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Tại Sao Standee Lại Quan Trọng?
      </h3>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Dễ dàng di chuyển:</strong> Thiết kế gọn nhẹ, tiện lợi cho nhiều vị trí sử dụng.
        </li>
        <li>
          <strong>Thu hút khách hàng:</strong> Hình ảnh nổi bật giúp gây chú ý nhanh chóng.
        </li>
        <li>
          <strong>Chi phí hợp lý:</strong> Hiệu quả cao nhưng giá thành thấp.
        </li>
        <li>
          <strong>Linh hoạt ứng dụng:</strong> Dùng cho sự kiện, quảng cáo, giới thiệu sản phẩm.
        </li>
      </ul>

      {/* IMAGE */}
      <img
        src={standee}
        alt="In standee"
        className="w-full max-w-2xl rounded-lg shadow-lg mx-auto"
      />

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Lợi Ích Khi In Standee Tại Chúng Tôi
      </h3>

      <p>
        Chúng tôi cung cấp dịch vụ in standee với chất lượng cao, sử dụng công nghệ
        in hiện đại đảm bảo hình ảnh sắc nét và màu sắc sống động. Kết hợp với khung
        standee chắc chắn giúp sản phẩm bền và dễ sử dụng lâu dài.
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>In nhanh, lấy liền</li>
        <li>Chất liệu bền đẹp, chống cong vênh</li>
        <li>Hỗ trợ thiết kế theo yêu cầu</li>
        <li>Giá tốt cho số lượng lớn</li>
      </ul>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Ứng Dụng Của Standee
      </h3>

      <p>
        Standee thường được sử dụng trong các sự kiện, hội chợ, khai trương,
        trung tâm thương mại, showroom và các chiến dịch quảng cáo tại điểm bán.
        Đây là công cụ hỗ trợ marketing hiệu quả giúp tăng khả năng tiếp cận
        khách hàng.
      </p>

      <p>
        Nếu bạn đang cần một giải pháp quảng cáo gọn nhẹ, tiết kiệm và hiệu quả,
        standee chính là lựa chọn tối ưu cho doanh nghiệp của bạn.
      </p>
    </div>
  );
};

export default InStandee;