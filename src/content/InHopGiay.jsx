import React from "react";
import hopgiay from "../assets/image/service/hopgiay.jpg";

const InHopGiay = () => {
  return (
    <div className="space-y-4 leading-relaxed text-gray-700">
      {/* TITLE */}
      <h2 className="text-2xl font-bold text-lime-700 uppercase">
        In Hộp Giấy: Nâng Tầm Giá Trị Sản Phẩm & Thương Hiệu
      </h2>

      {/* INTRO */}
      <p>
        Hộp giấy không chỉ là bao bì bảo vệ sản phẩm mà còn là yếu tố quan trọng
        giúp nâng cao hình ảnh thương hiệu trong mắt khách hàng. Một chiếc hộp
        được thiết kế đẹp mắt, in ấn chất lượng sẽ giúp sản phẩm của bạn trở nên
        chuyên nghiệp và thu hút hơn trên thị trường.
      </p>

      <p>
        Trong môi trường cạnh tranh hiện nay, việc đầu tư vào bao bì đóng vai trò
        rất lớn trong việc tạo ấn tượng và thúc đẩy quyết định mua hàng của khách hàng.
      </p>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Tại Sao Hộp Giấy Lại Quan Trọng?
      </h3>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Bảo vệ sản phẩm:</strong> Giúp sản phẩm an toàn trong vận chuyển.
        </li>
        <li>
          <strong>Tăng giá trị thương hiệu:</strong> Bao bì đẹp tạo cảm giác cao cấp.
        </li>
        <li>
          <strong>Thu hút khách hàng:</strong> Thiết kế nổi bật giúp sản phẩm dễ được lựa chọn.
        </li>
        <li>
          <strong>Hỗ trợ marketing:</strong> Truyền tải thông tin và thông điệp thương hiệu.
        </li>
      </ul>

      {/* IMAGE */}
      <img
        src={hopgiay}
        alt="In hộp giấy"
        className="w-full max-w-2xl rounded-lg shadow-lg mx-auto"
      />

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Lợi Ích Khi In Hộp Giấy Tại Chúng Tôi
      </h3>

      <p>
        Chúng tôi cung cấp dịch vụ in hộp giấy với đa dạng chất liệu như carton,
        couche, kraft… cùng các kỹ thuật gia công cao cấp như cán màng, ép kim,
        dập nổi giúp sản phẩm bền đẹp và sang trọng hơn.
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>Thiết kế hộp theo yêu cầu</li>
        <li>Chất liệu đa dạng, độ bền cao</li>
        <li>Gia công sắc nét, tinh xảo</li>
        <li>Giá tốt cho số lượng lớn</li>
      </ul>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Ứng Dụng Của Hộp Giấy
      </h3>

      <p>
        Hộp giấy được sử dụng rộng rãi trong nhiều ngành như mỹ phẩm, thực phẩm,
        điện tử, thời trang và quà tặng. Đây là giải pháp bao bì phổ biến giúp
        sản phẩm nổi bật và chuyên nghiệp hơn khi đến tay khách hàng.
      </p>

      <p>
        Nếu bạn muốn nâng cao giá trị sản phẩm và xây dựng thương hiệu bền vững,
        in hộp giấy chính là lựa chọn không thể thiếu.
      </p>
    </div>
  );
};

export default InHopGiay;