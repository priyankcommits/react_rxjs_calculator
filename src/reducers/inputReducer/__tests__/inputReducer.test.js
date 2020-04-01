import { initialInputState, inputReducer } from '../inputReducer';

describe('Input Reducer', () => {
  it('should have correct initial value', () => {
    expect(initialInputState).toMatchObject({
      entries: [],
      historyEntries: [],
      value: '',
      paranthesisCount: 0,
      canAddEntry: true,
      isOperator: false,
    });
  });
  const numberInput =  {type: 'number', value: {name: '1'}};
  const constantInput = {type: 'constant', value: {name: 'e'}};
  const functionInput = {type: 'function', value: {name: 'cos'}};
  const operatorInput = {type: 'operator', value: {name: '+'}};
  const paranthesisInput = {type: '(', value: {name: '('}};
  const paranthesisCloseInput = {type: ')', value: {name: ')'}};
  const pointInput =  {type: '.', value: {name: '.'}};

  it('should return correctly when a number', () => {
    expect(inputReducer({...initialInputState}, numberInput)).toMatchObject(
      {...initialInputState, entries:[numberInput], value: '1'});
  });
  it('should return correctly when a constant', () => {
    expect(inputReducer({...initialInputState, entries:[numberInput]}, constantInput)).toMatchObject(
      {...initialInputState, entries:[numberInput, constantInput], value: '1 x e'});
  });
  it('should return correctly when a function', () => {
    expect(inputReducer({...initialInputState}, functionInput)).toMatchObject(
      {...initialInputState, entries:[functionInput], value: 'cos(', paranthesisCount: 1});
  });
  it('should return correctly when a operator', () => {
    expect(inputReducer({...initialInputState}, operatorInput)).toMatchObject(
      {...initialInputState, entries:[operatorInput], value: ' + '});
  });
  it('should return correctly when a paranthesis', () => {
    expect(inputReducer({...initialInputState}, paranthesisInput)).toMatchObject(
      {...initialInputState, entries:[paranthesisInput], value: '(', paranthesisCount: 1});
  });
  it('should return correctly when a close paranthesis', () => {
    expect(inputReducer({...initialInputState}, paranthesisCloseInput)).toMatchObject(
      {...initialInputState, value: '', canAddEntry: false});
  });
  it('should return correctly when a period', () => {
    expect(inputReducer({...initialInputState, entries: []}, pointInput)).toMatchObject(
      {...initialInputState, canAddEntry: false});
    expect(inputReducer({...initialInputState, entries: [numberInput], value: '1'}, pointInput)).toMatchObject(
      {...initialInputState, entries: [numberInput, pointInput], value: '1.'});
  });
  it('should return correctly when a reset', () => {
    const resetInput = {type: 'AC', value: {name: 'AC'}};
    expect(inputReducer({...initialInputState, entries: [numberInput], value: '1'}, resetInput)).toMatchObject(
      {...initialInputState});
  });
  it('should return correctly when a undo', () => {
    const undoInput = {type: 'Undo', value: {name: 'Undo'}};
    expect(inputReducer({...initialInputState, entries: [numberInput], value: '1'}, undoInput)).toMatchObject(
      {...initialInputState, historyEntries: [numberInput]});
  });
  it('should return correctly when a redo', () => {
    const undoInput = {type: 'Redo', value: {name: 'Redo'}};
    expect(inputReducer({...initialInputState, historyEntries: [numberInput]}, undoInput)).toMatchObject(
      {...initialInputState, entries: [numberInput], value: '1'});
  });
});
