import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { counterReducer } from './counter/counter.reducer';
import { State as CounterState } from './counter/counter.types';
import counterSagas from './counter/counter.sagas';

export interface RootState {
  counter: CounterState;
}

const rootReducer = {
  counter: counterReducer,
};

function* rootSaga() {
  yield all([
    ...counterSagas,
  ]);
}

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [
    sagaMiddleware,
  ],
});

sagaMiddleware.run(rootSaga);

export default store;
