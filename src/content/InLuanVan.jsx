import React from "react";
import luanvan from "../assets/image/service/luanvan.jpg";

const InLuanVan = () => {
  return (
    <div className="space-y-4 leading-relaxed text-gray-700">
      {/* TITLE */}
      <h2 className="text-2xl font-bold text-lime-700 uppercase">
        In Luận Văn: Trình Bày Chuyên Nghiệp & Chuẩn Học Thuật
      </h2>

      {/* INTRO */}
      <p>
        Luận văn là tài liệu quan trọng đánh dấu quá trình học tập và nghiên cứu của sinh viên, học viên.
      </p>
      <p>
        Một cuốn luận văn được in ấn rõ ràng, trình bày chuyên nghiệp sẽ giúp bạn tạo ấn tượng tốt với giảng viên và hội đồng chấm điểm.
      </p>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Tại Sao Nên In Luận Văn?
      </h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Trình bày chuyên nghiệp:</strong> Nội dung rõ ràng, đúng chuẩn định dạng học thuật.
        </li>
        <li>
          <strong>Tăng tính thẩm mỹ:</strong> Bìa đẹp, đóng gáy chắc chắn giúp tài liệu nổi bật.
        </li>
        <li>
          <strong>Bảo vệ nội dung:</strong> Giữ tài liệu bền đẹp trong suốt quá trình sử dụng.
        </li>
        <li>
          <strong>Tạo ấn tượng tốt:</strong> Góp phần nâng cao đánh giá từ hội đồng chấm.
        </li>
      </ul>

      {/* IMAGE */}
      <img
        src={luanvan}
        alt="In luận văn"
        className="w-full max-w-2xl rounded-lg shadow-lg mx-auto"
      />

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Lợi Ích Khi In Luận Văn Tại Chúng Tôi
      </h3>
      <p>
        Chúng tôi cung cấp dịch vụ in luận văn với nhiều hình thức đóng gáy như đóng keo nhiệt, đóng lò xo, bìa cứng ép nhũ… đảm bảo tính thẩm mỹ và độ bền cao.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>In sắc nét, đúng chuẩn format</li>
        <li>Đóng gáy chắc chắn, đẹp mắt</li>
        <li>Chất liệu giấy đa dạng</li>
        <li>Hỗ trợ nhanh, lấy liền</li>
      </ul>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Ứng Dụng Của Luận Văn
      </h3>
      <p>
        Luận văn được sử dụng trong các chương trình học đại học, cao học hoặc nghiên cứu chuyên sâu để trình bày kết quả học tập và nghiên cứu.
      </p>
      <p>
        Nếu bạn muốn hoàn thiện bài luận một cách chuyên nghiệp và chỉn chu, in luận văn chất lượng chính là bước không thể thiếu.
      </p>
    </div>
  );
};

export default InLuanVan;