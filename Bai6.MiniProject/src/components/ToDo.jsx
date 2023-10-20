import { Button, Input } from "antd";
import { useState } from "react";

function guidGenerator() {
  var S4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return (
    S4() +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    S4() +
    S4()
  );
}

const ToDO = () => {
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");
  const [todo, setToDo] = useState([
    {
      id: guidGenerator(),
      name: "tao",
      status: "",
    },
    {
      id: guidGenerator(),
      name: "may",
      status: "",
    },
  ]);

  const handleClickDone = (item) => {
    const updatedToDo = todo.map((itemOld) => {
      if (itemOld.id === item.id) {
        return { ...itemOld, status: "done" };
      }
      return itemOld;
    });

    setToDo(updatedToDo);
  };

  const handleAdd = () => {
    if (input.trim() !== "") {
      setToDo([
        ...todo,
        {
          id: guidGenerator(),
          name: input,
          status: "",
        },
      ]);
      setInput("");
    }
  };

  const handleDeleteItem = (id) => {
    const updatedToDo = todo.filter((item) => item.id !== id);
    setToDo(updatedToDo);
  };

  const mapList = todo
    .filter((item) => {
      if (filter === "all") {
        return true;
      } else if (filter === "complete") {
        return item.status === "done";
      } else {
        return item.status !== "done";
      }
    })
    .map((item) => (
      <div className="flex item">
        <p
          className={item.status === "done" ? "done" : ""}
          onClick={() => handleClickDone(item)}
          key={item.id}
        >
          {item.name}
        </p>
        <Button type="text" onClick={() => handleDeleteItem(item.id)}>
          Delete
        </Button>
      </div>
    ));

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="wapper">
      <label htmlFor="" className="title">
        TO-DO LIST
      </label>
      <div className="flex">
        <Input placeholder="Basic usage" onChange={handleChange} />
        <Button type="primary" onClick={handleAdd}>
          ADD
        </Button>
      </div>
      <div className="flex filter" onClick={handleClickDone}>
        <Button onClick={() => setFilter("all")}>All</Button>
        <Button onClick={() => setFilter("complete")}>Complete</Button>
        <Button onClick={() => setFilter("uncomplete")}>UnComplete</Button>
      </div>
      <div>{mapList}</div>
    </div>
  );
};

export default ToDO;
