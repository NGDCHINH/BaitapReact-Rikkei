import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Home Page
      <button>
        <Link to="/pages/Product">Product Page</Link>
      </button>
      <button>
        <Link to="/pages/About">About Page</Link>
      </button>
    </div>
  );
};

export default Home;
