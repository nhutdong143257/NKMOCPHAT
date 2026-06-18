import React from "react";
import hopnhua from "../assets/image/service/hopnhua.jpg";

const InHopNhua = () => {
  return (
    <div className="space-y-4 leading-relaxed text-gray-700">
      {/* TITLE */}
      <h2 className="text-2xl font-bold text-lime-700 uppercase">
        In Hộp Nhựa: Giải Pháp Bao Bì Bền Bỉ & Hiện Đại
      </h2>

      {/* INTRO */}
      <p>
        In hộp nhựa là lựa chọn tối ưu cho các doanh nghiệp cần một giải pháp bao
        bì chắc chắn, chống nước và bảo vệ sản phẩm tốt. Với đặc tính bền, nhẹ và
        linh hoạt, hộp nhựa ngày càng được sử dụng rộng rãi trong nhiều ngành
        hàng khác nhau.
      </p>

      <p>
        Không chỉ đảm bảo chức năng bảo quản, hộp nhựa in ấn đẹp còn giúp nâng
        cao giá trị sản phẩm và tạo ấn tượng chuyên nghiệp với khách hàng ngay từ
        cái nhìn đầu tiên.
      </p>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Tại Sao Nên In Hộp Nhựa?
      </h3>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Độ bền cao:</strong> Chịu lực tốt, không dễ bị biến dạng.
        </li>
        <li>
          <strong>Chống nước, chống ẩm:</strong> Bảo vệ sản phẩm hiệu quả trong
          nhiều điều kiện.
        </li>
        <li>
          <strong>Tăng tính thẩm mỹ:</strong> Thiết kế đẹp giúp sản phẩm nổi bật.
        </li>
        <li>
          <strong>Đa dạng ứng dụng:</strong> Phù hợp thực phẩm, mỹ phẩm, điện tử…
        </li>
      </ul>

      {/* IMAGE */}
      <img
        src={hopnhua}
        alt="In hộp nhựa"
        className="w-full max-w-2xl rounded-lg shadow-lg mx-auto"
      />

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Lợi Ích Khi In Hộp Nhựa Tại Chúng Tôi
      </h3>

      <p>
        Chúng tôi cung cấp dịch vụ in hộp nhựa với nhiều chất liệu như PET, PP,
        PVC… đảm bảo độ bền và an toàn cho sản phẩm. Công nghệ in hiện đại giúp
        hình ảnh sắc nét, bền màu và không bong tróc theo thời gian.
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>In sắc nét, màu chuẩn</li>
        <li>Chất liệu nhựa cao cấp, an toàn</li>
        <li>Thiết kế theo yêu cầu</li>
        <li>Giá tốt cho đơn hàng số lượng lớn</li>
      </ul>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Ứng Dụng Của Hộp Nhựa
      </h3>

      <p>
        Hộp nhựa được sử dụng phổ biến trong ngành thực phẩm, mỹ phẩm, linh kiện
        điện tử, quà tặng và nhiều lĩnh vực khác. Đây là giải pháp bao bì giúp
        sản phẩm được bảo vệ tối ưu và tăng tính chuyên nghiệp.
      </p>

      <p>
        Nếu bạn cần một loại bao bì vừa bền chắc vừa thẩm mỹ, in hộp nhựa chính là
        lựa chọn phù hợp để nâng tầm sản phẩm của bạn.
      </p>
    </div>
  );
};

export default InHopNhua;