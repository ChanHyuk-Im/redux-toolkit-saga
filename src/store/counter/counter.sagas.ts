import { put, takeEvery } from 'redux-saga/effects';
import actions, { setValue, plusCounter, minusCounter } from './counter.actions';
import { delay } from '../../common/utils';

function* fetchCounterValue() {
  const value = Math.floor(Math.random() * 10);

  yield delay(500);
  yield put(setValue(value));
}

function* plusCounterAsync() {
  yield delay(500);
  yield put(plusCounter());
}

function* minusCounterAsync() {
  yield delay(500);
  yield put(minusCounter());
}

export function* watchFetchCounterValue() {
  yield takeEvery(actions.FETCH_COUNTER_VALUE, fetchCounterValue);
}

export function* watchPlusCounterAsync() {
  yield takeEvery(actions.PLUS_COUNTER_ASYNC, plusCounterAsync);
}

export function* watchMinusCounterAsync() {
  yield takeEvery(actions.MINUS_COUNTER_ASYNC, minusCounterAsync);
}

const sagas = [
  watchFetchCounterValue(),
  watchPlusCounterAsync(),
  watchMinusCounterAsync(),
];

export default sagas;
