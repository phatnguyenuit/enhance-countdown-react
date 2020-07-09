import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import EnhanceCountDown from './components/EnhanceCountDown';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Grid container spacing={1} direction="column">
        <Grid item>
          <EnhanceCountDown timeout={30}>
            {({ timeout, enhanceCountDown, pending, finished }) => {
              const timeoutStr = pending && !finished ? `(${timeout})` : '';
              return (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => enhanceCountDown()}
                  disabled={pending}
                >
                  <code>timeout = 30 seconds</code> {timeoutStr}
                </Button>
              );
            }}
          </EnhanceCountDown>
        </Grid>
        <Grid item>
          <EnhanceCountDown timeout={30} decreaseTimeout={10}>
            {({ timeout, enhanceCountDown, pending, finished }) => {
              const timeoutStr = pending && !finished ? `(${timeout})` : '';
              return (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => enhanceCountDown()}
                  disabled={pending}
                >
                  <code>decreaseTimeout = 10 seconds</code> {timeoutStr}
                </Button>
              );
            }}
          </EnhanceCountDown>
        </Grid>
        <Grid item>
          <EnhanceCountDown
            timeout={30}
            decreaseTimeout={10}
            intervalTimeout={2000}
          >
            {({ timeout, enhanceCountDown, pending, finished }) => {
              const timeoutStr = pending && !finished ? `(${timeout})` : '';
              return (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => enhanceCountDown()}
                  disabled={pending}
                >
                  <code>intervalTimeout = 2000 ms</code> {timeoutStr}
                </Button>
              );
            }}
          </EnhanceCountDown>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default App;
