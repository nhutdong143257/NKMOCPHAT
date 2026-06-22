import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const admin = JSON.parse(localStorage.getItem("admin"));

  if (!admin?.id) {
    return <Navigate to="/admin/login" replace />;
  }

  return <Outlet />;
}