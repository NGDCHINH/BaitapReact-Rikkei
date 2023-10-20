import React, { useReducer } from "react";

function Login() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "change_username":
        return { ...state, username: action.value };
      case "change_password":
        return { ...state, password: action.value };
      case "submit_information":
        return { ...state, login: true };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    username: "",
    password: "",
    login: false,
  });

  const handleUsernameChange = (event) => {
    dispatch({ type: "change_username", value: event.target.value });
  };

  const handlePasswordChange = (event) => {
    dispatch({ type: "change_password", value: event.target.value });
  };

  const handleSubmit = () => {
    dispatch({ type: "submit_information" });
  };

  return (
    <div>
      <h2>Form Đăng Nhập</h2>
      <div>
        <label htmlFor="username">Tên người dùng</label>
        <input
          type="text"
          onChange={handleUsernameChange}
          value={state.username}
        />
      </div>
      <div>
        <label htmlFor="password">Mật khẩu</label>
        <input
          type="password"
          onChange={handlePasswordChange}
          value={state.password}
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
      {state.login && (
        <div>
          <h3>Thông tin đăng nhập:</h3>
          <p>Tên người dùng: {state.username}</p>
          <p>Mật khẩu: {state.password}</p>
        </div>
      )}
    </div>
  );
}

export default Login;
