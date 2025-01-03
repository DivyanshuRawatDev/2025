import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import InputField from "./components/InputField";

function App(): JSX.Element {
  interface TODO {
    id: number;
    task: string;
    isCompleted: boolean;
  }

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<TODO[]>([]);

  const handleSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault();
    setTodos([
      ...todos,
      { id: Math.floor(Math.random() * 10000), task: todo, isCompleted: false },
    ]);
    setTodo("");
  };

  console.log(todos);
  return (
    <>
      <div>
        <h1>Todo App</h1>
        <div>
          <form>
            <InputField todo={todo} setTodo={setTodo} />
            <button
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Add
            </button>
          </form>
        </div>
        <div>
          {todos.map((item: TODO) => {
            return (
              <div key={item.id}>
                <h1>{item.task}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
