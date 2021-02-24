import { takeLatest, call, put } from "redux-saga/effects";
import { fetchPermits } from "./permitSlice";
import { fetchPermitsLoading, fetchPermitsFailed, EPermitActions } from './permitActions';
import { fetchRecentPermits } from '../../app/api';

export function* fetchPermitsSaga() {
  try {
    let result = yield call(fetchRecentPermits)
    yield put(fetchPermitsLoading());
    yield put(fetchPermits(result));
  } catch (e) {
    yield put(fetchPermitsFailed());
  }
}

export default function* rootSaga() {
  yield takeLatest(EPermitActions.FETCH_PERMITS_SAGA, fetchPermitsSaga);
}
