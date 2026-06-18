import React from "react";
import brochure from "../assets/image/service/brochure.jpg";

const InBrochure = () => {
  return (
    <div className="space-y-4 leading-relaxed text-gray-700">
      {/* TITLE */}
      <h2 className="text-2xl font-bold text-lime-700 uppercase">
        In Brochure: Công Cụ Marketing Tinh Gọn & Hiệu Quả
      </h2>

      {/* INTRO */}
      <p>
        Brochure là một trong những ấn phẩm marketing quan trọng giúp doanh
        nghiệp truyền tải thông tin sản phẩm, dịch vụ một cách ngắn gọn nhưng
        đầy đủ và ấn tượng. Với thiết kế gấp gọn tiện lợi, brochure dễ dàng tiếp
        cận khách hàng trong nhiều tình huống khác nhau.
      </p>

      <p>
        Một brochure được thiết kế chuyên nghiệp, hình ảnh sắc nét và nội dung
        rõ ràng sẽ giúp doanh nghiệp tạo ấn tượng mạnh, tăng khả năng ghi nhớ
        thương hiệu và thúc đẩy hành vi mua hàng.
      </p>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Tại Sao Brochure Quan Trọng?
      </h3>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Truyền tải thông tin hiệu quả:</strong> Nội dung ngắn gọn, dễ
          hiểu, tập trung vào điểm mạnh sản phẩm.
        </li>
        <li>
          <strong>Dễ dàng phân phối:</strong> Phù hợp phát tại sự kiện, showroom,
          hội chợ hoặc gửi trực tiếp cho khách hàng.
        </li>
        <li>
          <strong>Tăng nhận diện thương hiệu:</strong> Thiết kế đồng bộ giúp
          khách hàng ghi nhớ thương hiệu tốt hơn.
        </li>
        <li>
          <strong>Chi phí hợp lý:</strong> Hiệu quả marketing cao với ngân sách
          tiết kiệm.
        </li>
      </ul>

      {/* IMAGE */}
      <img
        src={brochure}
        alt="In brochure"
        className="w-full max-w-2xl rounded-lg shadow-lg mx-auto"
      />

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Lợi Ích Khi In Brochure Tại Chúng Tôi
      </h3>

      <p>
        Chúng tôi cung cấp dịch vụ in brochure với nhiều kiểu gấp như gấp đôi,
        gấp ba, ziczac… cùng đa dạng chất liệu giấy và kỹ thuật gia công như cán
        màng, phủ UV giúp brochure bền đẹp và chuyên nghiệp.
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>In nhanh, màu sắc chuẩn xác</li>
        <li>Thiết kế brochure theo yêu cầu</li>
        <li>Đa dạng kiểu gấp sáng tạo</li>
        <li>Giá tốt cho mọi số lượng</li>
      </ul>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Ứng Dụng Của Brochure
      </h3>

      <p>
        Brochure được sử dụng rộng rãi trong các lĩnh vực như du lịch, bất động
        sản, giáo dục, nhà hàng – khách sạn, spa… Đây là công cụ lý tưởng để giới
        thiệu dịch vụ, chương trình ưu đãi hoặc thông tin doanh nghiệp một cách
        trực quan và hấp dẫn.
      </p>

      <p>
        Nếu bạn đang tìm một giải pháp marketing hiệu quả, gọn nhẹ nhưng vẫn tạo
        được dấu ấn mạnh mẽ, brochure chính là lựa chọn hoàn hảo dành cho bạn.
      </p>
    </div>
  );
};

export default InBrochure;