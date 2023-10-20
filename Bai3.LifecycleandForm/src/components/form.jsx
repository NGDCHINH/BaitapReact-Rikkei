import React, { useState } from "react";

const MyForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const Change = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const [check, setCheck] = useState(false);
  const Show = () => {
    setCheck(!check);
  };
  return (
    <div>
      <h2>Login</h2>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" value={formData.username} onChange={Change} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" value={formData.password} onChange={Change} />
      </div>
      <button onClick={Show} type="submit">
        Submit
      </button>
      {check ? <span>ThongTinUser{JSON.stringify(formData)}</span> : null}
    </div>
  );
};

export default MyForm;
