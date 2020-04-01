// Component to show user input and has all input rules as business logic in reducer
// Listens to ButtonLayout and Publishes to OutputBox
import React, { useEffect, useReducer, useState } from 'react';
import { skip } from 'rxjs/operators';

import { BoxStyle, OverFlowProtect } from '../../shared/styles/main/index';
import { buttonEvent$, operationEvent$, resultSelectionEvent$ } from '../../shared/events/index';
import { initialInputState, inputReducer } from '../../reducers/index';

const InputBox = () => {

  const [inputState, setInputState] = useReducer(inputReducer, initialInputState);
  const [paranthesisPrediction, setParanthesisPrediction] = useState('');

  useEffect(() => {
    // Receive button inputs
    buttonEvent$.pipe(skip(1)).subscribe(data => {
      setInputState(data);
    });
    // Receive history selection and update
    resultSelectionEvent$.pipe(skip(1)).subscribe(data => {
      setInputState({type: 'history', value: {name: data}});
    });
    return () => {
      buttonEvent$.unsubscribe();
      operationEvent$.unsubscribe();
      resultSelectionEvent$.unsubscribe();
    }
  }, []);

  useEffect(() => {
    // handle case of end paranthesis not entered by user
    const paranthesisPrediction = ')'.repeat(inputState.paranthesisCount);
    setParanthesisPrediction(paranthesisPrediction);
    if (!inputState.isOperator) operationEvent$.next(`${inputState.value}${paranthesisPrediction}`);
  }, [inputState]);

  return (
    <BoxStyle>
      <OverFlowProtect>
        <h4>
          {inputState.value}<span className='text-danger'>{paranthesisPrediction}</span>
        </h4>
      </OverFlowProtect>
    </BoxStyle>
  )
}

export { InputBox };
