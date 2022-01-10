import "./TodoItem.css";
import { Todo } from "../modules/todos";

type TodoItemProps = {
  todo: Todo;
};

function TodoItem({ todo }: TodoItemProps) {
  // TODO: 커스텀 훅으로 onToggle, onRemove 구현
  return (
    <li className={`TodoItem ${todo.done ? "done" : ""}`}>
      <span>{todo.text}</span>
      <span>(X)</span>
    </li>
  );
}

export default TodoItem;
