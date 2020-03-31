import React, { useEffect, useReducer } from 'react';
import { skip } from 'rxjs/operators';

import { BoxStyled } from '../styles';
import { buttonEvent$, resultEvent$ } from '../events';
import { buttonTypes, operators } from '../constants';

const initialState = {
  entries: [],
  value: '',
  paranthesisCount: 0,
  canAddEntry: true,
  canExecute: false,
}

const ruleBook = (previousType, currentEntry, paranthesisCount, canPoint) => {
  let value = '';
  const previousTypeIsFunction = previousType === buttonTypes.FUNCTION;
  const previousTypeIsOperator = previousType === buttonTypes.OPERATOR;
  const previousTypeIsNull = previousType === null;
  const previousTypeIsParanthesisOpen = previousType === buttonTypes.PARANTHESIS_OPEN;
  const previousTypeIsParanthesisClose = previousType === buttonTypes.PARANTHESIS_CLOSE;

  switch (currentEntry.type) {
    case buttonTypes.NUMBER:
      value = `${currentEntry.value.name}`;
      if (previousTypeIsParanthesisClose) value = ` ${operators.MULTIPLY} ${value}`;
      return {
        ...initialState,
        value: value,
        canExecute: true,
      }
    case buttonTypes.OPERATOR:
      if (!previousTypeIsOperator && !previousTypeIsParanthesisOpen) {
        return {
          ...initialState,
          value: ` ${currentEntry.value.name} `,
        }
      } else {
        return {...initialState, canAddEntry: false};
      }
    case buttonTypes.FUNCTION:
      value = `${currentEntry.value.name}${buttonTypes.PARANTHESIS_OPEN}`;
      if (!previousTypeIsOperator && !previousTypeIsNull && !previousTypeIsFunction) value = ` ${operators.MULTIPLY} ${value}`;
      return {
        ...initialState,
        value: value,
        paranthesisCount: 1,
      }
    case buttonTypes.PARANTHESIS_OPEN:
      return {
        ...initialState,
        value: `${currentEntry.value.name}`,
        paranthesisCount: 1,
      }
    case buttonTypes.PARANTHESIS_CLOSE:
      if (paranthesisCount > 0) {
        return {
          ...initialState,
          value: `${currentEntry.value.name}`,
          paranthesisCount: -1,
        }
      } else return {...initialState, canAddEntry: false};
    case buttonTypes.POINT:
      if (canPoint) {
        return {
          ...initialState,
          value: `${currentEntry.value.name}`,
        }
      } else return {...initialState, canAddEntry: false};
    case buttonTypes.CONSTANT:
      value = `${currentEntry.value.name}`;
      if (!previousTypeIsOperator && !previousTypeIsNull && !previousTypeIsFunction) value = ` ${operators.MULTIPLY} ${value}`;
      return {
        ...initialState,
        value: value,
        canExecute: true,
      }
    default:
      return {
        ...initialState,
      }
  }
}

const reducer = (state, action) => {
  if (action.type === buttonTypes.RESET) return {...initialState};

  if (state.entries.length === 0) {
    const newState = ruleBook(null, action);
    newState.entries = [action];
    return {...newState};
  }

  let newState = {...initialState};
  newState.paranthesisCount = state.paranthesisCount;
  let previousType = null;
  let canPoint = true;
  state.entries.forEach(entry => {
    const result = ruleBook(previousType, entry, newState.paranthesisCount, canPoint);
    newState.value += result.value;
    newState.entries = [...newState.entries, entry];
    newState.paranthesisCount += result.paranthesisCount;
    previousType = entry.type;
    if (entry.type === buttonTypes.POINT) canPoint = false;
    if (entry.type === buttonTypes.OPERATOR && !canPoint) canPoint = true;
  });

  const result = ruleBook(previousType, action, newState.paranthesisCount, canPoint);
  newState.value += result.value;
  if (result.canAddEntry) newState.entries = [...newState.entries, action];
  newState.paranthesisCount += result.paranthesisCount;
  return {...newState};
}

function InputBox() {

  const [inputState, setInputState] = useReducer(reducer, initialState);

  useEffect(() => {
    buttonEvent$.pipe(skip(1)).subscribe(data => {
      setInputState(data);
    });
    return () => {
      buttonEvent$.unsubscribe();
      resultEvent$.unsubscribe();
    }
  }, []);

  useEffect(() => {
    resultEvent$.next(inputState.value);
  }, [inputState]);

  console.log('Rendering InputBox')
  return (
    <BoxStyled>
      {inputState.value}
    </BoxStyled>
  )
}

export default InputBox;
