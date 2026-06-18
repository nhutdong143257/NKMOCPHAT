import React from "react";
import book from "../assets/image/service/insach.jpg";

const InSach = () => {
  return (
    <div className="space-y-4 leading-relaxed text-gray-700">
      {/* TITLE */}
      <h2 className="text-2xl font-bold text-lime-700 uppercase">
        In Sách: Giải Pháp Xuất Bản & Trình Bày Sách Chuyên Nghiệp
      </h2>

      {/* INTRO */}
      <p>
        Sách là ấn phẩm quan trọng giúp doanh nghiệp, tác giả hay tổ chức truyền tải thông tin, kiến thức và hình ảnh một cách chuyên nghiệp. Không chỉ là phương tiện lưu trữ nội dung, sách còn thể hiện sự chuyên nghiệp và phong cách riêng của người xuất bản.
      </p>

      <p>
        Một cuốn sách được thiết kế đẹp, in ấn sắc nét sẽ giúp bạn tạo ấn tượng tốt với độc giả, khách hàng hoặc đối tác. Đây là công cụ hỗ trợ không thể thiếu trong việc quảng bá kiến thức và thương hiệu.
      </p>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Tại Sao In Sách Quan Trọng?
      </h3>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Tăng tính chuyên nghiệp:</strong> Nội dung được trình bày rõ ràng, dễ đọc, tạo sự uy tín cho tác giả hoặc doanh nghiệp.
        </li>
        <li>
          <strong>Quảng bá thương hiệu:</strong> Bìa sách, logo và thông tin được thể hiện rõ ràng, giúp ghi dấu ấn thương hiệu.
        </li>
        <li>
          <strong>Bảo vệ nội dung:</strong> Giúp sách bền đẹp, tránh hư hỏng trong quá trình sử dụng.
        </li>
        <li>
          <strong>Gây ấn tượng tốt:</strong> Tạo thiện cảm với độc giả ngay từ lần đầu tiên cầm sách.
        </li>
      </ul>

      {/* IMAGE */}
      <img
        src={book}
        alt="In sách"
        className="w-full max-w-2xl rounded-lg shadow-lg mx-auto"
      />

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Lợi Ích Khi In Sách Tại Chúng Tôi
      </h3>

      <p>
        Chúng tôi cung cấp dịch vụ in sách với nhiều loại như sách bìa mềm, bìa cứng, sách giáo khoa, sách hướng dẫn… cùng đa dạng chất liệu giấy và kỹ thuật gia công như cán màng, ép kim, phủ UV, giúp sản phẩm bền đẹp và sang trọng.
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>Thiết kế bìa theo nhận diện thương hiệu</li>
        <li>In sắc nét, màu chuẩn</li>
        <li>Gia công chắc chắn, bền đẹp</li>
        <li>Giá tốt cho tác giả và doanh nghiệp</li>
      </ul>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Ứng Dụng Của Sách
      </h3>

      <p>
        Sách được sử dụng rộng rãi trong xuất bản, giáo dục, doanh nghiệp hoặc tổ chức để truyền tải kiến thức, hướng dẫn, câu chuyện hoặc giới thiệu sản phẩm. Đây là công cụ hỗ trợ đắc lực trong việc chia sẻ thông tin và nâng cao uy tín.
      </p>

      <p>
        Nếu bạn muốn nâng cao hình ảnh thương hiệu và tạo ấn tượng chuyên nghiệp, đầu tư vào sách chất lượng chính là lựa chọn thông minh.
      </p>
    </div>
  );
};

export default InSach;