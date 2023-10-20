import { useState } from "react";

const Login = () => {
  const [dl, setDL] = useState("");

  const change = (event) => {
    setDL(event.target.value);
  };
  return (
    <div>
      <span>Username</span>
      <input type="text" value={dl} onChange={change} />
      <span>Password</span>
      <input type="password" value={dl} onChange={change} />
      <button>Submit</button>
      <div>ThongTin:{dl}</div>
    </div>
  );
};

export default Login;
