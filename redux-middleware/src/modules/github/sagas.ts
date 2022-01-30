import { getUserProfileAsync, GET_USER_PROFILE } from './actions';
import { getUserProfile, GithubProfile } from '../../api/github';
import { call, put, takeEvery } from 'redux-saga/effects';

function* getUserProfileSaga(action: ReturnType<typeof getUserProfileAsync.request>) {
  try {
    const userProfile: GithubProfile = yield call(getUserProfile, action.payload);
    yield put(getUserProfileAsync.success(userProfile));
  } catch (e) {
    yield put(getUserProfileAsync.failure(e));
  }
}

export function* githubSaga() {
  yield takeEvery(GET_USER_PROFILE, getUserProfileSaga);
}

/*
액션의 타입은 ReturnType을 통해 유추해낸다.
아직까지는 Generator를 사용할 때 yield call을 통해서 프로미스를 만드는 특정 함수를 호출했을 경우 
프로미스의 결과값에 대한 타입을 유추해내지 못한다. 
때문에 프로미스의 결과값은 force type을 통해 타입을 지정해주어야 한다.
*/