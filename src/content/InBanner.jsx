import React from "react";
import banner from "../assets/image/service/banner.jpg";

const InBanner = () => {
  return (
    <div className="space-y-4 leading-relaxed text-gray-700">
      {/* TITLE */}
      <h2 className="text-2xl font-bold text-lime-700 uppercase">
        In Banner: Giải Pháp Quảng Cáo Nổi Bật & Thu Hút Mọi Ánh Nhìn
      </h2>

      {/* INTRO */}
      <p>
        In banner là một trong những hình thức quảng cáo hiệu quả nhất hiện nay,
        giúp doanh nghiệp truyền tải thông điệp một cách trực quan và nhanh chóng
        đến khách hàng. Với kích thước lớn, màu sắc nổi bật, banner dễ dàng thu
        hút sự chú ý tại các khu vực đông người.
      </p>

      <p>
        Dù sử dụng trong sự kiện, khai trương, quảng cáo ngoài trời hay trong nhà,
        banner luôn là công cụ marketing mạnh mẽ giúp tăng độ nhận diện thương
        hiệu và thúc đẩy doanh số.
      </p>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Tại Sao Banner Lại Quan Trọng?
      </h3>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Thu hút sự chú ý:</strong> Kích thước lớn, màu sắc nổi bật giúp
          nổi bật giữa đám đông.
        </li>
        <li>
          <strong>Truyền tải thông điệp nhanh:</strong> Nội dung ngắn gọn, dễ hiểu,
          tiếp cận khách hàng ngay lập tức.
        </li>
        <li>
          <strong>Chi phí hợp lý:</strong> Hiệu quả cao nhưng chi phí đầu tư thấp.
        </li>
        <li>
          <strong>Đa dạng ứng dụng:</strong> Phù hợp nhiều mục đích như quảng cáo,
          sự kiện, hội chợ, khai trương.
        </li>
      </ul>

      {/* IMAGE */}
      <img
        src={banner}
        alt="In banner"
        className="w-full max-w-2xl rounded-lg shadow-lg mx-auto"
      />

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Lợi Ích Khi In Banner Tại Chúng Tôi
      </h3>

      <p>
        Chúng tôi cung cấp dịch vụ in banner với công nghệ hiện đại, đảm bảo hình
        ảnh sắc nét, màu sắc chuẩn và độ bền cao. Sử dụng chất liệu bạt hiflex,
        PP hoặc canvas phù hợp cho cả trong nhà và ngoài trời.
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>In khổ lớn, không giới hạn kích thước</li>
        <li>Màu sắc tươi sáng, bền màu lâu dài</li>
        <li>Gia công chắc chắn, dễ lắp đặt</li>
        <li>Thiết kế banner theo yêu cầu</li>
      </ul>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Ứng Dụng Của Banner
      </h3>

      <p>
        Banner được sử dụng rộng rãi trong quảng cáo cửa hàng, sự kiện, hội chợ,
        chương trình khuyến mãi, triển lãm và các chiến dịch marketing ngoài trời.
        Đây là giải pháp giúp doanh nghiệp tiếp cận khách hàng nhanh chóng và hiệu quả.
      </p>

      <p>
        Nếu bạn đang tìm kiếm một hình thức quảng cáo dễ triển khai, chi phí hợp lý
        và hiệu quả cao, in banner chắc chắn là lựa chọn không thể bỏ qua.
      </p>
    </div>
  );
};

export default InBanner;