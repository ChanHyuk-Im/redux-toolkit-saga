import { PayloadActionCreator } from '@reduxjs/toolkit';
import { CounterState } from '../store//counter/counter.types';

export interface AsyncActionCreator<PRequest = void, PSuccess = void, PFailure = Error> {
  request: PayloadActionCreator<PRequest>;
  success: PayloadActionCreator<PSuccess>;
  failure: PayloadActionCreator<PFailure>;
  cancel: PayloadActionCreator;
}

export type ActionTypes<T> = T extends {
  [action: string]: infer U | {
    request: infer U;
    success: infer U;
    failure: infer U;
    cancel: infer U;
  };
} ? U extends PayloadActionCreator<any>
    ? ReturnType<U>
    : ActionTypes<U>
  : never;

export interface ApplicationState {
  counter: CounterState;
}
