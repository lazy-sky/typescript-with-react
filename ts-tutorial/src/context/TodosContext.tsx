// 이 파일 안에서 두 개의 Context를 만든다.
// 하나는 상태 전용 컨텍스트, 다른 하나는 디스패치 전용 컨텍스트다.
// 이렇게 두 개를 만들면 렌더링 낭비를 막을 수 있다.
// 만약 상태와 디스패치 함수를 한 컨텍스트에 넣게 된다면,
// TodoForm 컴포넌트처럼 상태는 필요하지 않고, 디스패치 함수만 필요한 컴포넌트도
// 상태가 업데이트될 때 리렌더링하게 된다.

import { createContext, Dispatch, useReducer, useContext } from 'react';

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

type TodosState = Todo[];

// 상태 전용 컨텍스트
// 컨텍스트를 만들 땐 아래와 같이 제네릭을 사용하여 컨텍스트에서 관리할 값의 상태를 설정할 수 있다.
// 추후 Provider를 사용하지 않았을 때는 컨텍스트의 값이 undefined가 되야하므로, 아래와 같이 선언한다.
const TodosStateContext = createContext<TodosState | undefined>(undefined);

type Action =
  | { type: 'CREATE'; text: string }
  | { type: 'TOGGLE'; id: number }
  | { type: 'REMOVE'; id: number };

// 이렇게 Dispatch를 리액트 패키지에서 불러와 제네릭으로 액션들의 타입을 넣어주면
// 추후 컴포넌트에서 액션을 디스패치할 때 액션들에 대한 타입을 검사할 수 있다.
type TodosDispatch = Dispatch<Action>;
const TodosDispatchContext = createContext<TodosDispatch | undefined>(
  undefined,
);

function todosReducer(state: TodosState, action: Action): TodosState {
  switch (action.type) {
    case 'CREATE':
      const nextId = Math.max(0, ...state.map((todo) => todo.id)) + 1;
      return state.concat({
        id: nextId,
        text: action.text,
        done: false,
      });
    case 'TOGGLE':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo,
      );
    case 'REMOVE':
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error('Unhandled action');
  }
}

export function TodosContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [todos, dispatch] = useReducer(todosReducer, [
    {
      id: 1,
      text: 'Context API 배우기',
      done: true,
    },
    {
      id: 2,
      text: 'TypeScript 배우기',
      done: true,
    },
    {
      id: 3,
      text: 'TypeScript 와 Context API 함께 사용하기',
      done: false,
    },
  ]);

  return (
    <TodosDispatchContext.Provider value={dispatch}>
      <TodosStateContext.Provider value={todos}>
        {children}
      </TodosStateContext.Provider>
    </TodosDispatchContext.Provider>
  );
}

// 커스텀 Hooks
// useContext를 사용해서 컨텍스트 안의 값을 사용할 수 있다.
export function useTodosState() {
  const state = useContext(TodosStateContext);
  // todos의 타입은 TodosState이거나 undefined일 수 있기 때문에 널 체킹해준다.
  if (!state) throw new Error('TodosProvider not found');
  return state;
}

export function useTodosDispatch() {
  const dispatch = useContext(TodosDispatchContext);
  if (!dispatch) throw new Error('TodosProvider not found');
  return dispatch;
}
