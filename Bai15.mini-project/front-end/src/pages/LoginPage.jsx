import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserLogin } from "../Store/Auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [inputText, setInputText] = useState("");
  const [inputPass, setInputPass] = useState("");
  const [isShowPass, setIsShowPass] = useState(false);
  const dispath = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "inputText") {
      setInputText(value);
    }
    if (name === "inputPass") {
      setInputPass(value);
    }
  };

  const handleShowPass = (e) => {
    const checked = e.target.checked;
    setIsShowPass(checked);
  };

  const handleLogin = () => {
    const getUserServer = async () => {
      const res = await axios.get(
        `http://localhost:3000/users?username=${inputText}&password=${inputPass}`
      );
      if (res.data.length === 0) {
        alert("Wrong");
      } else {
        dispath(setUserLogin(res.data[0]));
        navigate("/");
      }
    };
    getUserServer();
  };

  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center">
      <div className="flex flex-col border border-black w-96 h-96 p-8 rounded-xl gap-5">
        <div>
          <h1 className="flex justify-center font-bold text-lg">
            RA fruit login
          </h1>
        </div>
        <div className="flex flex-col">
          <label htmlFor="inputText">User or Email</label>
          <input
            onChange={handleChange}
            name="inputText"
            className="border border-black px-4 py-2"
            type="text"
            value={inputText}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="inputPass">Password</label>
          <input
            onChange={handleChange}
            name="inputPass"
            className="border border-black px-4 py-2"
            type={isShowPass ? "text" : "password"}
            value={inputPass}
          />
        </div>
        <div className="flex justify-center gap-1">
          <input type="checkbox" onChange={handleShowPass} />
          <label htmlFor="showPass">Show password</label>
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleLogin}
            className="border border-black bg-blue-600 rounded-lg w-20 text-white font-bold"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
