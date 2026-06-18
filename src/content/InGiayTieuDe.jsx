import React from "react";
import giaytieude from "../assets/image/service/giaytieude.jpg";

const InGiayTieuDe = () => {
  return (
    <div className="space-y-4 leading-relaxed text-gray-700">
      {/* TITLE */}
      <h2 className="text-2xl font-bold text-lime-700 uppercase">
        In Giấy Tiêu Đề: Chuẩn Hóa Hình Ảnh Doanh Nghiệp
      </h2>

      {/* INTRO */}
      <p>
        Giấy tiêu đề (letterhead) là một phần quan trọng trong bộ nhận diện
        thương hiệu của doanh nghiệp. Đây là loại giấy được sử dụng trong các
        văn bản chính thức như hợp đồng, báo giá, công văn…
      </p>

      <p>
        Một mẫu giấy tiêu đề được thiết kế chuyên nghiệp sẽ giúp doanh nghiệp
        tạo ấn tượng uy tín, đồng thời thể hiện sự chỉn chu trong từng chi tiết
        giao tiếp với khách hàng và đối tác.
      </p>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Tại Sao Giấy Tiêu Đề Quan Trọng?
      </h3>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Tăng tính chuyên nghiệp:</strong> Văn bản có logo và thông tin
          rõ ràng giúp doanh nghiệp đáng tin cậy hơn.
        </li>
        <li>
          <strong>Đồng bộ thương hiệu:</strong> Thống nhất hình ảnh trong mọi tài
          liệu.
        </li>
        <li>
          <strong>Quảng bá doanh nghiệp:</strong> Mỗi văn bản là một lần nhận diện
          thương hiệu.
        </li>
        <li>
          <strong>Tạo ấn tượng tốt:</strong> Thể hiện sự chuyên nghiệp trong giao
          tiếp.
        </li>
      </ul>

      {/* IMAGE */}
      <img
        src={giaytieude}
        alt="In giấy tiêu đề"
        className="w-full max-w-2xl rounded-lg shadow-lg mx-auto"
      />

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Lợi Ích Khi In Giấy Tiêu Đề Tại Chúng Tôi
      </h3>

      <p>
        Chúng tôi cung cấp dịch vụ in giấy tiêu đề với chất lượng cao, đảm bảo
        màu sắc chính xác theo nhận diện thương hiệu. Giấy được lựa chọn phù hợp
        cho việc in ấn và sử dụng trong văn phòng.
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>Thiết kế chuẩn bộ nhận diện thương hiệu</li>
        <li>In sắc nét, không lem mực</li>
        <li>Giấy chất lượng cao, dễ sử dụng</li>
        <li>Giá tốt cho doanh nghiệp</li>
      </ul>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Ứng Dụng Của Giấy Tiêu Đề
      </h3>

      <p>
        Giấy tiêu đề được sử dụng trong các văn bản như hợp đồng, báo giá, thư
        mời, công văn… giúp doanh nghiệp thể hiện sự chuyên nghiệp và uy tín
        trong mọi giao dịch.
      </p>

      <p>
        Nếu bạn muốn xây dựng hình ảnh doanh nghiệp bài bản và chuyên nghiệp,
        giấy tiêu đề là một phần không thể thiếu.
      </p>
    </div>
  );
};

export default InGiayTieuDe;