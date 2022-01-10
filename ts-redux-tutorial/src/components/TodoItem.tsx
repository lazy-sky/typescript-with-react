import "./TodoItem.css";
import { Todo } from "../modules/todos";
import { useToggleTodo, useRemoveTodo } from "../hooks/useTodoActions";

type TodoItemProps = {
  todo: Todo;
};

function TodoItem({ todo }: TodoItemProps) {
  const onToggle = useToggleTodo();
  const onRemove = useRemoveTodo();

  return (
    <li className={`TodoItem ${todo.done ? "done" : ""}`}>
      <span className="text" onClick={() => onToggle(todo.id)}>
        {todo.text}
      </span>
      <span className="remove" onClick={() => onRemove(todo.id)}>
        (X)
      </span>
    </li>
  );
}

export default TodoItem;
