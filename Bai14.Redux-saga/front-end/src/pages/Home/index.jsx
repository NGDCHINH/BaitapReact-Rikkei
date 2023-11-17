import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Hello world
      <button>
        <Link to={"/about"}>About</Link>
      </button>
    </div>
  );
};
export default Home;
