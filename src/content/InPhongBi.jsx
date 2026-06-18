import React from "react";
import phongbi from "../assets/image/service/phongbi.jpg";

const InPhongBi = () => {
  return (
    <div className="space-y-4 leading-relaxed text-gray-700">
      {/* TITLE */}
      <h2 className="text-2xl font-bold text-lime-700 uppercase">
        In Phong Bì: Giải Pháp Nhận Diện Thương Hiệu Chuyên Nghiệp
      </h2>

      {/* INTRO */}
      <p>
        Phong bì là một phần quan trọng trong bộ nhận diện thương hiệu của doanh nghiệp, thường được sử dụng trong giao dịch, gửi thư và tài liệu.
      </p>
      <p>
        Một mẫu phong bì được thiết kế đẹp, in ấn sắc nét sẽ giúp tạo ấn tượng chuyên nghiệp với khách hàng và đối tác ngay từ lần tiếp xúc đầu tiên.
      </p>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Tại Sao Nên In Phong Bì?
      </h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Tăng nhận diện thương hiệu:</strong> Logo và thông tin doanh nghiệp được thể hiện rõ ràng.
        </li>
        <li>
          <strong>Chuyên nghiệp trong giao dịch:</strong> Tạo sự tin cậy khi gửi tài liệu, hợp đồng.
        </li>
        <li>
          <strong>Bảo vệ tài liệu:</strong> Giữ giấy tờ bên trong an toàn, tránh hư hỏng.
        </li>
        <li>
          <strong>Đa dạng kích thước:</strong> Phù hợp với nhiều loại tài liệu khác nhau.
        </li>
      </ul>

      {/* IMAGE */}
      <img
        src={phongbi}
        alt="In phong bì"
        className="w-full max-w-2xl rounded-lg shadow-lg mx-auto"
      />

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Lợi Ích Khi In Phong Bì Tại Chúng Tôi
      </h3>
      <p>
        Chúng tôi cung cấp dịch vụ in phong bì với nhiều loại như phong bì A4, A5, A6, phong bì thư mời… cùng đa dạng chất liệu giấy và kỹ thuật in hiện đại.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Thiết kế theo nhận diện thương hiệu</li>
        <li>In sắc nét, màu chuẩn</li>
        <li>Chất liệu giấy bền đẹp</li>
        <li>Giá tốt cho doanh nghiệp</li>
      </ul>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Ứng Dụng Của Phong Bì
      </h3>
      <p>
        Phong bì được sử dụng rộng rãi trong doanh nghiệp, tổ chức để gửi thư, hợp đồng, tài liệu hoặc thư mời.
      </p>
      <p>
        Nếu bạn muốn xây dựng hình ảnh chuyên nghiệp và đồng bộ thương hiệu, in phong bì chính là lựa chọn cần thiết.
      </p>
    </div>
  );
};

export default InPhongBi;