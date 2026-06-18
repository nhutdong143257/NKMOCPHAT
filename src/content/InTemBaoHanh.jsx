import React from "react";
import tembaohanh from "../assets/image/service/tembaohanh.webp";

const InTemBaoHanh = () => {
  return (
    <div className="space-y-4 leading-relaxed text-gray-700">
      {/* TITLE */}
      <h2 className="text-2xl font-bold text-lime-700 uppercase">
        In Tem Bảo Hành: Giải Pháp Bảo Vệ Sản Phẩm & Tăng Uy Tín Thương Hiệu
      </h2>

      {/* INTRO */}
      <p>
        In tem bảo hành là giải pháp quan trọng giúp doanh nghiệp kiểm soát chất
        lượng sản phẩm và bảo vệ quyền lợi khách hàng. Tem bảo hành không chỉ
        thể hiện sự chuyên nghiệp mà còn giúp tăng độ tin cậy của thương hiệu.
      </p>

      <p>
        Với thiết kế đặc biệt chống bóc tách, tem bảo hành giúp ngăn chặn việc
        mở sản phẩm trái phép, đồng thời đảm bảo sản phẩm đến tay khách hàng vẫn
        còn nguyên vẹn.
      </p>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Tại Sao Tem Bảo Hành Quan Trọng?
      </h3>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Bảo vệ sản phẩm:</strong> Ngăn chặn việc mở hoặc thay đổi sản
          phẩm trước khi đến tay khách hàng.
        </li>
        <li>
          <strong>Tăng độ tin cậy:</strong> Khẳng định sản phẩm chính hãng và
          đảm bảo chất lượng.
        </li>
        <li>
          <strong>Chống giả mạo:</strong> Hạn chế hàng nhái, hàng kém chất lượng.
        </li>
        <li>
          <strong>Quản lý bảo hành:</strong> Dễ dàng theo dõi thời gian và thông
          tin bảo hành.
        </li>
      </ul>

      {/* IMAGE */}
      <img
        src={tembaohanh}
        alt="In tem bảo hành"
        className="w-full max-w-2xl rounded-lg shadow-lg mx-auto"
      />

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Lợi Ích Khi In Tem Bảo Hành Tại Chúng Tôi
      </h3>

      <p>
        Chúng tôi cung cấp dịch vụ in tem bảo hành với nhiều loại như tem vỡ,
        tem VOID, tem hologram… đảm bảo khả năng chống giả và chống bóc tách
        hiệu quả. Công nghệ in hiện đại giúp tem sắc nét, bền màu và khó làm giả.
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>Chống bóc tách, chống giả hiệu quả</li>
        <li>In sắc nét, độ bền cao</li>
        <li>Đa dạng chất liệu và kiểu tem</li>
        <li>Thiết kế theo yêu cầu</li>
      </ul>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Ứng Dụng Của Tem Bảo Hành
      </h3>

      <p>
        Tem bảo hành được sử dụng rộng rãi trong các ngành điện tử, điện máy,
        mỹ phẩm, thiết bị công nghệ và nhiều lĩnh vực khác. Đây là giải pháp
        giúp doanh nghiệp bảo vệ sản phẩm và xây dựng niềm tin với khách hàng.
      </p>

      <p>
        Nếu bạn muốn nâng cao uy tín thương hiệu và bảo vệ sản phẩm khỏi hàng
        giả, in tem bảo hành chính là lựa chọn không thể thiếu.
      </p>
    </div>
  );
};

export default InTemBaoHanh;