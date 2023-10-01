export interface State {
  value: number;
  step: number;
}

export interface Action {
  type: string;
  payload?: number;
}
