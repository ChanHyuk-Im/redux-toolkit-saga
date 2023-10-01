// reducer
const PLUS_COUNTER = 'counter/PLUS_COUNTER';
const MINUS_COUNTER = 'counter/MINUS_COUNTER';
const RESET_COUNTER = 'counter/RESET_COUNTER';
const SET_VALUE = 'counter/SET_VALUE';
const SET_STEP = 'counter/SET_STEP';

// saga
const FETCH_COUNTER_VALUE = 'counter/FETCH_COUNTER_VALUE';
const PLUS_COUNTER_ASYNC = 'counter/PLUS_COUNTER_ASYNC';
const MINUS_COUNTER_ASYNC = 'counter/MINUS_COUNTER_ASYNC';

// reducer
export const plusCounter = () => ({ type: PLUS_COUNTER });
export const minusCounter = () => ({ type: MINUS_COUNTER });
export const resetCounter = () => ({ type: RESET_COUNTER });
export const setValue = (value: number) => ({ type: SET_VALUE, payload: value });
export const setStep = (step: number) => ({ type: SET_STEP, payload: step });

//saga
export const fetchCounterValue = () => ({ type: FETCH_COUNTER_VALUE });
export const plusCounterAsync = () => ({ type: PLUS_COUNTER_ASYNC });
export const minusCounterAsync = () => ({ type: MINUS_COUNTER_ASYNC });

const actions = {
  PLUS_COUNTER,
  MINUS_COUNTER,
  RESET_COUNTER,
  SET_VALUE,
  SET_STEP,
  FETCH_COUNTER_VALUE,
  PLUS_COUNTER_ASYNC,
  MINUS_COUNTER_ASYNC,
};

export default actions;
