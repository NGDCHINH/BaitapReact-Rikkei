import { useState } from "react";

const ShowPass = () => {
  const [type, setType] = useState("text");
  const change = () => {
    setType((show) => {
      const kq = show === "text" ? "password" : "text";
      return kq;
    });
  };
  return (
    <div>
      <input type={type} />
      <button onClick={change}>Show/Hidden</button>
    </div>
  );
};

export default ShowPass;
