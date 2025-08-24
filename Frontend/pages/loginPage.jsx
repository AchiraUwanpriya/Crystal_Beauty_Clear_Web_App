import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function login() {
    try{
    const response = await axios.post(
      import.meta.env.VITE_API_URL + "/api/users/login",
      {
        email: email,
        password: password,
      }
    );
    localStorage.setItem("token", response.data.token);
    toast.success("Login successful!");

   const user = response.data.user;
   
   if (user.role == "admin"){

   navigate("/admin");
   }else{
    navigate("/");
   }
  }catch(error){
    console.error("Login failed:", error);
    toast.error("Login failed. Please try again.");
  }
}

  return (
    <div className="w-full h-screen bg-[url('/cosmetics-2746013_1920.jpg')] bg-cover bg-center flex">
      {/* Left side (branding) */}
      <div className="w-[50%] h-full flex items-center justify-center">
        <div className="flex flex-col items-center gap-6 text-center">
          <img src="/logo.png" alt="CBC Logo" className="w-40 h-40 drop-shadow-xl" />
          <h1 className="text-5xl font-bold text-primary-500 drop-shadow-md">
            Crystal Beauty Clear
          </h1>
          <p className="text-lg text-neutral-text bg-white/40 px-6 py-2 rounded-xl backdrop-blur-sm">
            Discover your true beauty with CBC Cosmetics
          </p>
        </div>
      </div>

      {/* Right side (login form) */}
      <div className="w-[50%] h-full flex justify-center items-center">
        <div className="w-[480px] h-[520px] bg-white/40 backdrop-blur-xl shadow-2xl rounded-2xl flex flex-col items-center p-[60px] gap-[22px] border border-white/20">
          <h2 className="text-4xl font-semibold text-secondary-500 mb-4">Login</h2>

          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-[50px] p-3 border border-gray-300 rounded-lg bg-accent-100/60 text-secondary-700 placeholder-secondary-300 focus:outline-none focus:ring-2 focus:ring-accent-500"
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-[50px] p-3 border border-gray-300 rounded-lg bg-accent-100/60 text-secondary-700 placeholder-secondary-300 focus:outline-none focus:ring-2 focus:ring-accent-500"
          />

          <button
            onClick={login}
            className="w-full h-[50px] bg-primary-500 hover:bg-primary-700 text-white rounded-lg font-medium transition-all duration-300 shadow-md"
          >
            Login
          </button>

          <p className="text-sm text-secondary-700 mt-4">
            Don’t have an account?{" "}
            <a href="/register" className="text-accent-700 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

