import { ApplicationState } from '../types';

export const selectValue = (state: ApplicationState) => state.counter.value;
export const selectStep = (state: ApplicationState) => state.counter.step;
