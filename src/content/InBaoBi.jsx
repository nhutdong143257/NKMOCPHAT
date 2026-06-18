import React from "react";
import baobi from "../assets/image/service/baobi.jpg";

const InBaoBi = () => {
  return (
    <div className="space-y-4 leading-relaxed text-gray-700">
      {/* TITLE */}
      <h2 className="text-2xl font-bold text-lime-700 uppercase">
        In Bao Bì: Giải Pháp Nâng Tầm Sản Phẩm & Khẳng Định Thương Hiệu
      </h2>

      {/* INTRO */}
      <p>
        Bao bì không chỉ đơn thuần là lớp vỏ bảo vệ sản phẩm mà còn là yếu tố
        quan trọng giúp thu hút khách hàng ngay từ cái nhìn đầu tiên. Một thiết
        kế bao bì đẹp, chuyên nghiệp sẽ góp phần nâng cao giá trị sản phẩm và
        tạo ấn tượng mạnh mẽ trên thị trường.
      </p>

      <p>
        Trong môi trường cạnh tranh hiện nay, bao bì chính là “vũ khí marketing
        thầm lặng” giúp doanh nghiệp nổi bật giữa hàng loạt đối thủ. Một sản phẩm
        có bao bì ấn tượng sẽ dễ dàng chiếm được cảm tình và tăng khả năng mua
        hàng của khách hàng.
      </p>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Tại Sao Bao Bì Quan Trọng?
      </h3>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Tạo ấn tượng đầu tiên:</strong> Bao bì đẹp giúp thu hút khách
          hàng ngay từ ánh nhìn đầu tiên.
        </li>
        <li>
          <strong>Bảo vệ sản phẩm:</strong> Giúp sản phẩm an toàn trong quá trình
          vận chuyển và lưu trữ.
        </li>
        <li>
          <strong>Tăng giá trị sản phẩm:</strong> Bao bì cao cấp giúp sản phẩm trở
          nên sang trọng và chuyên nghiệp hơn.
        </li>
        <li>
          <strong>Xây dựng thương hiệu:</strong> Giúp khách hàng nhận diện và ghi
          nhớ thương hiệu dễ dàng.
        </li>
      </ul>

      {/* IMAGE */}
      <img
        src={baobi}
        alt="In bao bì sản phẩm"
        className="w-full max-w-2xl rounded-lg shadow-lg mx-auto"
      />

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Lợi Ích Khi In Bao Bì Tại Chúng Tôi
      </h3>

      <p>
        Chúng tôi cung cấp dịch vụ in bao bì với đa dạng chất liệu như giấy,
        carton, kraft, hộp cứng… cùng nhiều kỹ thuật gia công hiện đại như ép
        kim, phủ UV, cán màng, dập nổi giúp sản phẩm của bạn trở nên nổi bật và
        khác biệt.
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>Thiết kế bao bì theo yêu cầu</li>
        <li>Chất liệu đa dạng, cao cấp</li>
        <li>In ấn sắc nét, màu chuẩn</li>
        <li>Giá tốt cho số lượng lớn</li>
      </ul>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Ứng Dụng Của Bao Bì
      </h3>

      <p>
        Bao bì được sử dụng trong hầu hết các ngành hàng như thực phẩm, mỹ phẩm,
        thời trang, điện tử, quà tặng… Đây là yếu tố không thể thiếu để nâng cao
        giá trị sản phẩm và tạo lợi thế cạnh tranh trên thị trường.
      </p>

      <p>
        Nếu bạn muốn sản phẩm của mình nổi bật và tạo ấn tượng mạnh với khách
        hàng, đầu tư vào bao bì chính là một bước đi chiến lược và lâu dài.
      </p>
    </div>
  );
};

export default InBaoBi;