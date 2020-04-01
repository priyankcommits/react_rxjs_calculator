import { initialOutputValue, outputReducer } from '../outputReducer';

describe('Output Reducer', () => {
  it('should have correct initial value', () => {
    expect(initialOutputValue).toBe('')
  });
  it('should return correct value from output reducer', () => {
    expect(outputReducer(null, '')).toBe('');
  });
});
