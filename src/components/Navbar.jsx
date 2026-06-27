import React from "react";
import { NavLink } from "react-router-dom";

const navItemClass = ({ isActive }) =>
  `cursor-pointer pb-1 border-b-2 transition-all duration-300 whitespace-nowrap ${
    isActive ? "border-lime-600" : "border-transparent hover:border-lime-600"
  }`;

const Navbar = () => {
  return (
    <nav className="bg-white/70 backdrop-blur-md shadow-sm pt-1 sticky top-0 z-50 caret-transparent">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex justify-center gap-4 sm:gap-7 md:gap-10 py-3 font-medium text-sm sm:text-base text-gray-800 overflow-x-auto">
          <NavLink to="/" className={navItemClass}>
            Giới thiệu
          </NavLink>

          <NavLink to="/dich-vu" className={navItemClass}>
            Dịch vụ
          </NavLink>

          <NavLink to="/san-pham" className={navItemClass}>
            Sản phẩm
          </NavLink>

          <NavLink to="/tin-tuc" className={navItemClass}>
            Tin tức
          </NavLink>

          <NavLink to="/in-nhanh" className={navItemClass}>
            In nhanh
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
