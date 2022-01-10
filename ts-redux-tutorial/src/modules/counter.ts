// Ducks 패턴
// 편의성을 위해 액션의 타입, 액션 생섬함수, 리듀서를 모두 한 파일에 작성한다.

import { createAction, ActionType, createReducer } from "typesafe-actions";

// 액션 타입
// typesafe-actions를 쓰면 as const를 붙이지 않아도 된다.
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
const INCREASE_BY = "counter/INCREASE_BY";

// 액션 생성 함수
export const increase = createAction(INCREASE)();
export const decrease = createAction(DECREASE)();
// 제네릭을 써주는 것으로 payload를 대신해줄 수 있다.
// payload가 없으면 제네릭을 생략한다.
// 만약 파라미터로 넣어주는 값과 액션의 payload 값이 완벽히 일치하지 않는다면 아래와 같이 작성한다.
// const createItem = createAction(CREATE_ITEM).map(name => ({ payload: { id: nanoid(), name } }));

export const increaseBy = createAction(INCREASE_BY)<number>();

// 액션 객체들에 대한 타입
// ReturnType은 함수에서 반환하는 타입을 가져올 수 있게 해주는 유틸 타입이다.
// typesafe-actions의 ActionType 유틸 타입을 사용하면 액션들의 객체 타입을 더 간편하게 작성할 수 있다.
const actions = { increase, decrease, increaseBy };
type CounterAction = ActionType<typeof actions>;

// 상태의 타입과 초기값
type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0,
};

// 리듀서
// typesafe-actions의 createReducer를 사용하면 리듀서를 switch/case문이 아닌 object map 형태로 구현할 수 있다.
// 제네릭으로 상태의 타입과 액션들의 타입을 넣어줘야 한다.
const counter = createReducer<CounterState, CounterAction>(initialState, {
  [INCREASE]: (state) => ({ count: state.count + 1 }),
  [DECREASE]: (state) => ({ count: state.count - 1 }),
  [INCREASE_BY]: (state, action) => ({ count: state.count + action.payload }),
});

export default counter;
