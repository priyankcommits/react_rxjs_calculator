import React, { useEffect, useState } from 'react';
import { skip, delay } from 'rxjs/operators';

import mathService from '../services/mathService';
import { BoxStyled } from '../styles';
import { resultEvent$ } from '../events';

function OutputBox() {

  const [outputValue, setOutputValue] = useState('');
  const [previousAnswer, setPreviousAsnwer] = useState('');

  const executeMathFunction = ((data) => {
    const result = async () => {
      let response = await mathService(data, previousAnswer);
      if (response !== null) {
        setOutputValue(response);
        setPreviousAsnwer(response);
      }
    };
    result();
  });

  useEffect(() => {
    const resultEvent = resultEvent$.pipe(skip(1));
    resultEvent.pipe(delay(333)).subscribe(data => {
      executeMathFunction(data);
    });
  }, [previousAnswer]);

  return (
    <BoxStyled>
      {outputValue}
    </BoxStyled>
  )
}

export default OutputBox;
