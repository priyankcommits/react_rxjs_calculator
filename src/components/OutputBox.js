import React, { useEffect, useState } from 'react';
import { skip } from 'rxjs/operators';

import mathService from '../services/mathService';
import { BoxStyled } from '../styles';
import { operationEvent$, resultEvent$ } from '../events';

const initialState = '';

function OutputBox() {

  const [outputValue, changeOutputValue] = useState(initialState);

  const executeMathFunction = ((operandOne, operandTwo, operator) => {
    const result = async () => {
      let response = await mathService(operandOne, operandTwo, operator);
      changeOutputValue(response);
      resultEvent$.next(response);
    };
    result();
  });

  useEffect(() => {
    operationEvent$.pipe(skip(1)).subscribe(data => {
      console.log(data);
      if (data.result) changeOutputValue(initialState);
      else executeMathFunction(data.operandOne, data.operandTwo, data.operator);
    });
    return () => {
      operationEvent$.unsubscribe();
      resultEvent$.unsubscribe();
    }
  }, []);

  console.log('Rendering OutputBox')
  return (
    <BoxStyled>
      {outputValue}
    </BoxStyled>
  )
}

export default OutputBox;
