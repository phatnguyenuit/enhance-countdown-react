export interface EnhanceCountDownProps {
  timeout: number;
  decreaseTimeout?: number;
  intervalTimeout?: number;
  children(props: RenderCountDownProps): JSX.Element;
}

export interface EnhanceCountDownState {
  finished: boolean;
  pending: boolean;
  timeout: number;
}

interface RenderCountDownProps extends EnhanceCountDownState {
  enhanceCountDown: Function;
}
