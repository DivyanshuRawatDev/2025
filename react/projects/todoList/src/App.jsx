import { useState } from "react";

import "./App.css";
import AddTask from "./components/AddTask";
import Task from "./components/Task";

function App() {
  const [tasks, setTasks] = useState([{ task: "Drawing", done: false }]);
  console.log(tasks, "asd");

  function handleAddTask(data) {
    setTasks((prev) => [...prev, data]);
  }

  function handleRemoveTask(data) {
    setTasks(
      tasks.filter((ele, ind) => {
        return (ind != data);
      })
    );
  }

  function handleUpdateTask(data) {
    setTasks(
      tasks.map((ele, ind) => {
       return ind == data ? { ...ele, done: true } : ele;
      })
    );
  }

  return (
    <>
      <div className="w-[50%]">
        <div>
          <AddTask tasks={tasks} handleAddTask={handleAddTask} />
        </div>
        <div>
          <Task
            handleUpdateTask={handleUpdateTask}
            handleRemoveTask={handleRemoveTask}
            tasks={tasks}
          />
        </div>
      </div>
    </>
  );
}

export default App;
