import React from "react";
import { useState } from "react";

const AddTask = ({ handleAddTask }) => {
  const [task, setTask] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    handleAddTask({ task: task, done: false });
    setTask("");
  };

  return (
    <div>
      <form className="border border-solid w-[60%]">
        <input
          type="text"
          placeholder="task"
          className="w-[80%]"
          onChange={(e) => {
            setTask(e.target.value);
          }}
          value={task}
        />
        <button className="bg-red-500" type="submit" onClick={handleClick}>
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
