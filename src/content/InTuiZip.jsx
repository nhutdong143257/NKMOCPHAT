import React from "react";
import tuizip from "../assets/image/service/tuizip.jpg";

const InTuiZip = () => {
  return (
    <div className="space-y-4 leading-relaxed text-gray-700">
      {/* TITLE */}
      <h2 className="text-2xl font-bold text-lime-700 uppercase">
        In Túi Zip: Giải Pháp Bao Bì Tiện Lợi & Chuyên Nghiệp
      </h2>

      {/* INTRO */}
      <p>
        In túi zip là giải pháp bao bì hiện đại giúp bảo quản sản phẩm tốt hơn
        nhờ khả năng đóng mở tiện lợi và kín khí. Không chỉ dừng lại ở chức năng
        bảo vệ, túi zip còn đóng vai trò quan trọng trong việc xây dựng hình ảnh
        thương hiệu.
      </p>

      <p>
        Một chiếc túi zip được in ấn đẹp mắt với logo và thông tin rõ ràng sẽ
        giúp sản phẩm của bạn trở nên chuyên nghiệp, nổi bật hơn trên thị trường
        và thu hút sự chú ý của khách hàng.
      </p>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Tại Sao Nên In Túi Zip?
      </h3>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Bảo quản sản phẩm tốt:</strong> Khóa zip giúp chống ẩm, giữ kín
          và kéo dài thời gian sử dụng.
        </li>
        <li>
          <strong>Tiện lợi khi sử dụng:</strong> Dễ dàng đóng mở nhiều lần.
        </li>
        <li>
          <strong>Tăng nhận diện thương hiệu:</strong> Logo và thiết kế nổi bật
          giúp khách hàng dễ ghi nhớ.
        </li>
        <li>
          <strong>Phù hợp nhiều ngành:</strong> Thực phẩm, mỹ phẩm, phụ kiện...
        </li>
      </ul>

      {/* IMAGE */}
      <img
        src={tuizip}
        alt="In túi zip"
        className="w-full max-w-2xl rounded-lg shadow-lg mx-auto"
      />

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Lợi Ích Khi In Túi Zip Tại Chúng Tôi
      </h3>

      <p>
        Chúng tôi cung cấp dịch vụ in túi zip với nhiều chất liệu như PE, bạc,
        trong suốt hoặc giấy kraft. Công nghệ in hiện đại giúp hình ảnh sắc nét,
        bền màu và đảm bảo tính thẩm mỹ cao.
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>In ấn sắc nét, màu chuẩn</li>
        <li>Đa dạng kích thước và chất liệu</li>
        <li>Thiết kế theo yêu cầu</li>
        <li>Giá tốt cho số lượng lớn</li>
      </ul>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Ứng Dụng Của Túi Zip
      </h3>

      <p>
        Túi zip được sử dụng rộng rãi trong các ngành như thực phẩm khô, trà,
        cà phê, bánh kẹo, mỹ phẩm, phụ kiện và nhiều lĩnh vực khác. Đây là giải
        pháp bao bì tiện lợi, gọn nhẹ và mang lại hiệu quả kinh tế cao.
      </p>

      <p>
        Nếu bạn đang tìm kiếm một loại bao bì vừa tiện dụng vừa giúp nâng tầm
        thương hiệu, túi zip chính là lựa chọn lý tưởng.
      </p>
    </div>
  );
};

export default InTuiZip;