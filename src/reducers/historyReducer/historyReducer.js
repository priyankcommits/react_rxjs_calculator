const initialHistoryState = {
  entries: [],
}

const historyReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return { entries: [...state.entries, action.value] };
    case 'delete':
      let tempStateEntries = [...state.entries];
      tempStateEntries.splice(action.index, 1);
      return { entries: [...tempStateEntries] };
    default:
      return { ...state };
  }
}

export { initialHistoryState, historyReducer };
