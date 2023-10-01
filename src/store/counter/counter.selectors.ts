import { RootState } from '../index';

export const selectValue = (state: RootState) => state.counter.value;
export const selectStep = (state: RootState) => state.counter.step;
