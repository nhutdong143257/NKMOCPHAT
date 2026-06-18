import React from "react";
import kyyeu from "../assets/image/service/kyyeu.jpg";

const InKyYeu = () => {
  return (
    <div className="space-y-4 leading-relaxed text-gray-700">
      {/* TITLE */}
      <h2 className="text-2xl font-bold text-lime-700 uppercase">
        In Kỷ Yếu: Lưu Giữ Khoảnh Khắc & Dấu Ấn Thanh Xuân
      </h2>

      {/* INTRO */}
      <p>
        Kỷ yếu là ấn phẩm quan trọng giúp lưu giữ những khoảnh khắc đáng nhớ của tập thể như trường học, lớp học hoặc doanh nghiệp.
      </p>
      <p>
        Một cuốn kỷ yếu được thiết kế đẹp, in ấn sắc nét không chỉ giúp lưu giữ kỷ niệm mà còn thể hiện sự chuyên nghiệp và tinh thần tập thể.
      </p>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Tại Sao Nên In Kỷ Yếu?
      </h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Lưu giữ kỷ niệm:</strong> Ghi lại những khoảnh khắc đáng nhớ theo thời gian.
        </li>
        <li>
          <strong>Thể hiện cá tính tập thể:</strong> Thiết kế độc đáo, mang dấu ấn riêng của từng lớp hoặc tổ chức.
        </li>
        <li>
          <strong>Chất lượng bền đẹp:</strong> Giúp bảo quản hình ảnh và nội dung lâu dài.
        </li>
        <li>
          <strong>Tạo ấn tượng:</strong> Là món quà ý nghĩa dành cho bạn bè, thầy cô, đồng nghiệp.
        </li>
      </ul>

      {/* IMAGE */}
      <img
        src={kyyeu}
        alt="In kỷ yếu"
        className="w-full max-w-2xl rounded-lg shadow-lg mx-auto"
      />

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Lợi Ích Khi In Kỷ Yếu Tại Chúng Tôi
      </h3>
      <p>
        Chúng tôi cung cấp dịch vụ in kỷ yếu với nhiều lựa chọn như bìa mềm, bìa cứng, in ảnh chất lượng cao… cùng các kỹ thuật gia công như cán màng, ép kim, phủ UV giúp sản phẩm bền đẹp và sang trọng.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Thiết kế sáng tạo theo yêu cầu</li>
        <li>In ảnh sắc nét, màu chuẩn</li>
        <li>Chất liệu giấy đa dạng, cao cấp</li>
        <li>Giá hợp lý cho học sinh, sinh viên và doanh nghiệp</li>
      </ul>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Ứng Dụng Của Kỷ Yếu
      </h3>
      <p>
        Kỷ yếu được sử dụng phổ biến trong trường học, công ty, tổ chức để lưu giữ hình ảnh tập thể, sự kiện hoặc hành trình phát triển.
      </p>
      <p>
        Nếu bạn muốn lưu giữ những khoảnh khắc đáng nhớ một cách trọn vẹn và ý nghĩa, in kỷ yếu chính là lựa chọn hoàn hảo.
      </p>
    </div>
  );
};

export default InKyYeu;