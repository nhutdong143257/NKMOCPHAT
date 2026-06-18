import React from "react";
import tailieu from "../assets/image/service/tailieu.jpg";

const InTaiLieu = () => {
  return (
    <div className="space-y-4 leading-relaxed text-gray-700">
      {/* TITLE */}
      <h2 className="text-2xl font-bold text-lime-700 uppercase">
        In Tài Liệu: Giải Pháp In Ấn Nhanh Chóng & Chuyên Nghiệp
      </h2>

      {/* INTRO */}
      <p>
        Tài liệu là phần không thể thiếu trong học tập, làm việc và kinh doanh, giúp truyền tải thông tin một cách rõ ràng và hiệu quả.
      </p>
      <p>
        Một bộ tài liệu được in sắc nét, trình bày chuyên nghiệp sẽ giúp nâng cao hiệu quả sử dụng và tạo ấn tượng tốt với người đọc.
      </p>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Tại Sao Nên In Tài Liệu?
      </h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Trình bày rõ ràng:</strong> Nội dung dễ đọc, bố cục khoa học.
        </li>
        <li>
          <strong>Tăng hiệu quả làm việc:</strong> Hỗ trợ học tập, họp hành và đào tạo.
        </li>
        <li>
          <strong>Tiện lợi sử dụng:</strong> Dễ mang theo và tra cứu nhanh chóng.
        </li>
        <li>
          <strong>Đa dạng hình thức:</strong> In đen trắng hoặc in màu theo nhu cầu.
        </li>
      </ul>

      {/* IMAGE */}
      <img
        src={tailieu}
        alt="In tài liệu"
        className="w-full max-w-2xl rounded-lg shadow-lg mx-auto"
      />

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Lợi Ích Khi In Tài Liệu Tại Chúng Tôi
      </h3>
      <p>
        Chúng tôi cung cấp dịch vụ in tài liệu với nhiều lựa chọn như đóng lò xo, đóng gáy keo, bìa nhựa… phù hợp cho học tập, hội thảo và công việc văn phòng.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>In nhanh, lấy liền</li>
        <li>Chất lượng in sắc nét</li>
        <li>Đóng gáy chắc chắn, tiện dụng</li>
        <li>Giá hợp lý cho cá nhân và doanh nghiệp</li>
      </ul>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Ứng Dụng Của Tài Liệu
      </h3>
      <p>
        Tài liệu được sử dụng rộng rãi trong học tập, đào tạo, hội thảo, doanh nghiệp và các hoạt động văn phòng.
      </p>
      <p>
        Nếu bạn cần in tài liệu nhanh chóng, rõ nét và chuyên nghiệp, đây chính là giải pháp tối ưu cho mọi nhu cầu.
      </p>
    </div>
  );
};

export default InTaiLieu;