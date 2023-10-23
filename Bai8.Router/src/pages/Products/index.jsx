import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();
  const [state] = useState([
    {
      id: 1,
      name: "Tao",
    },
    {
      id: 2,
      name: "Chuoi",
    },
  ]);

  const handleClick = (id) => {
    navigate("/pages/Detail/" + id);
  };

  const ProductDetail = state.map((item) => (
    <li key={item.id} onClick={() => handleClick(item.id)}>
      {item.name}
    </li>
  ));

  return (
    <div>
      Products Page
      <div>{ProductDetail}</div>
      <button>
        <Link to="/">Home Page</Link>
      </button>
      <button>
        <Link to="/pages/About">About Page</Link>
      </button>
    </div>
  );
};

export default Product;
