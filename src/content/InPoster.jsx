import React from "react";
import poster from "../assets/image/service/poster1.jpg";

const InPoster = () => {
  return (
    <div className="space-y-4 leading-relaxed text-gray-700">
      {/* TITLE */}
      <h2 className="text-2xl font-bold text-lime-700 uppercase">
        In Poster: Giải Pháp Quảng Cáo Trực Quan & Thu Hút Mọi Ánh Nhìn
      </h2>

      {/* INTRO */}
      <p>
        Poster là một trong những hình thức quảng cáo trực quan mạnh mẽ nhất,
        giúp truyền tải thông điệp nhanh chóng và gây ấn tượng ngay từ cái nhìn
        đầu tiên. Với thiết kế nổi bật và kích thước lớn, poster dễ dàng thu hút
        sự chú ý của khách hàng tại cửa hàng, sự kiện hoặc khu vực đông người.
      </p>

      <p>
        Một poster được thiết kế chuyên nghiệp kết hợp với chất lượng in sắc nét
        sẽ giúp nâng cao hình ảnh thương hiệu và tăng hiệu quả truyền thông đáng
        kể. Đây là công cụ không thể thiếu trong các chiến dịch marketing hiện
        đại.
      </p>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Tại Sao Poster Lại Quan Trọng?
      </h3>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Thu hút ánh nhìn mạnh mẽ:</strong> Kích thước lớn, hình ảnh nổi
          bật dễ gây chú ý.
        </li>
        <li>
          <strong>Truyền tải thông điệp nhanh:</strong> Khách hàng chỉ cần vài
          giây để nắm nội dung chính.
        </li>
        <li>
          <strong>Phù hợp nhiều mục đích:</strong> Quảng cáo, sự kiện, khuyến mãi,
          trang trí.
        </li>
        <li>
          <strong>Tăng nhận diện thương hiệu:</strong> Giúp thương hiệu xuất hiện
          nhiều hơn trước khách hàng.
        </li>
      </ul>

      {/* IMAGE */}
      <img
        src={poster}
        alt="In poster quảng cáo"
        className="w-full max-w-2xl rounded-lg shadow-lg mx-auto"
      />

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Lợi Ích Khi In Poster Tại Chúng Tôi
      </h3>

      <p>
        Chúng tôi cung cấp dịch vụ in poster với công nghệ in hiện đại, đảm bảo
        màu sắc sống động, hình ảnh sắc nét và độ bền cao. Đa dạng kích thước từ
        A3, A2, A1 đến poster khổ lớn phù hợp với mọi nhu cầu sử dụng.
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>In nhanh – lấy ngay trong ngày</li>
        <li>Màu sắc chuẩn, hình ảnh sắc nét</li>
        <li>Hỗ trợ thiết kế theo yêu cầu</li>
        <li>In khổ lớn, giá tốt số lượng nhiều</li>
      </ul>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Ứng Dụng Của Poster
      </h3>

      <p>
        Poster được sử dụng rộng rãi trong các lĩnh vực như quảng cáo sản phẩm,
        sự kiện, phim ảnh, âm nhạc, giáo dục và trang trí không gian. Đây là công
        cụ hiệu quả để truyền thông nhanh chóng và tạo điểm nhấn cho thương hiệu.
      </p>

      <p>
        Nếu bạn đang tìm kiếm một giải pháp quảng cáo trực quan, chi phí hợp lý
        nhưng mang lại hiệu quả cao, in poster chính là lựa chọn lý tưởng.
      </p>
    </div>
  );
};

export default InPoster;