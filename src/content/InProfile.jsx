import React from "react";
import profile from "../assets/image/service/profile.jpg";

const InProfile = () => {
  return (
    <div className="space-y-4 leading-relaxed text-gray-700">
      {/* TITLE */}
      <h2 className="text-2xl font-bold text-lime-700 uppercase">
        In Profile Công Ty: Xây Dựng Hình Ảnh Doanh Nghiệp Chuyên Nghiệp
      </h2>

      {/* INTRO */}
      <p>
        Profile công ty (hồ sơ năng lực) là tài liệu quan trọng giúp doanh nghiệp
        giới thiệu tổng quan về năng lực, kinh nghiệm và giá trị cốt lõi đến
        khách hàng và đối tác. Một cuốn profile được thiết kế bài bản và in ấn
        chất lượng cao sẽ giúp doanh nghiệp tạo dựng niềm tin ngay từ lần tiếp
        xúc đầu tiên.
      </p>

      <p>
        Trong môi trường kinh doanh cạnh tranh, profile không chỉ là tài liệu
        giới thiệu mà còn là công cụ marketing mạnh mẽ giúp nâng cao hình ảnh
        thương hiệu và tăng cơ hội hợp tác.
      </p>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Tại Sao Profile Công Ty Quan Trọng?
      </h3>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Thể hiện năng lực doanh nghiệp:</strong> Giúp khách hàng hiểu rõ
          về quy mô, kinh nghiệm và lĩnh vực hoạt động.
        </li>
        <li>
          <strong>Tăng độ uy tín:</strong> Profile chuyên nghiệp giúp tạo niềm tin
          với đối tác và khách hàng.
        </li>
        <li>
          <strong>Hỗ trợ bán hàng & đấu thầu:</strong> Là tài liệu không thể thiếu
          trong các dự án, hợp đồng.
        </li>
        <li>
          <strong>Xây dựng thương hiệu:</strong> Thể hiện hình ảnh doanh nghiệp
          rõ ràng và nhất quán.
        </li>
      </ul>

      {/* IMAGE */}
      <img
        src={profile}
        alt="In profile công ty"
        className="w-full max-w-2xl rounded-lg shadow-lg mx-auto"
      />

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Lợi Ích Khi In Profile Tại Chúng Tôi
      </h3>

      <p>
        Chúng tôi cung cấp dịch vụ thiết kế và in profile chuyên nghiệp với đa
        dạng kích thước, chất liệu giấy cao cấp cùng nhiều kiểu đóng gáy như keo
        nhiệt, khâu chỉ hoặc lò xo. Mỗi sản phẩm đều được kiểm tra kỹ lưỡng để
        đảm bảo chất lượng tốt nhất.
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>Thiết kế profile theo nhận diện thương hiệu</li>
        <li>In ấn sắc nét, màu chuẩn</li>
        <li>Đóng cuốn chắc chắn, sang trọng</li>
        <li>Giá tốt cho số lượng lớn</li>
      </ul>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Ứng Dụng Của Profile
      </h3>

      <p>
        Profile được sử dụng trong nhiều trường hợp như gặp gỡ khách hàng, gửi
        đối tác, tham gia đấu thầu hoặc trình bày năng lực doanh nghiệp. Đây là
        tài liệu quan trọng giúp doanh nghiệp ghi điểm và tạo lợi thế cạnh tranh.
      </p>

      <p>
        Nếu bạn muốn nâng cao hình ảnh thương hiệu và tăng cơ hội hợp tác, đầu tư
        vào một cuốn profile chuyên nghiệp chính là bước đi đúng đắn.
      </p>
    </div>
  );
};

export default InProfile;