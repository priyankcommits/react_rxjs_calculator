import { initialHistoryState, historyReducer } from '../historyReducer';

describe('History Reducer', () => {
  it('should have correct initial value', () => {
    expect(initialHistoryState).toMatchObject({entries: []});
  });
  it('should return correct value from output reducer', () => {
    expect(historyReducer(initialHistoryState, {type: 'add', value: 10})).toMatchObject({entries:[10]});
    expect(historyReducer({entries: [1, 2]}, {type: 'delete', value: 1})).toMatchObject({entries: [2]});
    expect(historyReducer({entries: [1, 2]}, {type: 'minus', value: 1})).toMatchObject({entries: [1, 2]});
  });
});
