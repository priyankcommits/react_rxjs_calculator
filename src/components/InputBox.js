import React, { useEffect, useState } from 'react';
import { skip } from 'rxjs/operators';

import { BoxStyled } from '../styles';
import { buttonEvent$, operationEvent$, resultEvent$ } from '../events';
import { buttonTypes, operators } from '../constants';

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
    setOperator(operatorInitialState);
  }

  const sendCurrentStateValues = (operator, resetOperandTwo, reset) => {
    setOperator(prevOperatorState => {
      setOperandOne(prevStateOperandOne => {
        setOperandTwo(prevStateOperandTwo => {
          operationEvent$.next(
            {reset: reset, operator: prevOperatorState, operandOne: prevStateOperandOne, operandTwo: prevStateOperandTwo});
          return resetOperandTwo ? operandInitialState : prevStateOperandTwo;
        });
        return prevStateOperandOne;
      });
    return operator;
    });
  }

  const handleButtonEvent = (value, type) => {
    switch (type) {
      case buttonTypes.RESET:
        reset();
        sendCurrentStateValues(operatorInitialState, true, true);
        break;
      case buttonTypes.OPERATOR:
        setOperator(prevOperatorState => {
          if (prevOperatorState !== operatorInitialState) {
            sendCurrentStateValues(value.name, true, false);
            resultEvent$.pipe(skip(1)).subscribe(data => {
              setOperandOne({...operandInitialState, value: data});
            });
          }
          return value.name;
          // return prevOperatorState;
        });
        break;
      case buttonTypes.FUNCTION:
        setOperator(prevOperatorState => {
          const changeFunctionValue = (prevState => {
            return {...prevState, functionValue: value.name, functionStartsWith: value.startsWith, functionEndsWith: value.endsWith}
          });
          prevOperatorState === operatorInitialState ? setOperandOne(changeFunctionValue) : setOperandTwo(changeFunctionValue);
          return prevOperatorState;
        });
        break;
      case buttonTypes.CONSTANT:
        console.log(value.name);
        setOperandOne(prevState => {
          if (prevState.value !== operandInitialState.value) {
            setOperator(operators.MULTIPLY);
            setOperandTwo(prevState => {
              if(prevState.value !== operandInitialState.value) {
                setOperator(prevOperatorState => {
                  sendCurrentStateValues(prevOperatorState, true, false);
                  return prevOperatorState;
                });
                return prevState
              }
              return {...prevState, value: value.name};
            });
            return prevState
          }
          return {...prevState, value: value.name};
        });
        break;
      case buttonTypes.NUMBER:
        setOperator(prevOperatorState => {
          const changeNumber = (prevState => {return {...prevState, value: `${prevState.value}${value.name}`}});
          prevOperatorState === operatorInitialState ? setOperandOne(changeNumber) : setOperandTwo(changeNumber);
          sendCurrentStateValues(prevOperatorState, false, false);
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
      <span>{operandOne.functionStartsWith}</span>
      <span>{operandOne.value}</span>
      <span>{operandOne.functionEndsWith}</span>
      <span>{` ${operator} `}</span>
      <span>{operandTwo.functionStartsWith}</span>
      <span>{operandTwo.value}</span>
      <span>{operandTwo.functionEndsWith}</span>
    </BoxStyled>
  )
}

export default InputBox;
