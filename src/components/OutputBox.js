// Component to show output result and talks to math service
// Listens to InputBox operations and Publishes to History
import React, { useEffect, useState } from 'react';
import { skip, delay } from 'rxjs/operators';

import mathService from '../services/mathService';
import { BoxStyled, OverFlowProtect } from '../styles';
import { operationEvent$ } from '../events';

function OutputBox() {

  const [outputValue, setOutputValue] = useState('');
  const [previousAnswer, setPreviousAsnwer] = useState('');

  const executeMathFunction = ((data) => {
    const result = async () => {
      let response = await mathService(data, previousAnswer);
      if (response !== null && !isNaN(response)) {
        setOutputValue(response);
        setPreviousAsnwer(response);
      }
    };
    result();
  });

  useEffect(() => {
    const operationEvent = operationEvent$.pipe(skip(1));
    operationEvent.pipe(delay(333)).subscribe(data => {
      executeMathFunction(data);
    });
  }, [previousAnswer]);

  return (
    <BoxStyled>
      <OverFlowProtect>
        <h4>
          {outputValue}
        </h4>
      </OverFlowProtect>
    </BoxStyled>
  )
}

export default OutputBox;
