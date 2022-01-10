import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";

const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;

// 루트 리듀서를 만드는 방법인 일반 JS 환경과 같은데 주의할 점은,
// RootState 타입을 만들어 내보내줘야 한다는 것이다.
// 이 타입은 추후 컨테이너 컴포넌트를 만들게 될 때 스토어에서 관리하고 있는 상태를 조회하기 위해 useSelector를 사용할 떄 필요하다.
export type RootState = ReturnType<typeof rootReducer>;
