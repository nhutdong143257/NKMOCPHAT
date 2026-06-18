import React from "react";
import theten from "../assets/image/service/theten.jpeg";

const InTheTen = () => {
  return (
    <div className="space-y-4 leading-relaxed text-gray-700">
      {/* TITLE */}
      <h2 className="text-2xl font-bold text-lime-700 uppercase">
        In Thẻ Tên: Giải Pháp Nhận Diện Cá Nhân Chuyên Nghiệp
      </h2>

      {/* INTRO */}
      <p>
        Thẻ tên là công cụ giúp nhận diện cá nhân trong môi trường làm việc, sự kiện hoặc dịch vụ khách hàng một cách nhanh chóng và hiệu quả.
      </p>
      <p>
        Một chiếc thẻ tên được thiết kế đẹp, in ấn sắc nét sẽ giúp tạo ấn tượng chuyên nghiệp và thân thiện với khách hàng.
      </p>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Tại Sao Nên In Thẻ Tên?
      </h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Nhận diện nhanh chóng:</strong> Hiển thị rõ tên và chức vụ.
        </li>
        <li>
          <strong>Tăng tính chuyên nghiệp:</strong> Tạo sự đồng bộ trong môi trường làm việc.
        </li>
        <li>
          <strong>Tạo thiện cảm:</strong> Giúp khách hàng dễ dàng giao tiếp và ghi nhớ.
        </li>
        <li>
          <strong>Thiết kế linh hoạt:</strong> Phù hợp nhiều ngành nghề khác nhau.
        </li>
      </ul>

      {/* IMAGE */}
      <img
        src={theten}
        alt="In thẻ tên"
        className="w-full max-w-2xl rounded-lg shadow-lg mx-auto"
      />

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Lợi Ích Khi In Thẻ Tên Tại Chúng Tôi
      </h3>
      <p>
        Chúng tôi cung cấp dịch vụ in thẻ tên với nhiều chất liệu như nhựa, kim loại, mica… cùng công nghệ in hiện đại giúp sản phẩm bền đẹp và sang trọng.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Thiết kế theo nhận diện thương hiệu</li>
        <li>In sắc nét, chống phai màu</li>
        <li>Chất liệu bền, sử dụng lâu dài</li>
        <li>Gia công tinh xảo, đẹp mắt</li>
      </ul>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Ứng Dụng Của Thẻ Tên
      </h3>
      <p>
        Thẻ tên được sử dụng rộng rãi trong cửa hàng, nhà hàng, khách sạn, văn phòng và các sự kiện để nhận diện nhân sự.
      </p>
      <p>
        Nếu bạn muốn nâng cao hình ảnh chuyên nghiệp và tạo sự thân thiện với khách hàng, in thẻ tên chính là lựa chọn phù hợp.
      </p>
    </div>
  );
};

export default InTheTen;