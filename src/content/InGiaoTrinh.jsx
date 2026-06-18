import React from "react";
import giaotrinh from "../assets/image/service/giaotrinh.jpg";

const InGiaoTrinh = () => {
  return (
    <div className="space-y-4 leading-relaxed text-gray-700">
      {/* TITLE */}
      <h2 className="text-2xl font-bold text-lime-700 uppercase">
        In Giáo Trình: Giải Pháp Tài Liệu Học Tập Chuyên Nghiệp
      </h2>

      {/* INTRO */}
      <p>
        Giáo trình là tài liệu quan trọng trong giảng dạy và học tập, giúp
        truyền tải kiến thức một cách hệ thống và khoa học.
      </p>
      <p>
        Một cuốn giáo trình được in rõ ràng, trình bày chuyên nghiệp sẽ hỗ trợ
        hiệu quả cho việc học tập và giảng dạy.
      </p>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Tại Sao Nên In Giáo Trình?
      </h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Trình bày rõ ràng:</strong> Nội dung dễ đọc, bố cục khoa học
          giúp tiếp thu kiến thức tốt hơn.
        </li>
        <li>
          <strong>Tăng hiệu quả học tập:</strong> Tài liệu chất lượng hỗ trợ
          người học và giảng viên.
        </li>
        <li>
          <strong>Độ bền cao:</strong> Sử dụng lâu dài mà không bị hư hỏng.
        </li>
        <li>
          <strong>Tiện lợi sử dụng:</strong> Dễ mang theo, dễ tra cứu.
        </li>
      </ul>

      {/* IMAGE */}
      <img
        src={giaotrinh}
        alt="In giáo trình"
        className="w-full max-w-2xl rounded-lg shadow-lg mx-auto"
      />

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Lợi Ích Khi In Giáo Trình Tại Chúng Tôi
      </h3>
      <p>
        Chúng tôi cung cấp dịch vụ in giáo trình với nhiều lựa chọn như đóng lò
        xo, đóng keo nhiệt, bìa mềm hoặc bìa cứng… phù hợp với nhu cầu sử dụng
        trong học tập và giảng dạy.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>In rõ nét, đúng chuẩn nội dung</li>
        <li>Đóng gáy chắc chắn, tiện dụng</li>
        <li>Chất liệu giấy đa dạng</li>
        <li>Giá hợp lý cho học sinh, sinh viên và giảng viên</li>
      </ul>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Ứng Dụng Của Giáo Trình
      </h3>
      <p>
        Giáo trình được sử dụng rộng rãi trong trường học, trung tâm đào tạo,
        doanh nghiệp để phục vụ việc giảng dạy và học tập.
      </p>
      <p>
        Nếu bạn cần tài liệu học tập rõ ràng, bền đẹp và chuyên nghiệp, in giáo
        trình chính là lựa chọn tối ưu.
      </p>
    </div>
  );
};

export default InGiaoTrinh;
