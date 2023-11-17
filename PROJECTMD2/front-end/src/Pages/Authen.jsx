import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router";
import Logo from "../img/tobirama0.png";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsLogin((prev) => !prev);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:3000/users");
      const data = await response.json();
      console.log("Data from server:", data);

      if (Array.isArray(data) && data.length > 0) {
        const user = data.find(
          (u) => u.email === username && u.password === password
        );

        if (user) {
          console.log("Đăng nhập thành công");
          console.log("User details:", user);

          if (user.role === "admin") {
            console.log("Redirecting to admin page");
            localStorage.setItem("user", JSON.stringify(user));
            navigate("/admin");
          } else if (user.role === "user") {
            console.log("Redirecting to anime page");
            localStorage.setItem("user", JSON.stringify(user));
            navigate("/anime");
          } else {
            console.log("Unknown role");
          }
        } else {
          console.log("Đăng nhập thất bại");
        }
      } else {
        console.log("No user data found");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <div className="flex flex-col items-center border w-[400px] mx-auto my-[150px] p-8 bg-gray-100 rounded-md">
      <div className="flex items-center mb-4">
        <img className="w-32 h-32 mr-2" src={Logo} alt="Logo" />
        <span className="text-lg font-bold text-gray-800">WibuWatch</span>
      </div>
      <h2 className="text-2xl font-semibold mb-4">
        {isLogin ? "Đăng nhập" : "Đăng ký"}
      </h2>
      <div className="flex flex-col mb-4">
        <label htmlFor="username" className="mb-1">
          Tên đăng nhập
        </label>
        <input
          id="username"
          type="text"
          placeholder="Tên đăng nhập"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border rounded-md"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="password" className="mb-1">
          Mật khẩu
        </label>
        <input
          id="password"
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border rounded-md"
        />
      </div>
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        {isLogin ? "Đăng nhập" : "Đăng ký"}
      </button>

      <p className="mt-4 text-blue-500 cursor-pointer" onClick={handleToggle}>
        {isLogin
          ? "Chưa có tài khoản? Đăng ký ngay!"
          : "Đã có tài khoản? Đăng nhập!"}
      </p>
    </div>
  );
};

export default Auth;
