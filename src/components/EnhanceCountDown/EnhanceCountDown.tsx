import * as React from 'react';
import { EnhanceCountDownPropsType, EnhanceCountDownStateType } from './types';

class EnhanceCountDown extends React.PureComponent<
  EnhanceCountDownPropsType,
  EnhanceCountDownStateType
  > {
  countDownInterval?: number;

  constructor(props: EnhanceCountDownPropsType) {
    super(props);
    const { timeout } = this.props;
    this.state = {
      timeout,
      pending: false,
      finished: false,
    };
  }

  countDown = () => {
    const { timeout } = this.state;
    const { decreaseTimeout = 1 } = this.props;
    if (!!this.countDownInterval && timeout <= 0) {
      clearInterval(this.countDownInterval);
      this.setState({
        pending: false,
        finished: true,
      });
    } else {
      this.setState((prev: EnhanceCountDownStateType) => {
        let newTimeout = prev.timeout - decreaseTimeout;
        newTimeout = newTimeout < 0 ? 0 : newTimeout;
        return {
          timeout: newTimeout,
        };
      });
    }
  };

  enhanceCountDown = () => {
    const { intervalTimeout = 1000 } = this.props;
    this.setState({
      pending: true,
    });
    if (!this.countDownInterval) {
      this.countDownInterval = setInterval(this.countDown, intervalTimeout);
    }
  };

  render() {
    const { children } = this.props;
    return children({
      ...this.state,
      enhanceCountDown: this.enhanceCountDown,
    });
  }
}

export default EnhanceCountDown;
