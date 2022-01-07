import { useReducer } from 'react';

// 이렇게 액션을 | 로 연달아서 나열.
// 여기선 액션에 type 값만 존재하여 간단하지만, 이후 다른 값들도 명시해주는 경우엔,
// 추후 리듀서를 작성할 때 액션 객체 안에 무엇이 들어있는지도 자동완성을 통해 알 수 있다.
// 새로운 액션을 디스패치할 때도 액션에 대한 타입스크립트 타입 검사도 해준다.
type Action = { type: 'INCREASE' } | { type: 'DECREASE' };

// 리듀서를 만들 땐 아래와 같이
// 파라미터로 받아오는 상태의 타입과 함수가 리턴하는 타입을 동일하게 하는 것이 중요하다.
function reducer(state: number, action: Action): number {
  switch (action.type) {
    case 'INCREASE':
      return state + 1;
    case 'DECREASE':
      return state - 1;
    default:
      throw new Error('Unhandled action');
  }
}

function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);
  const onIncrease = () => dispatch({ type: 'INCREASE' });
  const onDecrease = () => dispatch({ type: 'DECREASE' });

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
}

export default Counter;
