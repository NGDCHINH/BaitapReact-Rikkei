import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../img/tobirama0.png";

const Header = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/auth");
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
              <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
                <svg
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  className="pointer-events-none absolute w-5 fill-gray-500 transition"
                ></svg>
              </div>
              <input
                type="text"
                className="w-[360px] bg-white pl-2 text-base font-semibold outline-0"
                placeholder=""
                id=""
              />
              <input
                type="button"
                value="Tìm kiếm"
                className="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Link to="/auth">
          <button
            className="bg-red-950 text-red-400 border border-red-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
            onClick={handleLoginClick}
          >
            <span className="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            Đăng nhập
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
