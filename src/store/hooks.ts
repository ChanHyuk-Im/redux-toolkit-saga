import { DependencyList } from 'react';
import { useDispatch } from 'react-redux';
import { ActionCreator, bindActionCreators } from 'redux';

export function useAction<A, C extends ActionCreator<A>>(action: C, deps: DependencyList = []): C {
  const dispatch = useDispatch();
  return bindActionCreators(action, dispatch);
}
