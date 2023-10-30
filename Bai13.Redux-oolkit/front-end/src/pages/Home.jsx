import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const listTask = useSelector((state) => state.task.listTask);
  const navigate = useNavigate();
  const handleNav = (id) => {
    navigate(`/${id}`);
  };

  const renderTask = listTask
    ? listTask.map((item) => (
        <div key={item.id} onClick={() => handleNav(item.id)}>
          {item.title}
          {!item.isComplete ? <button>Complete</button> : null}
        </div>
      ))
    : null;

  return <div>{renderTask}</div>;
};

export default Home;
