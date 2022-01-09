// Ducks 패턴
// 편의성을 위해 액션의 타입, 액션 생섬함수, 리듀서를 모두 한 파일에 작성한다.

// 액션 타입
// 리덕스 액션 타입을 선언할 땐 문자열 뒤에 as const 키워드를 붙여야 한다.
// 이는 const assertions라는 타입스크립트 문법이다.
// 이 문법을 통해 추후 액션 생섬함수로 액션 객체를 만들게 됐을 때, 타입스크립트 타입이 string이 되지 않고 실제값을 가리키게 된다.
const INCREASE = "counter/INCREASE" as const;
const DECREASE = "counter/DECREASE" as const;
const INCREASE_BY = "counter/INCREASE_BY" as const;

// 액션 생성 함수
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseBy = (diff: number) => ({
  type: INCREASE_BY,
  payload: diff,
});

// 액션 객체들에 대한 타입
// ReturnType은 함수에서 반환하는 타입을 가져올 수 있게 해주는 유틸 타입이다.
type CounterAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseBy>;

// 상태의 타입과 초기값
type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0,
};

// 리듀서
function counter(state: CounterState = initialState, action: CounterAction) {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + 1 };
    case DECREASE:
      return { count: state.count - 1 };
    case INCREASE_BY:
      return { count: state.count + action.payload };
    default:
      return state;
  }
}

export default counter;
