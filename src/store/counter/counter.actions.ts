import { createAction } from '@reduxjs/toolkit';
import { createAsyncAction } from '../helpers';

export const counterActions = {
  plusCounter: createAction<void>('counter/PLUS_COUNTER'),
  minusCounter: createAction<void>('counter/MINUS_COUNTER'),
  resetCounter: createAction<void>('counter/RESET_COUNTER'),
  setValue: createAction<number>('counter/SET_VALUE'),
  setStep: createAction<number>('counter/SET_STEP'),

  // saga
  fetchCounterValue: createAsyncAction<void>('counter/FETCH_COUNTER_VALUE'),
  plusCounterAsync: createAsyncAction<void>('counter/PLUS_COUNTER_ASYNC'),
  minusCounterAsync: createAsyncAction<void>('counter/MINUS_COUNTER_ASYNC'),
};
