import { buttonTypes, operators } from '../../shared/constants/index';

// Initial Reducer State
const initialInputState = {
  entries: [],
  historyEntries: [],
  value: '',
  paranthesisCount: 0,
  canAddEntry: true,
  isOperator: false,
}

const ruleBook = (previousType, currentEntry, paranthesisCount, canPoint) => {
  // Function to handle current user input based on previous input
  // Rules for different types of button inputs
  let value = '';

  switch (currentEntry.type) {
    case buttonTypes.NUMBER:
      value = `${currentEntry.value.name}`;
      if ([buttonTypes.CONSTANT, buttonTypes.PARANTHESIS_CLOSE].includes(previousType)) value = ` ${operators.MULTIPLY} ${value}`;
      return {
        ...initialInputState,
        value: value,
      }
    case buttonTypes.OPERATOR:
      if (![buttonTypes.OPERATOR, buttonTypes.PARANTHESIS_OPEN].includes(previousType)) {
        return {
          ...initialInputState,
          value: ` ${currentEntry.value.name} `,
        }
      } else {
        return { ...initialInputState, canAddEntry: false };
      }
    case buttonTypes.FUNCTION:
      value = `${currentEntry.value.name}${buttonTypes.PARANTHESIS_OPEN}`;
      if (![null, buttonTypes.OPERATOR, buttonTypes.FUNCTION].includes(previousType)) value = ` ${operators.MULTIPLY} ${value}`;
      return {
        ...initialInputState,
        value: value,
        paranthesisCount: 1,
      }
    case buttonTypes.PARANTHESIS_OPEN:
      value = `${currentEntry.value.name}`;
      if ([buttonTypes.PARANTHESIS_CLOSE, buttonTypes.CONSTANT, buttonTypes.NUMBER].includes(previousType)) value = ` ${operators.MULTIPLY} ${value}`;
      return {
        ...initialInputState,
        value: value,
        paranthesisCount: 1,
      }
    case buttonTypes.PARANTHESIS_CLOSE:
      if (paranthesisCount > 0 && ![buttonTypes.PARANTHESIS_OPEN, buttonTypes.OPERATOR].includes(previousType)) {
        return {
          ...initialInputState,
          value: `${currentEntry.value.name}`,
          paranthesisCount: -1,
        }
      } else return { ...initialInputState, canAddEntry: false };
    case buttonTypes.POINT:
      if (canPoint) {
        return {
          ...initialInputState,
          value: `${currentEntry.value.name}`,
        }
      } else return { ...initialInputState, canAddEntry: false };
    case buttonTypes.CONSTANT:
      value = `${currentEntry.value.name}`;
      if (![null, buttonTypes.OPERATOR, buttonTypes.FUNCTION].includes(previousType)) value = ` ${operators.MULTIPLY} ${value}`;
      return {
        ...initialInputState,
        value: value,
      }
    default:
      return {
        ...initialInputState,
      }
  }
}

const inputReducer = (state, action) => {
  // Reducer returns initial state on special cases
  if (action.type === buttonTypes.RESET) return { ...initialInputState };
  if (action.type === 'history') return {
    ...initialInputState, value: action.value.name, entries: [{ type: 'number', value: { name: action.value.name } }]
  };

  // Reducer handles first input
  if (state.entries.length === 0 && ![buttonTypes.UNDO, buttonTypes.REDO].includes(action.type)) {
    const newState = ruleBook(null, action, 0, false);
    if (newState.canAddEntry) newState.entries = [action];
    return { ...newState };
  }

  // Reducer handles subsequent inputs
  // Iterates over list of input objects every time there is an input to build the final string that is shown to user
  // This function calls rule book
  const getNewState = state => {
    let newState = { ...initialInputState };
    let previousType = null;
    let paranthesisCount = 0;
    let canPoint = true;
    state.entries.forEach(entry => {
      const result = ruleBook(previousType, entry, paranthesisCount, canPoint);
      newState.value = `${newState.value}${result.value}`;
      newState.entries = [...newState.entries, entry];
      paranthesisCount += result.paranthesisCount;
      previousType = entry.type;
      if (previousType === buttonTypes.POINT) canPoint = false;
      if (previousType === buttonTypes.OPERATOR && !canPoint) canPoint = true;
    });
    newState.paranthesisCount = paranthesisCount;
    newState.historyEntries = state.historyEntries;
    return { newState, previousType, canPoint };
  }

  // Handle undo and redo buttons
  if (action.type === buttonTypes.UNDO) {
    const lastEntry = state.entries[state.entries.length - 1];
    if (lastEntry) {
      const newState = getNewState({ ...state, entries: state.entries.slice(0, state.entries.length - 1) }).newState;
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
      const newState = getNewState({ ...state, entries: [...state.entries, lastHistoryEntry] }).newState;
      return {
        ...newState,
        historyEntries: state.historyEntries.slice(0, state.historyEntries.length - 1),
        entries: [...state.entries, lastHistoryEntry],
      }
    } else return state;
  }

  // Add current user input
  // Previous iteration handles only previous state as this is a reducer
  const { newState, previousType, canPoint } = getNewState(state);
  const result = ruleBook(previousType, action, newState.paranthesisCount, canPoint);
  newState.value = `${newState.value}${result.value}`;
  if (result.canAddEntry) newState.entries = [...newState.entries, action];
  newState.paranthesisCount += result.paranthesisCount;
  if (action.type === buttonTypes.OPERATOR) newState.isOperator = true;
  return { ...newState };
}

export { initialInputState, inputReducer };
