import React from "react";
import lygiay from "../assets/image/service/lygiay.jpg";

const InLyGiay = () => {
  return (
    <div className="space-y-4 leading-relaxed text-gray-700">
      {/* TITLE */}
      <h2 className="text-2xl font-bold text-lime-700 uppercase">
        In Ly Giấy: Giải Pháp Branding Hiệu Quả Cho Ngành F&B
      </h2>

      {/* INTRO */}
      <p>
        In ly giấy không chỉ là giải pháp chứa đựng đồ uống mà còn là công cụ
        quảng bá thương hiệu cực kỳ hiệu quả. Một chiếc ly giấy được thiết kế
        đẹp mắt sẽ giúp thương hiệu của bạn ghi dấu ấn mạnh mẽ với khách hàng
        mỗi lần sử dụng.
      </p>

      <p>
        Trong ngành F&B cạnh tranh hiện nay, việc đầu tư vào ly giấy in logo,
        màu sắc nhận diện sẽ giúp quán của bạn trở nên chuyên nghiệp hơn, đồng
        thời tăng độ nhận diện thương hiệu một cách tự nhiên và liên tục.
      </p>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Tại Sao Ly Giấy In Logo Quan Trọng?
      </h3>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Quảng bá thương hiệu:</strong> Logo xuất hiện mọi lúc khi khách
          hàng sử dụng đồ uống.
        </li>
        <li>
          <strong>Tăng độ chuyên nghiệp:</strong> Tạo ấn tượng tốt với khách hàng.
        </li>
        <li>
          <strong>Marketing tiết kiệm:</strong> Chi phí thấp nhưng hiệu quả cao.
        </li>
        <li>
          <strong>Thân thiện môi trường:</strong> Sử dụng chất liệu giấy an toàn,
          dễ phân hủy.
        </li>
      </ul>

      {/* IMAGE */}
      <img
        src={lygiay}
        alt="In ly giấy"
        className="w-full max-w-2xl rounded-lg shadow-lg mx-auto"
      />

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Lợi Ích Khi In Ly Giấy Tại Chúng Tôi
      </h3>

      <p>
        Chúng tôi cung cấp dịch vụ in ly giấy với đa dạng kích thước (8oz, 12oz,
        16oz…), phù hợp cho quán cà phê, trà sữa, nước ép và các thương hiệu đồ
        uống. Công nghệ in hiện đại giúp hình ảnh sắc nét, màu sắc bền đẹp và an
        toàn cho sức khỏe người dùng.
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>In logo sắc nét, màu chuẩn</li>
        <li>Chất liệu giấy an toàn thực phẩm</li>
        <li>Đa dạng dung tích, kiểu dáng</li>
        <li>Giá tốt cho số lượng lớn</li>
      </ul>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Ứng Dụng Của Ly Giấy
      </h3>

      <p>
        Ly giấy được sử dụng phổ biến trong quán cà phê, trà sữa, nhà hàng, sự
        kiện và các thương hiệu take-away. Đây là giải pháp tiện lợi, vệ sinh và
        góp phần xây dựng hình ảnh chuyên nghiệp cho doanh nghiệp.
      </p>

      <p>
        Nếu bạn muốn tăng nhận diện thương hiệu và nâng cao trải nghiệm khách
        hàng, in ly giấy chính là lựa chọn thông minh và hiệu quả.
      </p>
    </div>
  );
};

export default InLyGiay;