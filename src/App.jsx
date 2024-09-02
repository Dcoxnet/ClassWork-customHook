import { AddTodo } from "./AddTodo";
import { TodoList } from "./TodoList";

import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  function addTodo(todo) {
    setTodos([
      ...todos,
      {
        title: todo,
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
