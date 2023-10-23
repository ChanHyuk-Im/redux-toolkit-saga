import { Reducer } from 'redux';
import { CounterState } from './counter.types';
import { counterActions } from './counter.actions';
import { ActionTypes } from '../types';
import {createReducer} from "@reduxjs/toolkit";

const initialState: CounterState = {
  value: 0,
  step: 1,
  status: 'init',
};

export const counterReducer : Reducer<CounterState, ActionTypes<typeof counterActions>> = createReducer(initialState, (builder) => {
  builder.addCase(counterActions.plusCounter, (state) => {
    state.value = state.value + state.step;
  });
  builder.addCase(counterActions.minusCounter, (state) => {
    state.value = state.value - state.step;
  });
  builder.addCase(counterActions.resetCounter, (state) => {
    state.value = 0;
  });
  builder.addCase(counterActions.setValue, (state, action) => {
    state.value = action.payload as number ?? 0;
  });
  builder.addCase(counterActions.setStep, (state, action) => {
    state.step = action.payload as number ?? 1;
  });
});
