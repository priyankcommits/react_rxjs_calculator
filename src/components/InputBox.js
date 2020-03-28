import React, { useEffect, useState } from 'react';
import { skip, take } from 'rxjs/operators';

import { buttonEvent$, operationEvent$, resultEvent$ } from '../events';
import { buttonTypes, operators } from '../constants';
import { BoxStyled } from '../styles';

function InputBox() {

  const operandInitialState = {
    value: '',
    functionValue: '',
    functionStartsWith: '',
    functionEndsWith: ''
  }
  const operatorInitialState = '';

  const [operandOne, setOperandOne] = useState(operandInitialState);
  const [operandTwo, setOperandTwo] = useState(operandInitialState);
  const [operator, setOperator] = useState(operatorInitialState);

  const reset = () => {
    setOperandOne(operandInitialState);
    setOperandTwo(operandInitialState);
    setOperator('');
  }

  const handleButtonEvent = (value, type) => {
    switch (type) {
      case buttonTypes.RESET:
        reset();
        break;
      case buttonTypes.OPERATOR:
        setOperator(prevOperatorState => {
          if (prevOperatorState !== '') {
            operationEvent$.next(
              operandOne, operandTwo, operator);
            resultEvent$.pipe(take(1)).subscribe(data => {
              console.log(data);
              setOperandTwo(operatorInitialState);
            });
          }
          return prevOperatorState;
        });
        setOperator(() => { return value.name});
        break;
      case buttonTypes.FUNCTION:
        setOperator(prevOperatorState => {
          const changeFunctionValue = (prevState => { return {...prevState, functionValue: value.name, functionStartsWith: value.startsWith, functionEndsWith: value.endsWith}});
          prevOperatorState === '' ? setOperandOne(changeFunctionValue) : setOperandTwo(changeFunctionValue);
          return prevOperatorState;
        });
        break;
      case buttonTypes.NUMBER:
        setOperator(prevOperatorState => {
          const changeNumber = (prevState => { return {...prevState, value: `${prevState.value}${value.name}`}});
          prevOperatorState === '' ? setOperandOne(changeNumber) : setOperandTwo(changeNumber);
          return prevOperatorState;
        });
        break;
      default:
        reset();
    }
  }

  useEffect(() => {
    buttonEvent$.pipe(skip(1)).subscribe(({value, type}) => {
      handleButtonEvent(value, type);
    });
    return () => {
      buttonEvent$.unsubscribe();
      operationEvent$.unsubscribe();
      resultEvent$.unsubscribe();
    }
  }, []);

  console.log('Rendering InputBox')
  return (
    <BoxStyled>
      <div>
        <span>{operandOne.functionStartsWith}</span>
        <span>{operandOne.value}</span>
        <span>{operandOne.functionEndsWith}</span>
        <span>{` ${operator} `}</span>
        <span>{operandTwo.functionStartsWith}</span>
        <span>{operandTwo.value}</span>
        <span>{operandTwo.functionEndsWith}</span>
      </div>
    </BoxStyled>
  )
}

export default InputBox;
