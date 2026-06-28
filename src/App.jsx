import { Routes, Route, useLocation } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import Cart from "./pages/CartPage";
import NotFound from "./pages/NotFoundPage";
import ServicePage from "./pages/ServicePage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import ProductPage from "./pages/ProductPage";
import NewPage from "./pages/NewPage";
import FastPrintPage from "./pages/FastPrintPage";
import PostDetailPage from "./pages/PostDetailPage";
import ProductDetail from "./pages/ProductDetail";

// Admin Pages
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import ProductAdminPage from "./pages/admin/Products";
import PostAdminPage from "./pages/admin/Posts";

// Components
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Breadcrumbs from "./components/Breadcrumbs";
import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";

// Protected route
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const location = useLocation();

  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <>
      {/* USER LAYOUT */}
      {!isAdmin && (
        <>
          <Header />
          <Navbar />
          <Breadcrumbs />
        </>
      )}

      <ScrollToTop />
      <BackToTop/>

      <Routes>
        {/* USER */}
        <Route path="/" element={<HomePage />} />
        <Route path="/gio-hang" element={<Cart />} />
        <Route path="/dich-vu" element={<ServicePage />} />
        <Route path="/dich-vu/:slug" element={<ServiceDetailPage />} />

        <Route path="/san-pham" element={<ProductPage />} />
        <Route path="/san-pham/:slug" element={<ProductDetail />} />

        <Route path="/tin-tuc" element={<NewPage />} />
        <Route path="/tin-tuc/:slug" element={<PostDetailPage />} />

        <Route path="/in-nhanh" element={<FastPrintPage />} />

        {/* ADMIN PUBLIC */}
        <Route path="/admin/login" element={<Login />} />

        {/* ADMIN PROTECTED */}
        <Route element={<ProtectedRoute />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/products" element={<ProductAdminPage />} />
          <Route path="/admin/posts" element={<PostAdminPage />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* USER FOOTER */}
      {!isAdmin && <Footer />}
    </>
  );
}

export default App;
