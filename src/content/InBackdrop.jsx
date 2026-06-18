import React from "react";
import backdrop from "../assets/image/service/backdrop.jpg";

const InBackdrop = () => {
  return (
    <div className="space-y-4 leading-relaxed text-gray-700">
      {/* TITLE */}
      <h2 className="text-2xl font-bold text-lime-700 uppercase">
        In Backdrop: Tạo Điểm Nhấn Ấn Tượng Cho Sự Kiện & Thương Hiệu
      </h2>

      {/* INTRO */}
      <p>
        Backdrop là yếu tố không thể thiếu trong các sự kiện, hội nghị, khai trương
        hay chụp hình. Một backdrop được thiết kế chuyên nghiệp sẽ giúp không gian
        trở nên nổi bật, đồng thời truyền tải thông điệp thương hiệu một cách rõ ràng.
      </p>

      <p>
        Với kích thước lớn và vị trí trung tâm, backdrop chính là “phông nền hoàn hảo”
        giúp thu hút ánh nhìn và tạo dấu ấn mạnh mẽ với khách tham dự.
      </p>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Tại Sao Backdrop Lại Quan Trọng?
      </h3>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Tạo điểm nhấn sự kiện:</strong> Là trung tâm thu hút sự chú ý của khách mời.
        </li>
        <li>
          <strong>Tăng nhận diện thương hiệu:</strong> Logo, thông điệp hiển thị rõ ràng và nổi bật.
        </li>
        <li>
          <strong>Hỗ trợ chụp ảnh:</strong> Là background lý tưởng cho hình ảnh truyền thông.
        </li>
        <li>
          <strong>Chuyên nghiệp hóa sự kiện:</strong> Giúp nâng tầm hình ảnh doanh nghiệp.
        </li>
      </ul>

      {/* IMAGE */}
      <img
        src={backdrop}
        alt="In backdrop"
        className="w-full max-w-2xl rounded-lg shadow-lg mx-auto"
      />

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Lợi Ích Khi In Backdrop Tại Chúng Tôi
      </h3>

      <p>
        Chúng tôi cung cấp dịch vụ in backdrop với công nghệ hiện đại, đảm bảo
        hình ảnh sắc nét, màu sắc chuẩn và độ bền cao. Sử dụng các chất liệu như
        hiflex, PP, canvas phù hợp cho cả trong nhà và ngoài trời.
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>In khổ lớn, không giới hạn kích thước</li>
        <li>Màu sắc sống động, bền màu</li>
        <li>Hỗ trợ thiết kế backdrop chuyên nghiệp</li>
        <li>Gia công, lắp đặt nhanh chóng</li>
      </ul>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Ứng Dụng Của Backdrop
      </h3>

      <p>
        Backdrop được sử dụng rộng rãi trong các sự kiện như khai trương, hội nghị,
        hội thảo, tiệc cưới, triển lãm và các chương trình quảng bá thương hiệu.
        Đây là yếu tố quan trọng giúp tạo nên không gian chuyên nghiệp và ấn tượng.
      </p>

      <p>
        Nếu bạn muốn sự kiện của mình trở nên nổi bật và đáng nhớ, một backdrop
        được thiết kế và in ấn chất lượng chính là lựa chọn không thể thiếu.
      </p>
    </div>
  );
};

export default InBackdrop;