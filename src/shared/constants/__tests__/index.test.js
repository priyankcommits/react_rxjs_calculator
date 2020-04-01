import { calculatorButtons, buttonTypes, operators } from '../index';

describe('Constants', () => {
  it('correct number of buttons', () => {
    expect(calculatorButtons.length).toBe(30);
  });
  it('correct number of operators', () => {
    expect(Object.entries(operators).length).toBe(6);
  });
  it('correct number of button types', () => {
    expect(Object.entries(buttonTypes).length).toBe(11);
  });
});
