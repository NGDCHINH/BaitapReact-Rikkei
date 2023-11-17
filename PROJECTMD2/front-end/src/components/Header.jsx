import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../img/tobirama0.png";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setLoggedIn(true);
    }
  }, []);

  const handleLoginClick = () => {
    if (!isLoggedIn) {
      navigate("/");
    } else {
      setLoggedIn(false);
      setUser(null);
      localStorage.removeItem("user");
    }
  };

  const handleAvatarClick = () => {
    if (isLoggedIn) {
      handleLoginClick();
      navigate("/");
    }
  };

  const handleSearch = () => {
    console.log(`Performing search for: ${searchQuery}`);
  };

  const handleToFAV = () => {
    navigate("/anime/fav");
  };

  return (
    <div className="flex items-center justify-between bg-slate-700 px-5">
      <div className="flex items-center">
        <img className="w-32 h-32" src={Logo} alt="Logo" />
        <span className="text-lg decoration-solid text-white">WibuWatch</span>
      </div>
      <div>
        <div className="flex items-center justify-center p-5">
          <div className="rounded-lg bg-gray-200 p-5">
            <div className="flex">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-[360px] bg-white pl-2 text-base font-semibold outline-0"
                placeholder="Search"
              />
              <input
                type="button"
                value="Tìm kiếm"
                onClick={() => handleSearch()}
                className="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        {isLoggedIn ? (
          <div className="flex gap-4 items-center">
            <div>
              <FaRegHeart
                className="w-10 h-10 rounded-full cursor-pointer"
                onClick={handleToFAV}
              ></FaRegHeart>
            </div>
            <span className="text-white">{user && user.name}</span>
            <img
              src={user && user.avt}
              className="w-16 h-16 rounded-full cursor-pointer"
              onClick={handleAvatarClick}
            />
          </div>
        ) : (
          <Link to="/">
            <button
              className="bg-red-950 text-red-400 border border-red-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
              onClick={handleLoginClick}
            >
              <span className="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
              {isLoggedIn ? "Đăng xuất" : "Đăng nhập"}
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
