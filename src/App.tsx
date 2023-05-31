import Todos from './components/Todos';

function App() {
  return (
    <div>
      <Todos items={['리액트 배우기', '타입스크립트 배우기', '딥다이브 공부','메인 프로젝트 기획']} />
    </div>
  );
}

export default App;
