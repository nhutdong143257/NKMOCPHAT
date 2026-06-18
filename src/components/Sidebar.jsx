import { Link, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    const ok = confirm("Bạn có chắc muốn đăng xuất không?");
    if (!ok) return;

    localStorage.removeItem("token");
    window.location.href = "/admin/login";
  };

  return (
    <div className="w-64 h-screen bg-lime-600/40 border-lime-600 text-gray-800 p-4 rounded-r-2xl shadow-sm mr-1 border-r-8 font-semibold caret-transparent flex flex-col">
      {/* LOGO */}
      <div className="mb-8 flex flex-col items-center text-center">
        <Link to="/admin/dashboard">
          <img
            className="w-32 brightness-125"
            src="/MocPhatLogo.png"
            alt="MocPhatLogo"
          />
        </Link>
        <div className="w-24 h-1 bg-lime-600 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* MENU */}
      <nav className="flex flex-col text-lg gap-2 text-black flex-1">
        <Link
          to="/admin/dashboard"
          className="block px-4 py-2 rounded hover:bg-lime-800 hover:text-white"
        >
          Dashboard
        </Link>

        <Link
          to="/admin/products"
          className="block px-4 py-2 rounded hover:bg-lime-800 hover:text-white"
        >
          Sản phẩm
        </Link>

        <Link
          to="/admin/posts"
          className="block px-4 py-2 rounded hover:bg-lime-800 hover:text-white"
        >
          Tin tức
        </Link>
      </nav>

      {/* LOGOUT */}
      <button
        onClick={handleLogout}
        className="mt-auto w-full px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 transition"
      >
        Đăng xuất
      </button>
    </div>
  );
}
