import { buttonEvent$, operationEvent$, resultEvent$, resultSelectionEvent$ } from './events';

describe('Events', () => {
  it('button events initializes correctly', (done) => {
    buttonEvent$.subscribe(data => {
      expect(data).toBe(0);
      done();
    })
  });
  it('operation events initializes correctly', (done) => {
    operationEvent$.subscribe(data => {
      expect(data).toBe(0);
      done();
    })
  });
  it('result events initializes correctly', (done) => {
    resultEvent$.subscribe(data => {
      expect(data).toBe(0);
      done();
    })
  });
  it('result selection events initializes correctly', (done) => {
    resultSelectionEvent$.subscribe(data => {
      expect(data).toBe(0);
      done();
    })
  });
});
