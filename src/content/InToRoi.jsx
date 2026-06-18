import React from "react";
import toroi from "../assets/image/service/toroi.jpg";

const InToRoi = () => {
  return (
    <div className="space-y-4 leading-relaxed text-gray-700">
      {/* TITLE */}
      <h2 className="text-2xl font-bold text-lime-700 uppercase">
        In Tờ Rơi: Giải Pháp Marketing Hiệu Quả & Tiết Kiệm
      </h2>

      {/* INTRO */}
      <p>
        In tờ rơi là một trong những hình thức quảng cáo truyền thống nhưng vẫn
        mang lại hiệu quả cao trong việc tiếp cận khách hàng. Với chi phí thấp
        nhưng khả năng lan tỏa mạnh mẽ, tờ rơi giúp doanh nghiệp nhanh chóng đưa
        thông tin sản phẩm, dịch vụ đến đúng đối tượng mục tiêu.
      </p>

      <p>
        Một thiết kế tờ rơi ấn tượng kết hợp với chất lượng in sắc nét sẽ giúp
        bạn thu hút sự chú ý ngay lập tức và tăng khả năng chuyển đổi khách hàng.
        Đây chính là công cụ marketing không thể thiếu trong các chiến dịch khai
        trương, khuyến mãi hoặc quảng bá thương hiệu.
      </p>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Tại Sao Tờ Rơi Vẫn Hiệu Quả?
      </h3>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Tiếp cận trực tiếp:</strong> Đưa thông tin đến tay khách hàng
          một cách nhanh chóng và trực quan.
        </li>
        <li>
          <strong>Chi phí thấp:</strong> Phù hợp với mọi quy mô doanh nghiệp, từ
          nhỏ đến lớn.
        </li>
        <li>
          <strong>Dễ phân phối:</strong> Phát tại sự kiện, cửa hàng, khu dân cư
          hoặc điểm đông người.
        </li>
        <li>
          <strong>Tăng nhận diện thương hiệu:</strong> Giúp khách hàng nhớ đến
          sản phẩm và dịch vụ của bạn.
        </li>
      </ul>

      {/* IMAGE */}
      <img
        src={toroi}
        alt="In tờ rơi"
        className="w-full max-w-2xl rounded-lg shadow-lg mx-auto"
      />

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Lợi Ích Khi In Tờ Rơi Tại Chúng Tôi
      </h3>

      <p>
        Chúng tôi cung cấp dịch vụ in tờ rơi chất lượng cao với đa dạng kích
        thước và chất liệu giấy như couche, bristol, ford… phù hợp với nhiều mục
        đích sử dụng khác nhau. Công nghệ in hiện đại giúp màu sắc sắc nét, hình
        ảnh sống động và độ bền cao.
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>In số lượng lớn với giá tốt</li>
        <li>Hỗ trợ thiết kế chuyên nghiệp</li>
        <li>Giao hàng nhanh chóng</li>
        <li>Đa dạng kích thước và định lượng giấy</li>
      </ul>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Ứng Dụng Của Tờ Rơi
      </h3>

      <p>
        Tờ rơi được sử dụng rộng rãi trong nhiều lĩnh vực như quảng cáo sản phẩm,
        khai trương cửa hàng, sự kiện, giáo dục, bất động sản và dịch vụ ăn uống.
        Đây là công cụ truyền thông linh hoạt, dễ triển khai và mang lại hiệu quả
        nhanh chóng.
      </p>

      <p>
        Dù bạn đang muốn quảng bá một chương trình khuyến mãi hay xây dựng thương
        hiệu, tờ rơi luôn là lựa chọn tối ưu để tiếp cận khách hàng một cách hiệu
        quả và tiết kiệm chi phí.
      </p>
    </div>
  );
};

export default InToRoi;