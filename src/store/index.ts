import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { ApplicationState } from './types';
import { counterReducer } from './counter/counter.reducer';
import counterSagas from './counter/counter.sagas';
import { isDev } from '../common/env';

const rootReducer = combineReducers<ApplicationState>({
  counter: counterReducer,
});

function* rootSaga() {
  yield all([
    ...counterSagas,
  ]);
}

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      thunk: false,
    }),
    sagaMiddleware,
  ],
  devTools: isDev,
});

sagaMiddleware.run(rootSaga);

export default store;
