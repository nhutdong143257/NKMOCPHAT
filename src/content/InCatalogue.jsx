import React from "react";
import catalog from "../assets/image/service/catalog.jpg";

const InCatalogue = () => {
  return (
    <div className="space-y-4 leading-relaxed text-gray-700">
      {/* TITLE */}
      <h2 className="text-2xl font-bold text-lime-700 uppercase">
        In Catalogue: Giải Pháp Trình Bày Sản Phẩm Chuyên Nghiệp & Đẳng Cấp
      </h2>

      {/* INTRO */}
      <p>
        Catalogue không chỉ đơn thuần là một ấn phẩm giới thiệu sản phẩm mà còn
        là “bộ mặt thương hiệu” giúp doanh nghiệp thể hiện sự chuyên nghiệp và
        đẳng cấp trong mắt khách hàng. Một cuốn catalogue được thiết kế đẹp mắt,
        bố cục rõ ràng và in ấn chất lượng cao sẽ giúp nâng tầm hình ảnh doanh
        nghiệp một cách hiệu quả.
      </p>

      <p>
        Trong thời đại cạnh tranh mạnh mẽ, việc sở hữu một catalogue ấn tượng sẽ
        giúp bạn tạo sự khác biệt, tăng độ tin cậy và thúc đẩy quyết định mua
        hàng của khách hàng.
      </p>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Tại Sao Catalogue Quan Trọng?
      </h3>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Trình bày sản phẩm chuyên nghiệp:</strong> Giúp khách hàng dễ
          dàng theo dõi thông tin sản phẩm.
        </li>
        <li>
          <strong>Tăng độ tin cậy:</strong> Catalogue chất lượng giúp doanh nghiệp
          trở nên uy tín hơn.
        </li>
        <li>
          <strong>Hỗ trợ bán hàng hiệu quả:</strong> Nhân viên dễ dàng giới thiệu
          sản phẩm với khách hàng.
        </li>
        <li>
          <strong>Xây dựng thương hiệu:</strong> Thể hiện phong cách và hình ảnh
          doanh nghiệp.
        </li>
      </ul>

      {/* IMAGE */}
      <img
        src={catalog}
        alt="In catalogue"
        className="w-full max-w-2xl rounded-lg shadow-lg mx-auto"
      />

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Lợi Ích Khi In Catalogue Tại Chúng Tôi
      </h3>

      <p>
        Chúng tôi cung cấp dịch vụ in catalogue chuyên nghiệp với đa dạng kích
        thước (A4, A5, vuông…), nhiều loại giấy cao cấp cùng các kỹ thuật gia
        công như cán màng, ép kim, đóng gáy keo nhiệt hoặc khâu chỉ giúp sản phẩm
        bền đẹp và sang trọng.
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>In ấn sắc nét, màu chuẩn</li>
        <li>Thiết kế catalogue theo yêu cầu</li>
        <li>Đóng cuốn chắc chắn, bền đẹp</li>
        <li>Giá tốt cho số lượng lớn</li>
      </ul>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Ứng Dụng Của Catalogue
      </h3>

      <p>
        Catalogue được sử dụng phổ biến trong nhiều lĩnh vực như thời trang,
        nội thất, mỹ phẩm, bất động sản, công nghiệp… Đây là công cụ không thể
        thiếu trong các buổi gặp gỡ khách hàng, hội chợ, showroom hoặc sự kiện
        giới thiệu sản phẩm.
      </p>

      <p>
        Nếu bạn muốn nâng tầm thương hiệu và gia tăng doanh số bán hàng, một cuốn
        catalogue chuyên nghiệp chính là lựa chọn đầu tư hiệu quả và lâu dài.
      </p>
    </div>
  );
};

export default InCatalogue;