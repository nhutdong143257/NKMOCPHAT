import React from "react";
import thiep from "../assets/image/service/thiep.jpg";

const InThiep = () => {
  return (
    <div className="space-y-4 leading-relaxed text-gray-700">
      {/* TITLE */}
      <h2 className="text-2xl font-bold text-lime-700 uppercase">
        In Thiệp: Gửi Gắm Thông Điệp & Tạo Dấu Ấn Đặc Biệt
      </h2>

      {/* INTRO */}
      <p>
        Thiệp là cách tuyệt vời để truyền tải thông điệp một cách trang trọng và
        ý nghĩa. Dù là thiệp cưới, thiệp mời, thiệp sinh nhật hay thiệp sự kiện,
        mỗi tấm thiệp đều mang giá trị cảm xúc và thể hiện sự trân trọng đối với
        người nhận.
      </p>

      <p>
        Một thiết kế thiệp đẹp kết hợp với chất lượng in ấn cao cấp sẽ giúp bạn
        tạo ấn tượng sâu sắc, thể hiện phong cách riêng và sự tinh tế trong từng
        chi tiết.
      </p>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Tại Sao In Thiệp Quan Trọng?
      </h3>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Thể hiện sự trang trọng:</strong> Thiệp giúp lời mời trở nên
          lịch sự và chuyên nghiệp hơn.
        </li>
        <li>
          <strong>Gửi gắm cảm xúc:</strong> Là cầu nối truyền tải thông điệp chân
          thành đến người nhận.
        </li>
        <li>
          <strong>Tạo ấn tượng:</strong> Thiệp đẹp giúp sự kiện của bạn trở nên
          đặc biệt và đáng nhớ.
        </li>
        <li>
          <strong>Thể hiện phong cách cá nhân:</strong> Thiết kế riêng giúp bạn
          nổi bật và khác biệt.
        </li>
      </ul>

      {/* IMAGE */}
      <img
        src={thiep}
        alt="In thiệp"
        className="w-full max-w-2xl rounded-lg shadow-lg mx-auto"
      />

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Lợi Ích Khi In Thiệp Tại Chúng Tôi
      </h3>

      <p>
        Chúng tôi cung cấp dịch vụ in thiệp với đa dạng mẫu mã, chất liệu giấy
        cao cấp và nhiều kỹ thuật gia công như ép kim, dập nổi, cắt laser giúp
        thiệp trở nên sang trọng và độc đáo.
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>Thiết kế thiệp theo yêu cầu</li>
        <li>Chất liệu giấy đa dạng, cao cấp</li>
        <li>In sắc nét, màu chuẩn</li>
        <li>Gia công tinh xảo, sang trọng</li>
      </ul>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Ứng Dụng Của Thiệp
      </h3>

      <p>
        Thiệp được sử dụng trong nhiều dịp như cưới hỏi, sinh nhật, khai trương,
        hội nghị, sự kiện doanh nghiệp… Đây là một phần không thể thiếu giúp
        truyền tải thông tin và tạo dấu ấn chuyên nghiệp cho mỗi sự kiện.
      </p>

      <p>
        Nếu bạn muốn sự kiện của mình trở nên đặc biệt và đáng nhớ, một tấm thiệp
        được thiết kế và in ấn chỉn chu chính là lựa chọn hoàn hảo.
      </p>
    </div>
  );
};

export default InThiep;