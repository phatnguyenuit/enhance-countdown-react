export interface EnhanceCountDownPropsType {
  timeout: number;
  decreaseTimeout?: number;
  intervalTimeout?: number;
  children(props: InjectedCountDownProps): JSX.Element;
}

export interface EnhanceCountDownStateType {
  finished: boolean;
  pending: boolean;
  timeout: number;
}

interface InjectedCountDownProps extends EnhanceCountDownStateType {
  enhanceCountDown: Function;
}