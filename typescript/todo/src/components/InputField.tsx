import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField: React.FC<Props> = ({ todo, setTodo }): JSX.Element => {
  return (
    <div>
      <input
        placeholder="Task"
        value={todo}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setTodo(e.target.value);
        }}
      />
    </div>
  );
};

export default InputField;
