import { Route, Routes } from "react-router-dom";
import Header from "../src/components/header";
import ProductPage from "./admin/productPage";

export default function HomePage() {
  return (
    <div className="w-full h-full bg-red-100">
      <Header />
      <Routes path="/">
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
        <Route path="/*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
}
