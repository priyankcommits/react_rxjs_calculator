// Component to show output result and talks to math service
// Listens to InputBox operations and Publishes to History
import React, { useEffect, useState, useReducer } from 'react';
import { skip, delay } from 'rxjs/operators';

import { mathService } from '../../services/index';
import { BoxStyle, OverFlowProtect } from '../../shared/styles/main/index';
import { operationEvent$, resultEvent$ } from '../../shared/events/index';
import { initialOutputValue, outputReducer } from '../../reducers/index';

const OutputBox = () => {

  const [outputValue, setOutputValue] = useState('');
  const [output, setOutputReducer] = useReducer(outputReducer, initialOutputValue);

  useEffect(() => {
    const operationEvent = operationEvent$.pipe(skip(1));
    operationEvent.pipe(delay(333)).subscribe(data => {
      setOutputReducer(data);
    });
    return () => {
      operationEvent$.unsubscribe();
    }
  }, []);

  useEffect(() => {
    const waitResult = async () => {
      let response = await mathService(output, outputValue);
      if (!isNaN(response)) {
        setOutputValue(response);
        resultEvent$.next({input: output, value: response});
      }
    }
    waitResult();
  }, [output]);

  return (
    <BoxStyle>
      <OverFlowProtect>
        <h4>
          {outputValue}
        </h4>
      </OverFlowProtect>
    </BoxStyle>
  )
}

export { OutputBox };
