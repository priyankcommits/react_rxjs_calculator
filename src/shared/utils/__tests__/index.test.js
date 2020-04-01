import { replaceAll } from '../index';

describe('Service Utils', () => {
  it('replace all works correctly', () => {
    expect(replaceAll('123 x 123', 'x', '*')).toBe('123 * 123');
  });
});
