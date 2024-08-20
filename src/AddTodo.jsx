import { useState } from "react";

export function AddTodo({ onNewTodo }) {
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log("New todo", todo);

    onNewTodo(todo);

    setTodo("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="todo"
        type="text"
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        value={todo}
      />
      <button type="submit">Add todo</button>
    </form>
  );
}
