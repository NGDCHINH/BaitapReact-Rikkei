import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDetail, updateStatus } from "../STORE/task";

const UpdatePage = () => {
  const param = useParams();
  const dispatch = useDispatch();
  const task = useSelector((state) => state.task.task);
  console.log("Task in component:", task);
  const handleClick = () => {
    dispatch(updateStatus(param.id));
  };

  useEffect(() => {
    dispatch(getDetail(param.id));
  }, [dispatch, param.id]);

  if (!task) {
    return (
      <div>
        Loading...
        <button>
          <Link to="/">Back</Link>
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>Update Page</h1>
      <p>Task Name: {task.title}</p>
      <button onClick={handleClick}>
        Task Status: {String(task.isComplete)}
      </button>
      <br />
      <button>
        <Link to="/">Back</Link>
      </button>
    </div>
  );
};

export default UpdatePage;
