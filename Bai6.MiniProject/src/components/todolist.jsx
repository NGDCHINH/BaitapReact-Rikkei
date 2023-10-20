import Item from "antd/es/list/Item";
import { useReducer, useState } from "react";
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
const ToDoList = () => {
  const [click, setClick] = useState(false);
  const [todo, setToDo] = useState([
    {
      id: guidGenerator(),
      name: "tao",
      status: "",
    },
    {
      id: guidGenerator(),
      name: "tao",
      status: "",
    },
  ]);
  const [input, setInput] = useState();
  const handeClickDone = (item) => {
    item.status = "done";
    console.log(item.status);
    setToDo((old) => {
      return old.map((itemOld) => {
        if (itemOld.id === item.id) {
          itemOld.status = "done";
        }
        return itemOld;
      });
    });
  };
  const mapList = todo.map((Item) => (
    <li
      className={Item.status === "done" ? "done" : ""}
      onClick={() => handeClickDone(Item)}
      key={(Item.id = guidGenerator())}
    >
      {Item.name}
      {/* {Item.status} */}
    </li>
  ));
  const handeChane = (e) => {
    setInput(e.target.value);
  };
  const handeClick = () => {
    console.log(input);

    setToDo([
      ...todo,
      {
        name: input,
      },
    ]);
  };

  return (
    <div>
      <div>
        <input type="text" onChange={handeChane} />
        <button onClick={handeClick}>Submit</button>
      </div>
      <div>{mapList}</div>
    </div>
  );
};

export default ToDoList;
