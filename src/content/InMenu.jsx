import React from "react";
import menu from "../assets/image/service/menu.jpg";

const InMenu = () => {
  return (
    <div className="space-y-4 leading-relaxed text-gray-700">
      {/* TITLE */}
      <h2 className="text-2xl font-bold text-lime-700 uppercase">
        In Menu: Nâng Tầm Trải Nghiệm Khách Hàng & Thương Hiệu
      </h2>

      {/* INTRO */}
      <p>
        Menu không chỉ là danh sách món ăn hay dịch vụ mà còn là một phần quan
        trọng trong việc xây dựng hình ảnh thương hiệu. Một cuốn menu được thiết
        kế đẹp, bố cục rõ ràng sẽ giúp khách hàng dễ dàng lựa chọn và tạo ấn
        tượng chuyên nghiệp.
      </p>

      <p>
        Với chất lượng in sắc nét và thiết kế sáng tạo, menu sẽ góp phần nâng cao
        trải nghiệm khách hàng và tăng giá trị dịch vụ của bạn.
      </p>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Tại Sao Menu Quan Trọng?
      </h3>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Trình bày rõ ràng:</strong> Giúp khách hàng dễ dàng chọn món
          hoặc dịch vụ.
        </li>
        <li>
          <strong>Tăng trải nghiệm:</strong> Menu đẹp giúp nâng cao cảm nhận về
          chất lượng dịch vụ.
        </li>
        <li>
          <strong>Quảng bá thương hiệu:</strong> Thể hiện phong cách riêng của
          quán/cửa hàng.
        </li>
        <li>
          <strong>Kích thích mua hàng:</strong> Hình ảnh đẹp giúp tăng tỷ lệ gọi
          món.
        </li>
      </ul>

      {/* IMAGE */}
      <img
        src={menu}
        alt="In menu"
        className="w-full max-w-2xl rounded-lg shadow-lg mx-auto"
      />

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Lợi Ích Khi In Menu Tại Chúng Tôi
      </h3>

      <p>
        Chúng tôi cung cấp dịch vụ in menu với nhiều chất liệu như giấy cứng,
        nhựa, chống nước… cùng các kiểu đóng gáy như lò xo, keo nhiệt hoặc bìa
        da, đảm bảo độ bền và tính thẩm mỹ cao.
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>Thiết kế menu theo concept riêng</li>
        <li>In sắc nét, chống nước, bền đẹp</li>
        <li>Đa dạng kiểu dáng, kích thước</li>
        <li>Phù hợp nhà hàng, quán cafe, spa</li>
      </ul>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Ứng Dụng Của Menu
      </h3>

      <p>
        Menu được sử dụng trong nhà hàng, quán cafe, trà sữa, spa, salon… Đây là
        công cụ quan trọng giúp khách hàng tiếp cận dịch vụ nhanh chóng và chuyên
        nghiệp hơn.
      </p>

      <p>
        Nếu bạn muốn nâng cao trải nghiệm khách hàng và tạo dấu ấn riêng, đầu tư
        vào một cuốn menu đẹp là điều không thể thiếu.
      </p>
    </div>
  );
};

export default InMenu;