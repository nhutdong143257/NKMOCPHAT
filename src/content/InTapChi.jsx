import React from "react";
import tapchi from "../assets/image/service/tapchi.webp";

const InTapChi = () => {
  return (
    <div className="space-y-4 leading-relaxed text-gray-700">
      {/* TITLE */}
      <h2 className="text-2xl font-bold text-lime-700 uppercase">
        In Tạp Chí: Giải Pháp Xuất Bản & Trình Bày Chuyên Nghiệp
      </h2>

      {/* INTRO */}
      <p>
        Tạp chí giúp doanh nghiệp, tổ chức hoặc cá nhân truyền tải thông tin, xu
        hướng và hình ảnh chuyên nghiệp.
      </p>
      <p>
        Một cuốn tạp chí đẹp, in sắc nét sẽ tạo ấn tượng tốt với độc giả, khách
        hàng hoặc đối tác.
      </p>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Tại Sao Nên In Tạp Chí?
      </h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Tăng tính chuyên nghiệp:</strong> Nội dung được trình bày gọn
          gàng, dễ đọc, tạo uy tín cho doanh nghiệp hoặc tác giả.
        </li>
        <li>
          <strong>Quảng bá thương hiệu:</strong> Bìa, logo và thông tin ghi dấu
          ấn với độc giả.
        </li>
        <li>
          <strong>Bảo vệ nội dung:</strong> Giúp tạp chí bền đẹp, tránh hư hỏng
          trong quá trình sử dụng.
        </li>
        <li>
          <strong>Gây ấn tượng tốt:</strong> Tạo thiện cảm ngay từ lần đầu tiên
          tiếp xúc với ấn phẩm.
        </li>
      </ul>

      {/* IMAGE */}
      <img
        src={tapchi}
        alt="In tạp chí"
        className="w-full max-w-2xl rounded-lg shadow-lg mx-auto"
      />

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Lợi Ích Khi In Tạp Chí Tại Chúng Tôi
      </h3>
      <p>
        Chúng tôi cung cấp dịch vụ in tạp chí với nhiều loại như tạp chí bìa
        mềm, bìa cứng, tạp chí doanh nghiệp, tạp chí sự kiện… cùng đa dạng chất
        liệu giấy và kỹ thuật gia công như cán màng, ép kim, phủ UV, giúp sản
        phẩm bền đẹp và sang trọng.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Thiết kế bìa theo nhận diện thương hiệu</li>
        <li>In sắc nét, màu chuẩn</li>
        <li>Gia công chắc chắn, bền đẹp</li>
        <li>Giá tốt cho doanh nghiệp và tổ chức</li>
      </ul>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Ứng Dụng Của Tạp Chí
      </h3>
      <p>
        Tạp chí được sử dụng rộng rãi trong các doanh nghiệp, tổ chức, sự kiện
        hoặc marketing để chia sẻ thông tin, xu hướng, câu chuyện hoặc giới
        thiệu sản phẩm.
      </p>
      <p>
        Nếu bạn muốn nâng cao hình ảnh thương hiệu và tạo ấn tượng chuyên
        nghiệp, đầu tư vào tạp chí chất lượng chính là lựa chọn thông minh.
      </p>
    </div>
  );
};

export default InTapChi;
