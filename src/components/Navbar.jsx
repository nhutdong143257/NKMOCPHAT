import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItemClass = ({ isActive }) =>
  `cursor-pointer pb-1 border-b-2 transition-all duration-300 whitespace-nowrap ${
    isActive ? "border-lime-600" : "border-transparent hover:border-lime-600"
  }`;

const links = [
  { to: "/", label: "Giới thiệu" },
  { to: "/dich-vu", label: "Dịch vụ" },
  { to: "/san-pham", label: "Sản phẩm" },
  { to: "/tin-tuc", label: "Tin tức" },
  { to: "/lien-he", label: "Liên hệ" },
  { to: "/in-nhanh", label: "In nhanh" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Đổi trang thì tự đóng menu
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <nav className="bg-white/70 backdrop-blur-md shadow-sm sticky top-0 z-50 caret-transparent">
      <div className="max-w-7xl mx-auto px-4">
        {/* ===== DESKTOP: menu ngang ===== */}
        <ul className="hidden md:flex justify-center gap-7 md:gap-10 py-3 font-medium text-base text-gray-800">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={navItemClass}>
              {l.label}
            </NavLink>
          ))}
        </ul>

        {/* ===== MOBILE: nút hamburger ===== */}
        <div className="md:hidden flex items-center justify-between py-3">
          <span className="font-semibold text-lime-800 ">NK Mộc Phát</span>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Đóng menu" : "Mở menu"}
            className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-700 hover:bg-lime-50 hover:text-lime-700 transition"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ===== MOBILE: menu xổ dọc ===== */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          open ? "max-h-96 border-t border-gray-100" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-4 py-2 font-medium text-gray-800">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `py-3 px-2 border-l-4 rounded-r-lg transition-all ${
                  isActive
                    ? "border-lime-600 bg-lime-50 text-lime-700"
                    : "border-transparent hover:bg-gray-50 hover:border-lime-300"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
