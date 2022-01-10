// 프레젠테이셔널 / 컨테이너 컴포넌트 분리를 하지 않는다면?

// 분리하지 않아도 Hooks를 사용하여 똑같은 작업을 할 수 있다.
// 컴포넌트를 사용할 때 props로 필요한 값을 받아와서 사용하지 않고,
// `useSelector`, `useDispatch`로 이뤄진 커스텀 Hook을 만들어 사용하면 된다.

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import { increase, decrease, increaseBy } from "../modules/counter";
import { useCallback } from "react";

export default function useCounter() {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  const onIncreaseBy = useCallback(
    (diff: number) => dispatch(increaseBy(diff)),
    [dispatch]
  );

  return {
    count,
    onIncrease,
    onDecrease,
    onIncreaseBy,
  };
}
