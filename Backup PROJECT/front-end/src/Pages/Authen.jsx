import React, { useState } from "react";
import { Outlet } from "react-router";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleToggle = () => {
    setIsLogin((prev) => !prev);
  };

  const handleSubmit = () => {
    if (isLogin) {
      console.log("Đăng nhập với:", username, password);
    } else {
      console.log("Đăng ký với:", username, password);
    }
  };

  return (
    <div>
      <Outlet>
        <h2>{isLogin ? "Đăng nhập" : "Đăng ký"}</h2>
        <input
          type="text"
          placeholder="Tên đăng nhập"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>
          {isLogin ? "Đăng nhập" : "Đăng ký"}
        </button>
        <p onClick={handleToggle}>
          {isLogin
            ? "Chưa có tài khoản? Đăng ký ngay!"
            : "Đã có tài khoản? Đăng nhập!"}
        </p>
      </Outlet>
    </div>
  );
};

export default Auth;
