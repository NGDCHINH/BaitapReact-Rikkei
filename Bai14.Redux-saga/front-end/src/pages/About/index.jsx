import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      About
      <button>
        <Link to={"/"}>Home</Link>
      </button>
    </div>
  );
};

export default About;
