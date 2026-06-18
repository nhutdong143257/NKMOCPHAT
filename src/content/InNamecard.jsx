import React from "react";
import namecard from "../assets/image/service/namecard.jpg";

const InNamecard = () => {
  return (
    <div className="space-y-4 leading-relaxed text-gray-700">
      {/* TITLE */}
      <h2 className="text-2xl font-bold text-lime-700 uppercase">
        In Namecard: Bí Quyết Tạo Dấu Ấn Chuyên Nghiệp & Khác Biệt
      </h2>

      {/* INTRO */}
      <p>
        In namecard không chỉ đơn giản là tạo ra một tấm danh thiếp, mà đó là
        cách bạn xây dựng ấn tượng đầu tiên với khách hàng và đối tác. Một chiếc
        namecard được thiết kế chuyên nghiệp sẽ giúp bạn thể hiện sự chỉn chu,
        đẳng cấp và uy tín ngay từ lần gặp gỡ đầu tiên.
      </p>

      <p>
        Trong môi trường kinh doanh cạnh tranh ngày nay, việc sở hữu một tấm
        namecard đẹp, độc đáo sẽ giúp bạn nổi bật giữa hàng trăm đối thủ. Đây
        chính là “công cụ marketing cá nhân” nhỏ gọn nhưng vô cùng hiệu quả.
      </p>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Tại Sao Namecard Lại Quan Trọng?
      </h3>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Tạo ấn tượng đầu tiên:</strong> Một thiết kế đẹp giúp bạn ghi
          điểm ngay từ cái nhìn đầu tiên.
        </li>
        <li>
          <strong>Xây dựng thương hiệu cá nhân:</strong> Namecard thể hiện phong
          cách và hình ảnh chuyên nghiệp của bạn.
        </li>
        <li>
          <strong>Kết nối dễ dàng:</strong> Giúp đối tác lưu giữ thông tin nhanh
          chóng và thuận tiện.
        </li>
        <li>
          <strong>Tăng độ tin cậy:</strong> Một tấm danh thiếp chỉn chu giúp bạn
          trở nên đáng tin hơn trong mắt khách hàng.
        </li>
      </ul>

      <img
        src={namecard}
        alt="Namecard"
        className="w-full max-w-2xl rounded-lg shadow-lg mx-auto"
      />

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Lợi Ích Khi In Namecard Tại Chúng Tôi
      </h3>

      <p>
        Chúng tôi cung cấp dịch vụ in namecard chuyên nghiệp với nhiều tùy chọn
        từ chất liệu giấy đến kỹ thuật gia công cao cấp như ép kim, dập nổi, phủ
        UV. Mỗi sản phẩm đều được kiểm tra kỹ lưỡng trước khi đến tay khách
        hàng, đảm bảo chất lượng cao nhất.
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>In nhanh, lấy liền trong ngày</li>
        <li>Giá thành cạnh tranh</li>
        <li>Thiết kế theo yêu cầu</li>
        <li>Chất liệu đa dạng, cao cấp</li>
      </ul>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Ứng Dụng Của Namecard
      </h3>

      <p>
        Namecard được sử dụng rộng rãi trong nhiều lĩnh vực khác nhau như kinh
        doanh, marketing, bất động sản, tài chính, dịch vụ... Không chỉ dành cho
        doanh nghiệp, cá nhân cũng có thể sử dụng namecard để xây dựng hình ảnh
        chuyên nghiệp hơn trong mắt người khác.
      </p>

      <p>
        Dù bạn là freelancer, chủ doanh nghiệp hay nhân viên văn phòng, một
        chiếc namecard đẹp luôn là một công cụ không thể thiếu trong hành trình
        phát triển sự nghiệp.
      </p>
    </div>
  );
};

export default InNamecard;
