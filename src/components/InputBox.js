import React, { useEffect, useReducer } from 'react';
import { skip } from 'rxjs/operators';

import { buttonEvent$, operationEvent$ } from '../events';
import { buttonTypes, operators } from '../constants';

const initialState = {
  operandOneValue: '',
  operandOnefunctionValue: '',
  operandOneFunctionStartsWith: '',
  operandOneFunctionEndsWith: '',
  operandTwoValue: '',
  operandTwoFunctionValue: '',
  operandTwoFunctionStartsWith: '',
  operandTwoFunctionEndsWith: '',
  currentOperator: '',
  value: ''
}

const inputReducer = (state, data) => {
  switch (data.type) {
    case buttonTypes.RESET:
      return initialState;
    case buttonTypes.OPERATOR:
      console.log(state);
      if (state.currentOperator !== '') {
        state.operandTwoValue = '';
      }
      state.currentOperator = data.value.name;
      return {
        ...state,
        value: `${state.operandOneFunctionStartsWith}${state.operandOneValue}${state.operandOneFunctionEndsWith} ${data.value.name} ${state.operandTwoFunctionStartsWith}${state.operandTwoValue}${state.operandTwoFunctionEndsWith}`
      };
    case buttonTypes.FUNCTION:
      if (state.currentOperator === '') {
        state.operandOneFunctionValue = data.value.name;
        state.operandOneFunctionStartsWith = data.value.startsWith;
        state.operandOneFunctionEndsWith = data.value.endsWith;
      } else {
        state.operandTwoFunctionValue = data.value.name;
        state.operandTwoFunctionStartsWith = data.value.startsWith;
        state.operandTwoFunctionEndsWith = data.value.endsWith;
      }
      if (state.value === initialState.value) return {...state, value: initialState.value};
      else {
        state.operandOneValue = state.value;
        state.currentOperator = operators.MULTIPLY;
        return {...state};
      }
    default:
      if (state.currentOperator === '') {
        return {
          ...state,
          operandOneValue: `${state.operandOneValue}${data.value.name}`,
          value: `${state.operandOneFunctionStartsWith}${state.operandOneValue}${data.value.name}${state.operandOneFunctionEndsWith} ${state.currentOperator} ${state.operandTwoFunctionStartsWith}${state.operandTwoValue}${state.operandTwoFunctionEndsWith}`
        };
      }
      return {
        ...state,
        operandTwoValue: `${state.operandTwoValue}${data.value.name}`,
        value: `${state.operandOneFunctionStartsWith}${state.operandOneValue}${state.operandOneFunctionEndsWith} ${state.currentOperator} ${state.operandTwoFunctionStartsWith}${state.operandTwoValue}${data.value.name}${state.operandTwoFunctionEndsWith}`
      };
  }
}

function InputBox() {

  const [inputValue, changeInputValue] = useReducer(inputReducer, initialState);

  useEffect(() => {
    buttonEvent$.pipe(skip(1)).subscribe(({value, type}) => {
      changeInputValue({value, type});
    });
    return () => buttonEvent$.unsubscribe();
  }, []);

  console.log('Rendering InputBox')
  return (
    <div className='text-right'>
      <p>
        <span>
          {inputValue.value}
        </span>
      </p>
    </div>
  )
}

export default InputBox;
