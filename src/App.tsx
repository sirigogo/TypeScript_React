import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const todos = [
    new Todo("리액트 배우기"),
    new Todo("타입스크립트 배우기"),
    new Todo("딥다이브 공부"),
    new Todo("메인 프로젝트 기획"),
  ];
  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
