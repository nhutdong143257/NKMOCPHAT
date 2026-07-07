import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();

  // Không hiển thị ở trang chủ
  if (location.pathname === "/") return null;

  const pathnames = location.pathname.split("/").filter((x) => x);

  const nameMap = {
    "dich-vu": "Dịch vụ",
    "san-pham": "Sản phẩm",
    "bao-gia": "Báo giá",
    "tin-tuc": "Tin tức",
    "lien-he": "Liên hệ",
    "in-nhanh": "In nhanh",
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm text-gray-700">
        <ul className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto whitespace-nowrap scrollbar-none [-ms-overflow-style:none]">
          <li className="shrink-0">
            <Link to="/" className="hover:text-lime-600">
              Trang chủ
            </Link>
          </li>

          {pathnames.map((value, index) => {
            const isProductDetail =
              pathnames[0] === "san-pham" && pathnames.length > 1;
            if (isProductDetail && index > 0) return null;
            const to = "/" + pathnames.slice(0, index + 1).join("/");
            const name = nameMap[value] || value;

            return (
              <React.Fragment key={to}>
                <span className="shrink-0 text-gray-400">/</span>
                <li className="shrink-0">
                  <Link
                    to={to}
                    className="text-lime-600 font-semibold hover:text-lime-700"
                  >
                    {name}
                  </Link>
                </li>
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Breadcrumbs;
