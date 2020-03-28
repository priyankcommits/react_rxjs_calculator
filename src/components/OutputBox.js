import React, { useEffect, useState } from 'react';
import { skip } from 'rxjs/operators';

import { BoxStyled } from '../styles';
import { operationEvent$ } from '../events';
import mathService from '../service';

const initialState = {
  value: '',
}

function OutputBox() {

  const [outputValue, changeOutputValue] = useState('');

  const executeMathFunction = ((operandOne, operandTwo, operator, functionValue) => {
    const result = async () => {
      let response = await mathService(operandOne, operandTwo, operator, functionValue);
      changeOutputValue(response);
    }
  });
  useEffect(() => {
    operationEvent$.pipe(skip(1)).subscribe(data => {
      console.log(data);
      // executeMathFunction(operandOne, operandTwo, operator, functionValue);
    });
    return () => {
      operationEvent$.unsubscribe();
    }
  }, []);

  console.log('Rendering OutputBox')
  return (
    <BoxStyled>
      <div>
        {outputValue}
      </div>
    </BoxStyled>
  )
}

export default OutputBox;
