import React from "react";
import hopcung from "../assets/image/service/hopcung.jpg";

const InHopCung = () => {
  return (
    <div className="space-y-4 leading-relaxed text-gray-700">
      {/* TITLE */}
      <h2 className="text-2xl font-bold text-lime-700 uppercase">
        In Hộp Cứng: Bao Bì Cao Cấp Nâng Tầm Giá Trị Sản Phẩm
      </h2>

      {/* INTRO */}
      <p>
        Hộp cứng là lựa chọn hàng đầu cho các sản phẩm cao cấp nhờ vào độ bền và
        tính thẩm mỹ vượt trội. Một chiếc hộp cứng được thiết kế tinh tế không chỉ
        bảo vệ sản phẩm mà còn giúp nâng cao hình ảnh thương hiệu trong mắt khách hàng.
      </p>

      <p>
        Đây là loại bao bì thường được sử dụng cho quà tặng, mỹ phẩm, trang sức,
        điện tử và các sản phẩm cần sự sang trọng và chuyên nghiệp.
      </p>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Tại Sao Hộp Cứng Được Ưa Chuộng?
      </h3>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Độ bền cao:</strong> Cứng cáp, bảo vệ sản phẩm tối ưu.
        </li>
        <li>
          <strong>Thẩm mỹ sang trọng:</strong> Tạo cảm giác cao cấp cho sản phẩm.
        </li>
        <li>
          <strong>Tăng giá trị thương hiệu:</strong> Giúp sản phẩm nổi bật hơn.
        </li>
        <li>
          <strong>Đa dạng kiểu dáng:</strong> Nắp rời, âm dương, nam châm...
        </li>
      </ul>

      {/* IMAGE */}
      <img
        src={hopcung}
        alt="In hộp cứng"
        className="w-full max-w-2xl rounded-lg shadow-lg mx-auto"
      />

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Lợi Ích Khi In Hộp Cứng Tại Chúng Tôi
      </h3>

      <p>
        Chúng tôi cung cấp dịch vụ in hộp cứng với chất liệu cao cấp, kết hợp các
        kỹ thuật gia công như ép kim, dập nổi, phủ UV, cán màng giúp sản phẩm
        đạt độ hoàn thiện cao và bền đẹp theo thời gian.
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>Thiết kế hộp theo yêu cầu riêng</li>
        <li>Gia công tinh xảo, sắc nét</li>
        <li>Chất liệu cao cấp, bền chắc</li>
        <li>Phù hợp sản phẩm cao cấp, quà tặng</li>
      </ul>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Ứng Dụng Của Hộp Cứng
      </h3>

      <p>
        Hộp cứng được sử dụng rộng rãi trong ngành quà tặng, mỹ phẩm, đồng hồ,
        trang sức, điện tử và các sản phẩm cao cấp. Đây là lựa chọn lý tưởng để
        tạo ấn tượng mạnh với khách hàng ngay từ cái nhìn đầu tiên.
      </p>

      <p>
        Nếu bạn muốn nâng tầm giá trị sản phẩm và tạo trải nghiệm sang trọng cho
        khách hàng, in hộp cứng là giải pháp không thể bỏ qua.
      </p>
    </div>
  );
};

export default InHopCung;