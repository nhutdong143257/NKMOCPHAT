import React from "react";
import thenhanvien from "../assets/image/service/thenhanvvien.png";

const InTheNhanVien = () => {
  return (
    <div className="space-y-4 leading-relaxed text-gray-700">
      {/* TITLE */}
      <h2 className="text-2xl font-bold text-lime-700 uppercase">
        In Thẻ Nhân Viên: Giải Pháp Nhận Diện & Quản Lý Chuyên Nghiệp
      </h2>

      {/* INTRO */}
      <p>
        Thẻ nhân viên là công cụ quan trọng giúp nhận diện cá nhân trong doanh nghiệp, đồng thời hỗ trợ quản lý và kiểm soát nội bộ hiệu quả.
      </p>
      <p>
        Một chiếc thẻ được thiết kế đẹp, in ấn sắc nét sẽ góp phần xây dựng hình ảnh chuyên nghiệp và đồng bộ cho công ty.
      </p>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Tại Sao Nên In Thẻ Nhân Viên?
      </h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Nhận diện dễ dàng:</strong> Hiển thị rõ thông tin cá nhân, chức vụ.
        </li>
        <li>
          <strong>Quản lý hiệu quả:</strong> Hỗ trợ kiểm soát ra vào và phân quyền.
        </li>
        <li>
          <strong>Tăng tính chuyên nghiệp:</strong> Đồng bộ hình ảnh trong doanh nghiệp.
        </li>
        <li>
          <strong>Đa dạng thiết kế:</strong> Có thể tùy chỉnh theo thương hiệu.
        </li>
      </ul>

      {/* IMAGE */}
      <img
        src={thenhanvien}
        alt="In thẻ nhân viên"
        className="w-full max-w-2xl rounded-lg shadow-lg mx-auto"
      />

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Lợi Ích Khi In Thẻ Nhân Viên Tại Chúng Tôi
      </h3>
      <p>
        Chúng tôi cung cấp dịch vụ in thẻ nhân viên với nhiều chất liệu như nhựa PVC, thẻ cứng, thẻ từ… cùng công nghệ in hiện đại giúp hình ảnh sắc nét và bền màu.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Thiết kế theo nhận diện thương hiệu</li>
        <li>In sắc nét, chống phai màu</li>
        <li>Chất liệu bền, chống nước</li>
        <li>Gia công chuyên nghiệp, đẹp mắt</li>
      </ul>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Ứng Dụng Của Thẻ Nhân Viên
      </h3>
      <p>
        Thẻ nhân viên được sử dụng rộng rãi trong doanh nghiệp, công ty, cửa hàng, nhà máy… để nhận diện và quản lý nhân sự.
      </p>
      <p>
        Nếu bạn muốn xây dựng môi trường làm việc chuyên nghiệp và đồng bộ, in thẻ nhân viên chính là giải pháp cần thiết.
      </p>
    </div>
  );
};

export default InTheNhanVien;