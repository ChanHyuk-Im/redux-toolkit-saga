import { createAction } from '@reduxjs/toolkit';
import { AsyncActionCreator } from './types';

export const createAsyncAction = <PRequest = void, PSuccess = void, PFailure = Error>(
  type: string
): AsyncActionCreator<PRequest, PSuccess, PFailure> => ({
  request: createAction<PRequest>(type + '_REQUEST'),
  success: createAction<PSuccess>(type + '_SUCCESS'),
  failure: createAction<PFailure>(type + '_FAILURE'),
  cancel: createAction<void>(type + '_CANCEL'),
});
