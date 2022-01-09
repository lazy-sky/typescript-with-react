import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { TodosContextProvider } from './context/TodosContext';

const App = () => {
  return (
    <TodosContextProvider>
      <TodoForm />
      <TodoList />
    </TodosContextProvider>
  );
};

export default App;

// Context API + Typescript 연습 프로젝트 - 투두리스트
