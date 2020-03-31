import mathService from './mathService';

describe('Math Service', () => {
  it('math service works positive correctly', () => {
    mathService('10 x 10', '').then(data => {
      expect(data).toBe(100);
    })
  });
  it('math service works negative correctly', () => {
    mathService('10 x 10 +', '').then(data => {
      expect(data).toBe(NaN);
    })
  });
});
