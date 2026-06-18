import React from "react";
import folder from "../assets/image/service/folder.jpg";

const InFolder = () => {
  return (
    <div className="space-y-4 leading-relaxed text-gray-700">
      {/* TITLE */}
      <h2 className="text-2xl font-bold text-lime-700 uppercase">
        In Folder: Giải Pháp Lưu Trữ & Trình Bày Hồ Sơ Chuyên Nghiệp
      </h2>

      {/* INTRO */}
      <p>
        Folder (bìa hồ sơ) là ấn phẩm quan trọng giúp doanh nghiệp lưu trữ và
        trình bày tài liệu một cách chuyên nghiệp. Không chỉ đơn thuần là vật
        dụng đựng giấy tờ, folder còn góp phần thể hiện hình ảnh thương hiệu
        trong mắt khách hàng và đối tác.
      </p>

      <p>
        Một mẫu folder được thiết kế đẹp, in ấn sắc nét sẽ giúp bạn tạo ấn tượng
        tốt trong các buổi gặp gỡ, ký kết hợp đồng hoặc hội thảo. Đây là công cụ
        hỗ trợ không thể thiếu cho doanh nghiệp hiện đại.
      </p>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Tại Sao Folder Quan Trọng?
      </h3>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Tăng tính chuyên nghiệp:</strong> Hồ sơ được sắp xếp gọn gàng,
          dễ dàng trình bày với khách hàng.
        </li>
        <li>
          <strong>Quảng bá thương hiệu:</strong> Logo, màu sắc và thông tin được
          thể hiện rõ ràng trên folder.
        </li>
        <li>
          <strong>Bảo vệ tài liệu:</strong> Tránh nhàu nát, thất lạc giấy tờ quan
          trọng.
        </li>
        <li>
          <strong>Gây ấn tượng tốt:</strong> Tạo thiện cảm ngay từ lần tiếp xúc
          đầu tiên.
        </li>
      </ul>

      {/* IMAGE */}
      <img
        src={folder}
        alt="In folder"
        className="w-full max-w-2xl rounded-lg shadow-lg mx-auto"
      />

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Lợi Ích Khi In Folder Tại Chúng Tôi
      </h3>

      <p>
        Chúng tôi cung cấp dịch vụ in folder với nhiều kiểu dáng như folder 1
        tai, 2 tai, có khe cài namecard… cùng đa dạng chất liệu giấy và kỹ thuật
        gia công như cán màng, ép kim, phủ UV giúp sản phẩm bền đẹp và sang
        trọng.
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>Thiết kế theo nhận diện thương hiệu</li>
        <li>In sắc nét, màu chuẩn</li>
        <li>Gia công chắc chắn, bền đẹp</li>
        <li>Giá tốt cho doanh nghiệp</li>
      </ul>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Ứng Dụng Của Folder
      </h3>

      <p>
        Folder được sử dụng rộng rãi trong các doanh nghiệp, công ty, tổ chức để
        đựng hồ sơ, tài liệu, hợp đồng hoặc tài liệu giới thiệu sản phẩm. Đây là
        công cụ hỗ trợ đắc lực trong các buổi họp, hội thảo và làm việc với đối
        tác.
      </p>

      <p>
        Nếu bạn muốn nâng cao hình ảnh doanh nghiệp và tạo ấn tượng chuyên
        nghiệp, đầu tư vào folder chất lượng chính là lựa chọn thông minh.
      </p>
    </div>
  );
};

export default InFolder;