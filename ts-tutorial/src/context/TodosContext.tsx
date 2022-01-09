// 이 파일 안에서 두 개의 Context를 만든다.
// 하나는 상태 전용 컨텍스트, 다른 하나는 디스패치 전용 컨텍스트다.
// 이렇게 두 개를 만들면 렌더링 낭비를 막을 수 있다.
// 만약 상태와 디스패치 함수를 한 컨텍스트에 넣게 된다면,
// TodoForm 컴포넌트처럼 상태는 필요하지 않고, 디스패치 함수만 필요한 컴포넌트도
// 상태가 업데이트될 때 리렌더링하게 된다.

import { createContext, Dispatch } from 'react';

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
      const nextId = Math.max(...state.map((todo) => todo.id)) + 1;
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
