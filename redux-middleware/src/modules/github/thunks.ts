import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { GithubAction } from './types';
import { getUserProfile } from '../../api/github';
import { getUserProfileAsync } from './actions';

// ThunkAction의 제네릭으로는 다음 값들을 순서대로 넣어주어야 한다.
// <TReturnType, TState, TExtra ThunkArg, TBasicAction>
// 1. thunk 함수에서 반환한하는 값의 타입
// 2. 스토어의 상태에 대한 타입
// 3. redux-thunk 미들웨어의 extra argument의 타입
// 4. dispatch 할 수 있는 액션들의 타입
// 여기선 TReturnType이 아무 것도 반환하지 않기 때문에 void 
// (더 정확히는 async를 사용하기 때문에 Promise<void>지만 그냥 void라고 써도 문제가 되진 않는다.)
export function getUserProfileThunk(username: string): ThunkAction<void, RootState, null, GithubAction> {
  return async dispatch => {
    const { request, success, failure } = getUserProfileAsync;
    dispatch(request());
    try {
      const userProfile = await getUserProfile(username);
      dispatch(success(userProfile));
    } catch (e) {
      dispatch(failure(e.code));
    }
  };
}
