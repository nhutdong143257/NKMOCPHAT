import React from "react";
import sticker from "../assets/image/service/sticker.png";

const InSticker = () => {
  return (
    <div className="space-y-4 leading-relaxed text-gray-700">
      {/* TITLE */}
      <h2 className="text-2xl font-bold text-lime-700 uppercase">
        In Sticker: Giải Pháp Nhận Diện Thương Hiệu Nhanh & Hiệu Quả
      </h2>

      {/* INTRO */}
      <p>
        Sticker (tem nhãn) là một trong những công cụ marketing nhỏ gọn nhưng
        cực kỳ hiệu quả trong việc xây dựng và phát triển thương hiệu. Với thiết
        kế linh hoạt và khả năng ứng dụng đa dạng, sticker giúp sản phẩm của bạn
        trở nên chuyên nghiệp và dễ nhận diện hơn trong mắt khách hàng.
      </p>

      <p>
        Một chiếc sticker được in sắc nét, chất liệu tốt không chỉ giúp truyền
        tải thông tin sản phẩm mà còn góp phần nâng cao giá trị và sự uy tín của
        thương hiệu.
      </p>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Tại Sao Sticker Quan Trọng?
      </h3>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Nhận diện thương hiệu nhanh:</strong> Logo và thông tin được hiển thị rõ ràng.
        </li>
        <li>
          <strong>Chi phí thấp:</strong> Phù hợp cho mọi quy mô kinh doanh.
        </li>
        <li>
          <strong>Dễ sử dụng:</strong> Dán trực tiếp lên sản phẩm, bao bì hoặc quà tặng.
        </li>
        <li>
          <strong>Tăng tính chuyên nghiệp:</strong> Giúp sản phẩm đồng bộ và đẹp mắt hơn.
        </li>
      </ul>

      {/* IMAGE */}
      <img
        src={sticker}
        alt="In sticker tem nhãn"
        className="w-full max-w-2xl rounded-lg shadow-lg mx-auto"
      />

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Lợi Ích Khi In Sticker Tại Chúng Tôi
      </h3>

      <p>
        Chúng tôi cung cấp dịch vụ in sticker với nhiều loại chất liệu như decal
        giấy, decal nhựa, decal trong, decal chống nước… phù hợp với nhiều nhu
        cầu sử dụng khác nhau. Công nghệ in hiện đại đảm bảo màu sắc sắc nét,
        bám dính tốt và độ bền cao.
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>In số lượng ít hoặc nhiều đều được</li>
        <li>Chất liệu đa dạng, bền đẹp</li>
        <li>Hỗ trợ thiết kế theo yêu cầu</li>
        <li>Giá thành cạnh tranh</li>
      </ul>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Ứng Dụng Của Sticker
      </h3>

      <p>
        Sticker được sử dụng rộng rãi trong nhiều lĩnh vực như thực phẩm, mỹ
        phẩm, thời trang, quà tặng, logistics… Đây là giải pháp đơn giản nhưng
        cực kỳ hiệu quả để dán nhãn sản phẩm và quảng bá thương hiệu.
      </p>

      <p>
        Nếu bạn muốn sản phẩm của mình chuyên nghiệp hơn và dễ dàng ghi dấu ấn
        trong tâm trí khách hàng, in sticker chính là lựa chọn tối ưu.
      </p>
    </div>
  );
};

export default InSticker;