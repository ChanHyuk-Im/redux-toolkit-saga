import { State, Action } from './counter.types';
import actions from './counter.actions';

const initialState: State = {
  value: 0,
  step: 1,
};

export const counterReducer = (state: State = initialState, action: Action) => {
  console.log('state:', state, ', action:', action);
  switch (action.type) {
    case actions.PLUS_COUNTER:
      return {
        ...state,
        value: state.value + state.step,
      };
    case actions.MINUS_COUNTER:
      return {
        ...state,
        value: state.value - state.step,
      };
    case actions.RESET_COUNTER:
      return {
        ...state,
        value: 0,
      };
    case actions.SET_VALUE:
      return {
        ...state,
        value: action.payload ?? 0,
      };
    case actions.SET_STEP:
      return {
        ...state,
        step: action.payload ?? 1,
      };
    default:
      return state;
  }
};
