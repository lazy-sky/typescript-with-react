import { useState } from 'react';

function Counter() {
  // 사실 useState를 사용할 때 제너릭을 사용하지 않아도 알아서 타입을 유추하기 때문에 생략해도 된다.
  // 상태가 null일 수도 있고 아닐 수도 있을 때 제네릭을 활용하면 좋다.
  // 상태의 타입이 까다로운 구조를 가진 객체이거나 배열일 때는 제네릭을 명시하는 게 좋다.

  const [count, setCount] = useState(0);
  const onIncrease = () => setCount((count) => count + 1);
  const onDecrease = () => setCount((count) => count - 1);

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
