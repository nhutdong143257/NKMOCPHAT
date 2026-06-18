import React from "react";
import banghieu from "../assets/image/service/banghieu.jpg";

const InBangHieu = () => {
  return (
    <div className="space-y-4 leading-relaxed text-gray-700">
      {/* TITLE */}
      <h2 className="text-2xl font-bold text-lime-700 uppercase">
        In Bảng Hiệu: Giải Pháp Nhận Diện Thương Hiệu Chuyên Nghiệp & Nổi Bật
      </h2>

      {/* INTRO */}
      <p>
        Bảng hiệu là yếu tố quan trọng giúp khách hàng nhận diện thương hiệu của
        bạn ngay từ cái nhìn đầu tiên. Một bảng hiệu được thiết kế đẹp mắt, in ấn
        chất lượng cao sẽ giúp cửa hàng, doanh nghiệp trở nên nổi bật và thu hút
        hơn trong mắt khách hàng.
      </p>

      <p>
        Dù là cửa hàng nhỏ hay doanh nghiệp lớn, việc đầu tư vào bảng hiệu chuyên
        nghiệp sẽ góp phần nâng cao uy tín và tạo dấu ấn lâu dài trong tâm trí khách hàng.
      </p>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Tại Sao Bảng Hiệu Lại Quan Trọng?
      </h3>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Tăng nhận diện thương hiệu:</strong> Giúp khách hàng dễ dàng ghi nhớ và nhận biết.
        </li>
        <li>
          <strong>Thu hút khách hàng:</strong> Thiết kế nổi bật giúp gây ấn tượng mạnh.
        </li>
        <li>
          <strong>Thể hiện sự chuyên nghiệp:</strong> Bảng hiệu đẹp nâng cao hình ảnh doanh nghiệp.
        </li>
        <li>
          <strong>Quảng cáo lâu dài:</strong> Hiệu quả bền vững với chi phí hợp lý.
        </li>
      </ul>

      {/* IMAGE */}
      <img
        src={banghieu}
        alt="In bảng hiệu"
        className="w-full max-w-2xl rounded-lg shadow-lg mx-auto"
      />

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Lợi Ích Khi In Bảng Hiệu Tại Chúng Tôi
      </h3>

      <p>
        Chúng tôi cung cấp dịch vụ in bảng hiệu với nhiều chất liệu như mica,
        alu, hiflex, inox… phù hợp với từng nhu cầu sử dụng. Công nghệ in hiện
        đại giúp màu sắc sắc nét, bền màu và chống chịu tốt với điều kiện thời tiết.
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>Thiết kế bảng hiệu theo yêu cầu</li>
        <li>Chất liệu đa dạng, độ bền cao</li>
        <li>Gia công và lắp đặt trọn gói</li>
        <li>Giá cạnh tranh, tối ưu chi phí</li>
      </ul>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Ứng Dụng Của Bảng Hiệu
      </h3>

      <p>
        Bảng hiệu được sử dụng phổ biến cho cửa hàng, công ty, quán ăn, showroom,
        văn phòng và các địa điểm kinh doanh khác. Đây là công cụ quảng cáo trực
        quan giúp khách hàng dễ dàng tìm thấy và nhận diện thương hiệu của bạn.
      </p>

      <p>
        Nếu bạn muốn nâng cao hình ảnh doanh nghiệp và thu hút nhiều khách hàng
        hơn, đầu tư vào bảng hiệu chuyên nghiệp là bước đi không thể thiếu.
      </p>
    </div>
  );
};

export default InBangHieu;