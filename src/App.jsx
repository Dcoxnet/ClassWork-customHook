import { AddTodo } from "./AddTodo";
import { TodoList } from "./TodoList";

import "./App.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos([
      ...todos,
      {
        name: todo,
      },
    ]);
  }

  function removeTodo(todoIndex) {
    const newTodos = [...todos];

    newTodos.splice(todoIndex, 1);

    setTodos(newTodos);
  }

  return (
    <main className="App">
      <AddTodo onNewTodo={addTodo} />
      <TodoList todos={todos} finishTodo={removeTodo} />
    </main>
  );
}

export default App;
