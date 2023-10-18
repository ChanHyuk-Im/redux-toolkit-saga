import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import { counterActions } from './counter.actions';
import { delay } from '../../common/utils';

function* fetchCounterValue(action: ReturnType<typeof counterActions.fetchCounterValue.request>) {
  try {
    const value = Math.floor(Math.random() * 10);

    yield delay(500);

    if (value < 6) {
      yield put(counterActions.setValue(value));
      yield put(counterActions.fetchCounterValue.success());

      return;
    }

    yield put(counterActions.fetchCounterValue.failure(new Error('value is bigger than 5.')));
  } catch (error) {
    yield put(counterActions.fetchCounterValue.failure(new Error(error as string)));
  }
}

function* plusCounterAsync() {
  try {
    yield delay(500);
    yield put(counterActions.plusCounter());
    yield put(counterActions.plusCounterAsync.success());
  } catch (error) {
    yield put(counterActions.plusCounterAsync.failure(new Error(error as string)));
  }
}

function* minusCounterAsync() {
  try {
    yield delay(500);
    yield put(counterActions.minusCounter());
    yield put(counterActions.minusCounterAsync.success());
  } catch (error) {
    yield put(counterActions.minusCounterAsync.failure(new Error(error as string)));
  }
}

export function* watchFetchCounterValue() {
  yield takeLatest(counterActions.fetchCounterValue.request.type, fetchCounterValue);
}

export function* watchPlusCounterAsync() {
  yield takeEvery(counterActions.plusCounterAsync.request.type, plusCounterAsync);
}

export function* watchMinusCounterAsync() {
  yield takeEvery(counterActions.minusCounterAsync.request.type, minusCounterAsync);
}

const sagas = [
  watchFetchCounterValue(),
  watchPlusCounterAsync(),
  watchMinusCounterAsync(),
];

export default sagas;
