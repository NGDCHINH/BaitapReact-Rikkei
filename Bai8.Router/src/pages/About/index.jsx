import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      About Page
      <button>
        <NavLink to="/">Home Page</NavLink>
      </button>
      <button>
        <NavLink to="/pages/Product">Product Page</NavLink>
      </button>
    </div>
  );
};

export default About;
