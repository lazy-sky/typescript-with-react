import TodoItem from './TodoItem';

function TodoList() {
  const todos = [
    {
      id: 1,
      text: 'To learn typescript with context api',
      done: false,
    },
    {
      id: 2,
      text: 'Chores',
      done: true,
    },
    {
      id: 3,
      text: 'Final project',
      done: false,
    },
  ];

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}

export default TodoList;
