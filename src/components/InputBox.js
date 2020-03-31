// Component to show user input and has all input rules as business logic in reducer
// Listens to ButtonLayout and Publishes to OutputBox
import React, { useEffect, useReducer, useState } from 'react';
import { skip } from 'rxjs/operators';

import { BoxStyled, OverFlowProtect } from '../styles';
import { buttonEvent$, operationEvent$ } from '../events';
import { buttonTypes, operators } from '../constants';

const initialState = {
  entries: [],
  historyEntries: [],
  value: '',
  paranthesisCount: 0,
  canAddEntry: true,
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
      value = `${currentEntry.value.name}`;
      if (!previousTypeIsOperator || previousTypeIsParanthesisOpen) value = ` ${operators.MULTIPLY} ${value}`;
      return {
        ...initialState,
        value: value,
        paranthesisCount: 1,
      }
    case buttonTypes.PARANTHESIS_CLOSE:
      if (paranthesisCount > 0 && !previousTypeIsParanthesisOpen) {
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
      }
    default:
      return {
        ...initialState,
      }
  }
}

const reducer = (state, action) => {
  if (action.type === buttonTypes.RESET) return {...initialState};

   if (state.entries.length === 0 && ![buttonTypes.UNDO, buttonTypes.REDO].includes(action.type)) {
    const newState = ruleBook(null, action);
    newState.entries = [action];
    return {...newState};
  }

  const getNewState = state => {
    let newState = {...initialState};
    let previousType = null;
    let canPoint = true;
    let paranthesisCount = 0;
    state.entries.forEach(entry => {
      const result = ruleBook(previousType, entry, paranthesisCount, canPoint);
      newState.value = `${newState.value}${result.value}`;
      newState.entries = [...newState.entries, entry];
      paranthesisCount += result.paranthesisCount;
      previousType = entry.type;
      if (entry.type === buttonTypes.POINT) canPoint = false;
      if (entry.type === buttonTypes.OPERATOR && !canPoint) canPoint = true;
    });
    newState.paranthesisCount = paranthesisCount;
    return {newState, previousType, canPoint};
  }

  if (action.type === buttonTypes.UNDO) {
    const lastEntry = state.entries[state.entries.length - 1];
    if (lastEntry) {
      const newState = getNewState({...state, entries: state.entries.slice(0, state.entries.length - 1)}).newState;
      return {
        ...newState,
        entries: state.entries.slice(0, state.entries.length - 1),
        historyEntries: [...state.historyEntries, lastEntry],
      }
    } else return state;
  }
  if (action.type === buttonTypes.REDO) {
    const lastHistoryEntry = state.historyEntries[state.historyEntries.length - 1];
    if (lastHistoryEntry) {
      const newState = getNewState({...state, entries: [...state.entries, lastHistoryEntry]}).newState;
      return {
        ...newState,
        historyEntries: state.historyEntries.slice(0, state.historyEntries.length - 1),
        entries: [...state.entries, lastHistoryEntry],
      }
    } else return state;
  }

  const {newState, previousType, canPoint} = getNewState(state);
  const result = ruleBook(previousType, action, newState.paranthesisCount, canPoint);
  newState.value = `${newState.value}${result.value}`;
  if (result.canAddEntry) newState.entries = [...newState.entries, action];
  newState.paranthesisCount += result.paranthesisCount;
  return {...newState};
}

function InputBox() {

  const [inputState, setInputState] = useReducer(reducer, initialState);
  const [paranthesisPrediction, setParanthesisPrediction] = useState('');

  useEffect(() => {
    buttonEvent$.pipe(skip(1)).subscribe(data => {
      setInputState(data);
    });
    return () => {
      buttonEvent$.unsubscribe();
      operationEvent$.unsubscribe();
    }
  }, []);

  useEffect(() => {
    const paranthesisPrediction = ')'.repeat(inputState.paranthesisCount);
    setParanthesisPrediction(paranthesisPrediction);
    operationEvent$.next(`${inputState.value}${paranthesisPrediction}`);
  }, [inputState]);

  return (
    <BoxStyled>
      <OverFlowProtect>
        <h4>
          {inputState.value}<span className='text-danger'>{paranthesisPrediction}</span>
        </h4>
      </OverFlowProtect>
    </BoxStyled>
  )
}

export default InputBox;
