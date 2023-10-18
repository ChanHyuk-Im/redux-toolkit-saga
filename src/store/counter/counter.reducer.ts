import { Reducer } from 'redux';
import { CounterState } from './counter.types';
import { counterActions } from './counter.actions';
import { ActionTypes } from '../types';

const initialState: CounterState = {
  value: 0,
  step: 1,
  status: 'init',
};

export const counterReducer: Reducer<CounterState, ActionTypes<typeof counterActions>> = (
  state = initialState,
  action,
): CounterState => {
  console.log(action);
  switch (action.type) {
    case counterActions.plusCounter.type:
      return {
        ...state,
        value: state.value + state.step,
      };
    case counterActions.minusCounter.type:
      return {
        ...state,
        value: state.value - state.step,
      };
    case counterActions.resetCounter.type:
      return {
        ...state,
        value: 0,
      };
    case counterActions.setValue.type:
      return {
        ...state,
        value: action.payload as number ?? 0,
      };
    case counterActions.setStep.type:
      return {
        ...state,
        step: action.payload as number ?? 1,
      };
    default:
      return state;
  }
};
