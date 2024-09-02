import "./TodoList.css";

export function TodoList({ todos, finishTodo }) {
  return (
    <div>
      <h3>Todo List</h3>
      <ul>
        {todos.map((el, index) => {
          return (
            <li>
              <div>{el.title}</div>
              <button
                onClick={() => {
                  finishTodo(index);
                }}
              >
                Done
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
