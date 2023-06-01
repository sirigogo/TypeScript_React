import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  // const todos = [
  //   new Todo("리액트 배우기"),
  //   new Todo("타입스크립트 배우기"),
  //   new Todo("딥다이브 공부"),
  //   new Todo("메인 프로젝트 기획"),
  // ];

  const addTodoHandler = (todoText:string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos)=>{
      return prevTodos.concat(newTodo)
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
