import React from "react";
import nhanhop from "../assets/image/service/nhanhop.jpg";

const InNhanHop = () => {
  return (
    <div className="space-y-4 leading-relaxed text-gray-700">
      {/* TITLE */}
      <h2 className="text-2xl font-bold text-lime-700 uppercase">
        In Nhãn Hộp: Tăng Giá Trị Sản Phẩm & Nhận Diện Thương Hiệu
      </h2>

      {/* INTRO */}
      <p>
        In nhãn hộp là yếu tố quan trọng giúp sản phẩm trở nên chuyên nghiệp và
        thu hút hơn trong mắt khách hàng. Một chiếc nhãn đẹp không chỉ cung cấp
        thông tin cần thiết mà còn góp phần nâng cao giá trị thương hiệu.
      </p>

      <p>
        Trong thị trường cạnh tranh hiện nay, nhãn hộp được thiết kế và in ấn
        chất lượng cao sẽ giúp sản phẩm của bạn nổi bật trên kệ hàng, tạo sự khác
        biệt và tăng khả năng lựa chọn từ phía khách hàng.
      </p>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Tại Sao Nhãn Hộp Quan Trọng?
      </h3>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Cung cấp thông tin:</strong> Hiển thị rõ ràng thành phần, hướng
          dẫn sử dụng, thương hiệu.
        </li>
        <li>
          <strong>Tăng nhận diện thương hiệu:</strong> Logo và màu sắc giúp khách
          hàng dễ ghi nhớ.
        </li>
        <li>
          <strong>Tạo ấn tượng chuyên nghiệp:</strong> Thiết kế đẹp giúp sản phẩm
          trở nên cao cấp hơn.
        </li>
        <li>
          <strong>Hỗ trợ bán hàng:</strong> Thu hút khách hàng ngay từ cái nhìn
          đầu tiên.
        </li>
      </ul>

      {/* IMAGE */}
      <img
        src={nhanhop}
        alt="In nhãn hộp"
        className="w-full max-w-2xl rounded-lg shadow-lg mx-auto"
      />

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Lợi Ích Khi In Nhãn Hộp Tại Chúng Tôi
      </h3>

      <p>
        Chúng tôi cung cấp dịch vụ in nhãn hộp với nhiều chất liệu như decal giấy,
        decal nhựa, decal trong suốt… phù hợp với từng loại sản phẩm. Công nghệ
        in hiện đại giúp hình ảnh sắc nét, bền màu và chống trầy xước hiệu quả.
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>In sắc nét, màu chuẩn</li>
        <li>Đa dạng chất liệu và kích thước</li>
        <li>Thiết kế theo yêu cầu</li>
        <li>Độ bền cao, chống nước tốt</li>
      </ul>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Ứng Dụng Của Nhãn Hộp
      </h3>

      <p>
        Nhãn hộp được sử dụng rộng rãi trong các ngành như thực phẩm, mỹ phẩm,
        dược phẩm, đồ gia dụng và nhiều lĩnh vực khác. Đây là giải pháp quan
        trọng giúp sản phẩm trở nên chuyên nghiệp và đáng tin cậy hơn.
      </p>

      <p>
        Nếu bạn muốn nâng cao giá trị sản phẩm và tăng khả năng cạnh tranh trên
        thị trường, in nhãn hộp chính là lựa chọn không thể thiếu.
      </p>
    </div>
  );
};

export default InNhanHop;