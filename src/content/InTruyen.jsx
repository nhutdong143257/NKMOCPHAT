import React from "react";
import truyen from "../assets/image/service/truyen.jpg";

const InTruyen = () => {
  return (
    <div className="space-y-4 leading-relaxed text-gray-700">
      {/* TITLE */}
      <h2 className="text-2xl font-bold text-lime-700 uppercase">
        In Truyện: Giải Pháp Xuất Bản & Lưu Giữ Nội Dung Sáng Tạo
      </h2>

      {/* INTRO */}
      <p>
        Truyện là hình thức truyền tải nội dung sáng tạo, cảm xúc và câu chuyện đến với người đọc một cách sinh động và hấp dẫn.
      </p>
      <p>
        Một cuốn truyện được in đẹp, rõ nét sẽ giúp nâng cao trải nghiệm đọc và tạo ấn tượng tốt với độc giả.
      </p>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Tại Sao Nên In Truyện?
      </h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Tăng trải nghiệm đọc:</strong> Nội dung rõ ràng, bố cục hợp lý giúp người đọc dễ theo dõi.
        </li>
        <li>
          <strong>Thể hiện phong cách riêng:</strong> Bìa và thiết kế mang dấu ấn cá nhân của tác giả.
        </li>
        <li>
          <strong>Bảo vệ nội dung:</strong> Giúp truyện bền đẹp theo thời gian.
        </li>
        <li>
          <strong>Phù hợp xuất bản:</strong> Dễ dàng phát hành hoặc làm quà tặng.
        </li>
      </ul>

      {/* IMAGE */}
      <img
        src={truyen}
        alt="In truyện"
        className="w-full max-w-2xl rounded-lg shadow-lg mx-auto"
      />

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Lợi Ích Khi In Truyện Tại Chúng Tôi
      </h3>
      <p>
        Chúng tôi cung cấp dịch vụ in truyện với nhiều lựa chọn như bìa mềm, bìa cứng, in đen trắng hoặc in màu… cùng các kỹ thuật gia công giúp sản phẩm bền đẹp và chuyên nghiệp.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>In sắc nét, dễ đọc</li>
        <li>Thiết kế bìa theo yêu cầu</li>
        <li>Đóng gáy chắc chắn</li>
        <li>Chi phí hợp lý cho cá nhân và nhà xuất bản</li>
      </ul>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Ứng Dụng Của Truyện
      </h3>
      <p>
        Truyện được sử dụng rộng rãi trong xuất bản sách, truyện tranh, tài liệu giải trí hoặc làm quà tặng ý nghĩa.
      </p>
      <p>
        Nếu bạn muốn biến ý tưởng và câu chuyện của mình thành một ấn phẩm hoàn chỉnh, in truyện chính là bước quan trọng để hiện thực hóa điều đó.
      </p>
    </div>
  );
};

export default InTruyen;