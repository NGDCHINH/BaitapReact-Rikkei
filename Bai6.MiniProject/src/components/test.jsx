import React, { useState } from "react";
import { Input, Button, List, Checkbox, Space } from "antd";

const TodoApp = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    if (task) {
      setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
      setTask("");
    }
  };

  const toggleTaskStatus = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const editTask = (taskId, newText) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
  };

  const removeTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const filterTasks = (type) => {
    setFilter(type);
    if (type === "all") {
      setFilteredTasks(tasks);
    } else if (type === "active") {
      setFilteredTasks(tasks.filter((task) => !task.completed));
    } else if (type === "completed") {
      setFilteredTasks(tasks.filter((task) => task.completed));
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h1>Todo List</h1>
      <Input
        value={task}
        onChange={handleInputChange}
        placeholder="Add a new task"
      />
      <Button type="primary" onClick={addTask}>
        Add Task
      </Button>
      <Space>
        <Button onClick={() => filterTasks("all")}>All</Button>
        <Button onClick={() => filterTasks("active")}>Active</Button>
        <Button onClick={() => filterTasks("completed")}>Completed</Button>
      </Space>
      <List
        dataSource={filteredTasks}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Checkbox
                checked={item.completed}
                onChange={() => toggleTaskStatus(item.id)}
              />,
              <span
                style={{
                  textDecoration: item.completed ? "line-through" : "none",
                }}
                contentEditable={true}
                suppressContentEditableWarning={true}
                onBlur={(e) => editTask(item.id, e.target.innerText)}
              >
                {item.text}
              </span>,
              <Button type="danger" onClick={() => removeTask(item.id)}>
                Delete
              </Button>,
            ]}
          ></List.Item>
        )}
      />
    </div>
  );
};

export default TodoApp;
