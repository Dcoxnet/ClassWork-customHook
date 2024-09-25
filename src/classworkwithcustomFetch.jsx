// import { useState, useEffect } from "react";

// export function useFetch(url) {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch(url);
//         if (!response.ok) {
//           throw new Error("Ошибка сети ");
//         }
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, [url]);
//   return { data, loading, error };
// }

// // function App() {
// // const [todos, setTodos] = useState([]);
// // useEffect(() => {
// //   fetch("https://jsonplaceholder.typicode.com/todos")
// //     .then((res) => res.json())
// //     .then((data) => setTodos(data));
// // }, []);

// // function addTodo(todo) {
// //   setTodos([
// //     ...todos,
// //     {
// //       title: todo,
// //     },
// //   ]);
// // }

// // function removeTodo(todoIndex) {
// //   const newTodos = [...todos];

// //   newTodos.splice(todoIndex, 1);

// //   setTodos(newTodos);
// // }

// // return (
// //   <main className="App">
// //     <AddTodo onNewTodo={addTodo} />
// //     <TodoList todos={todos} finishTodo={removeTodo} />
// //   </main>
// // );

// // const Counter = ({ onCountChange }) => {
// //   const [count, setCount] = useState(0);

// //   useEffect(() => {
// //     onCountChange(count);
// //   }, [count, onCountChange]);

// //   return (
// //     <div>
// //       <div>Count: {count} </div>
// //       <button onClick={() => setCount(count + 1)}>Increment</button>
// //     </div>
// //   );
// // };

// // const App = () => {
// //   const [multipleCount, setMultipleCount] = useState(0);

// //   const onCountChange = (newCount) => {
// //     setMultipleCount(newCount * 2);
// //   };

// //   return (
// //     <div>
// //       <div>Multiple count: {multipleCount}</div>
// //       <Counter onCountChange={onCountChange} />
// //     </div>
// //   );
// // };

// // // }

// // export default App;

// // const CountContext = createContext();

// // export default function App() {
// //   const [count, setCount] = useState(0);
// //   const url = "https://jsonplaceholder.typicode.com/posts";
// //   const { data, loading, error } = useFetch(url);
// //   console.log(data, loading, error);

// //   return (
// //     <CountContext.Provider value={{ count, setCount }}>
// //       {data.map((element) => {
// //         return (
// //           <div>
// //             <h2>{element.title}</h2>
// //             <h2>{element.id}</h2>
// //           </div>
// //         );
// //       })}
// //     </CountContext.Provider>
// //   );
// // }

// // function Child() {
// //   const { count, setCount } = useContext(CountContext);
// //   return (
// //     <div>
// //       <h2>{count}</h2>
// //       <button onClick={() => setCount(count + 1)}>Increment</button>
// //     </div>
// //   );
// // }
