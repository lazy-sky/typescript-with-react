// 컨테이너 컴포넌트를 작성하는 것과 비슷하게
//  리덕스와 연동하는 작업이 프레젠테이셔널 컴포넌트에서 분리되었다. (컴포넌트가 아니라 훅의 형태로)
// 이제 useCounter의 훅을 사용하면 된다. 이제 프레젠테이셔널이라고 부를 이유도 사라졌다.
// 필요한 함수와 값을 props가 아닌 훅으로 받아온다.

import useCounter from "../hooks/useCounter";

function Counter() {
  const { count, onIncrease, onDecrease, onIncreaseBy } = useCounter();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <button onClick={() => onIncreaseBy(5)}>+5</button>
    </div>
  );
}

export default Counter;

// Hooks가 존재하기 전에는 컨테이너 컴포넌트를 만들 때 connect() 함수를 통해
// HOC 패턴으로 컴포넌트와 리덕스를 연동해주었기 때문에
// props로 필요한 값들을 전달해주는 것이 필수였지만, 이제는 그렇지 않다.
