import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { supabase } from "../../supabase";

export default function Login() {
  const [form, setForm] = useState({});
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    let err = {};

    if (!form.username?.trim()) err.username = "Nhập username";
    if (!form.password?.trim()) err.password = "Nhập password";

    setError(err);
    return Object.keys(err).length === 0;
  };

  // const handleLogin = async () => {
  //   if (!validate()) return;

  //   try {
  //     const res = await fetch("http://localhost:5000/api/auth/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(form),
  //     });

  //     const data = await res.json();

  //     if (res.ok && data.accessToken) {
  //       localStorage.setItem("token", data.accessToken);
  //       navigate("/admin/dashboard");
  //     } else {
  //       setError({ general: data.message });
  //     }
  //   } catch (err) {
  //     console.log(err);
  //     setError({ general: "Server lỗi" });
  //   }
  // };

  const handleLogin = async () => {
    if (!validate()) return;

    try {
      const { data, error: dbError } = await supabase
        .from("users")
        .select("*")
        .eq("username", form.username)
        .eq("password", form.password)
        .single();

      if (dbError || !data) {
        setError({ general: "Sai tài khoản hoặc mật khẩu" });
        return;
      }

      localStorage.setItem("admin", JSON.stringify(data));
      navigate("/admin/dashboard");
    } catch (err) {
      console.error(err);
      setError({ general: "Đăng nhập thất bại" });
    }
  };

  return (
    <div className="min-h-screen font-semibold flex items-center justify-center bg-gradient-to-r from-lime-200 to-gray-300">
      <div className="bg-white rounded-2xl shadow-lg w-200 h-105 flex overflow-hidden">
        {/* LEFT */}
        <div className="w-1/2 flex items-center justify-center bg-gray-50 relative">
          <img
            className="w-80 brightness-125"
            src="/MocPhatLogo.png"
            alt="MocPhatLogo"
          />
        </div>

        {/* RIGHT */}
        <div className="w-1/2 flex flex-col justify-center px-10">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6 text-center uppercase">
            Đăng <span className="text-lime-700">nhập</span>
          </h2>

          {/* USERNAME */}
          <input
            placeholder="Tài khoản..."
            className="mb-2 px-4 py-2 rounded-full bg-gray-100 focus:outline-none"
            onChange={(e) => setForm({ ...form, username: e.target.value })}
          />
          {error.username && (
            <p className="text-red-500 text-sm mb-2">{error.username}</p>
          )}

          {/* PASSWORD */}
          <input
            type="password"
            placeholder="Mật khẩu..."
            className="mb-2 px-4 py-2 rounded-full bg-gray-100 focus:outline-none"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          {error.password && (
            <p className="text-red-500 text-sm mb-2">{error.password}</p>
          )}

          {/* ERROR */}
          {error.general && (
            <p className="text-red-500 text-sm mb-2 text-center">
              {error.general}
            </p>
          )}

          {/* BUTTON */}
          <button
            type="button"
            onClick={handleLogin}
            className="bg-green-500 text-white py-2 rounded-full hover:bg-green-600 transition"
          >
            ĐĂNG NHẬP
          </button>

          <p className="text-xs text-gray-400 mt-3 text-center cursor-pointer">
            Quên tài khoản / mật khẩu?
          </p>

          <Link to="/" className="mx-auto">
            <p className="text-xs text-gray-500 mt-6 text-center cursor-pointer">
              Quay lại trang chủ →
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
