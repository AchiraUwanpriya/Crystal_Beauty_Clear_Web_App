import { BsBox2Heart } from "react-icons/bs";
import { FaChartLine } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { Link, Route, Routes } from "react-router-dom";
import AdminProductPage from "./admin/adminProductPage";
import AdminAddNewProducts from "./admin/adminAddNewProducts";

export default function AdminPage() {
  return (
    <div className="w-full h-full bg-primary flex p-2">
      <div className="w-[300px] h-full bg-primary flex flex-col text-secondary gap-[20px]">
        <div className="flex flex-row w-[90%] h-[70px] bg-accent items-center rounded-2xl mb-[20px]">
          <img
            src="/logo.png"
            alt="CBC - Crystal Beauty Clear"
            className="h-[100px]"
          ></img>
          <span className="text-white text-lg ml-5">Admin Panel</span>
        </div>
        <Link
          to="/admin"
          className="w-[90%] hover:bg-accent rounded-lg flex items-center gap-2 px-4 "
        >
          <FaChartLine />
          Dashboard
        </Link>
        <Link
          to="/admin/orders"
          className="w-[90%] hover:bg-accent rounded-lg flex items-center gap-2 px-4 "
        >
          <MdOutlineShoppingCartCheckout className="text-xl" />
          Orders
        </Link>
        <Link
          to="/admin/products"
          className="w-[90%] hover:bg-accent rounded-lg flex items-center gap-2 px-4 "
        >
          <BsBox2Heart />
          Products
        </Link>
        <Link
          to="/admin"
          className="w-[90%] hover:bg-accent rounded-lg flex items-center gap-2 px-4 "
        >
          <HiOutlineUsers className="text-lg" />
          Users
        </Link>
      </div>
      <div className="w-[calc(100%-300px)] h-full bg-primary border-[2px] border-accent rounded-[20px] overflow-hidden pl-4 pt-4">
        <div className="h-full w-full max-w-full max-h-full overflow-y-scroll text-secondary">
          <Routes path="/admin">
            <Route path="/" element={<h1>Dashboard</h1>} />
            <Route path="/products" element={<AdminProductPage />} />
            <Route path="/orders" element={<h1>Orders</h1>} />
            <Route path="/add-product" element={<AdminAddNewProducts />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
