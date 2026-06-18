import React from "react";
import temchonggia from "../assets/image/service/temchonggia.jpg";

const InTemChongGia = () => {
  return (
    <div className="space-y-4 leading-relaxed text-gray-700">
      {/* TITLE */}
      <h2 className="text-2xl font-bold text-lime-700 uppercase">
        Tem Chống Giả: Giải Pháp Bảo Vệ Thương Hiệu & Tăng Niềm Tin Khách Hàng
      </h2>

      {/* INTRO */}
      <p>
        Tem chống giả là công cụ quan trọng giúp doanh nghiệp bảo vệ sản phẩm
        khỏi hàng giả, hàng nhái trên thị trường. Không chỉ đảm bảo quyền lợi cho
        người tiêu dùng, tem chống giả còn góp phần nâng cao uy tín và giá trị
        thương hiệu.
      </p>

      <p>
        Với công nghệ in hiện đại, tem chống giả ngày càng được tích hợp nhiều
        tính năng bảo mật như QR code, hologram, mã số xác thực… giúp việc kiểm
        tra sản phẩm trở nên dễ dàng và chính xác.
      </p>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Tại Sao Nên Sử Dụng Tem Chống Giả?
      </h3>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Bảo vệ thương hiệu:</strong> Ngăn chặn hàng giả, hàng nhái trên
          thị trường.
        </li>
        <li>
          <strong>Tăng độ tin cậy:</strong> Giúp khách hàng yên tâm khi sử dụng
          sản phẩm.
        </li>
        <li>
          <strong>Dễ dàng kiểm tra:</strong> Xác thực sản phẩm nhanh chóng qua QR
          hoặc mã số.
        </li>
        <li>
          <strong>Nâng cao giá trị sản phẩm:</strong> Tạo sự chuyên nghiệp và uy
          tín cho doanh nghiệp.
        </li>
      </ul>

      {/* IMAGE */}
      <img
        src={temchonggia}
        alt="Tem chống giả"
        className="w-full max-w-2xl rounded-lg shadow-lg mx-auto"
      />

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Lợi Ích Khi In Tem Chống Giả Tại Chúng Tôi
      </h3>

      <p>
        Chúng tôi cung cấp dịch vụ in tem chống giả với nhiều công nghệ bảo mật
        tiên tiến như tem vỡ, tem hologram, tem QR code… đảm bảo tính an toàn cao
        và khó làm giả. Chất liệu bền, bám dính tốt và phù hợp với nhiều loại sản
        phẩm khác nhau.
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>Công nghệ chống giả hiện đại</li>
        <li>In sắc nét, độ bảo mật cao</li>
        <li>Chất liệu bền, khó bóc tách</li>
        <li>Thiết kế theo yêu cầu riêng</li>
      </ul>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Ứng Dụng Của Tem Chống Giả
      </h3>

      <p>
        Tem chống giả được sử dụng rộng rãi trong các ngành như mỹ phẩm, dược
        phẩm, thực phẩm, điện tử và nhiều lĩnh vực khác. Đây là giải pháp hiệu
        quả giúp doanh nghiệp kiểm soát sản phẩm và bảo vệ người tiêu dùng.
      </p>

      <p>
        Nếu bạn muốn xây dựng thương hiệu bền vững và chống lại hàng giả, tem
        chống giả chính là lựa chọn không thể thiếu.
      </p>
    </div>
  );
};

export default InTemChongGia;