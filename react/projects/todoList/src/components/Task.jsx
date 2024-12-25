import React from "react";

const Task = ({ tasks, handleRemoveTask, handleUpdateTask }) => {
  const handleDelete = (index) => {
    handleRemoveTask(index);
  };

  const updateTask = (index) => {
    handleUpdateTask(index);
  };
  
  return (
    <div>
      {tasks.map((item, index) => {
        return (
          <div key={index} className="flex gap-3 mt-2">
            <h1>
              {index + 1}.{item.task}
            </h1>
            <div className=" flex gap-2">
              <button
                className="bg-red-600"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
              <button
                onClick={() => updateTask(index)}
                className={item.done ? "bg-green-600" : "bg-yellow-500"}
              >
                {item.done ? "Completed" : "mark as completed"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Task;
