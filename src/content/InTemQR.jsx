import React from "react";
import temqr from "../assets/image/service/temqr.jpg";

const InTemQR = () => {
  return (
    <div className="space-y-4 leading-relaxed text-gray-700">
      {/* TITLE */}
      <h2 className="text-2xl font-bold text-lime-700 uppercase">
        Tem QR: Giải Pháp Kết Nối Thông Minh & Hiện Đại Cho Doanh Nghiệp
      </h2>

      {/* INTRO */}
      <p>
        Tem QR là công cụ hiện đại giúp doanh nghiệp kết nối nhanh chóng với
        khách hàng thông qua việc quét mã bằng điện thoại. Chỉ với một thao tác
        đơn giản, người dùng có thể truy cập website, thông tin sản phẩm, mạng
        xã hội hoặc chương trình khuyến mãi.
      </p>

      <p>
        Trong thời đại số hóa, tem QR không chỉ giúp nâng cao trải nghiệm khách
        hàng mà còn góp phần xây dựng hình ảnh thương hiệu chuyên nghiệp và hiện
        đại.
      </p>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Tại Sao Nên Sử Dụng Tem QR?
      </h3>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Kết nối nhanh chóng:</strong> Truy cập thông tin chỉ với một
          lần quét.
        </li>
        <li>
          <strong>Tăng trải nghiệm khách hàng:</strong> Giúp người dùng dễ dàng
          tiếp cận nội dung.
        </li>
        <li>
          <strong>Ứng dụng đa dạng:</strong> Website, menu, thanh toán, mạng xã
          hội…
        </li>
        <li>
          <strong>Hiện đại & chuyên nghiệp:</strong> Nâng tầm thương hiệu trong
          mắt khách hàng.
        </li>
      </ul>

      {/* IMAGE */}
      <img
        src={temqr}
        alt="Tem QR"
        className="w-full max-w-2xl rounded-lg shadow-lg mx-auto"
      />

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Lợi Ích Khi In Tem QR Tại Chúng Tôi
      </h3>

      <p>
        Chúng tôi cung cấp dịch vụ in tem QR với độ chính xác cao, đảm bảo quét
        nhanh và nhận diện tốt trên mọi thiết bị. Chất liệu decal bền, chống nước
        và không bong tróc giúp tem sử dụng lâu dài trong nhiều môi trường khác
        nhau.
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>In QR sắc nét, dễ quét</li>
        <li>Chất liệu bền, chống nước</li>
        <li>Thiết kế theo yêu cầu</li>
        <li>Phù hợp nhiều mục đích sử dụng</li>
      </ul>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Ứng Dụng Của Tem QR
      </h3>

      <p>
        Tem QR được ứng dụng rộng rãi trong bán hàng, thanh toán điện tử, truy
        xuất nguồn gốc sản phẩm, marketing và quản lý thông tin. Đây là giải pháp
        tiện lợi giúp doanh nghiệp tối ưu quy trình và tăng hiệu quả kinh doanh.
      </p>

      <p>
        Nếu bạn muốn nâng cấp trải nghiệm khách hàng và bắt kịp xu hướng công
        nghệ, tem QR chính là lựa chọn không thể thiếu.
      </p>
    </div>
  );
};

export default InTemQR;