import { functions, operators } from '../constants';

const mathService = async (operandOne, operandTwo, operatorFunction) => {
  const timeStart = performance.now();

  operandOne.value = convertStringToNumber(replaceConstants(operandOne.value));
  operandTwo.value = convertStringToNumber(replaceConstants(operandTwo.value));

  const normalizedOperandOne = normalizedValue(operandOne.value, operandOne.functionValue);
  const normalizedOperandTwo = normalizedValue(operandTwo.value, operandTwo.functionValue);

  let result;
  switch (operatorFunction) {
    case operators.PLUS:
      result = add(normalizedOperandOne, normalizedOperandTwo);
      break;
    case operators.MINUS:
      result = subtract(normalizedOperandOne, normalizedOperandTwo);
      break;
    case operators.MULTIPLY:
      result = multiply(normalizedOperandOne, normalizedOperandTwo);
      break;
    case operators.DIVIDE:
      result = divide(normalizedOperandOne, normalizedOperandTwo);
      break;
    case operators.POWER:
      result = power(normalizedOperandOne, normalizedOperandTwo);
      break;
    default:
      result = normalizedOperandOne;
  }

  const timeEnd = performance.now();
  const totalTime = timeEnd - timeStart;
  if (totalTime < 1000) {
    await new Promise(resolve => setTimeout(resolve, 1000 - totalTime));
    return result;
  }
  else return result;
}

const constants = {
  E: 2.71828182846,
  PI: 3.14159265359,
}

const replaceConstants = operandValue => {
  if (operandValue.toString().includes('e')) return constants.E;
  if (operandValue.toString().includes('π')) return constants.PI;
  return operandValue;
}

const convertStringToNumber = stringOperand => {
  console.log('this got called converting');
  const operand = parseFloat(stringOperand);
  return isNaN(operand) ? '' : operand;
}

const normalizedValue = (value, functionValue) => {
  switch (functionValue) {
    case functions.SIN:
      return sin(value);
    case functions.COS:
      return cos(value)
    case functions.TAN:
      return tan(value);
    default:
      return value;
  }
}

const add = (operandOne, operandTwo) => {
  return operandOne + operandTwo;
}

const subtract = (operandOne, operandTwo) => {
  return operandOne - operandTwo;
}

const multiply = (operandOne, operandTwo) => {
  return operandOne * operandTwo;
}

const divide = (operandOne, operandTwo) => {
  return operandOne / operandTwo;
}

const power = (operandOne, operandTwo) => {
  return operandOne ** operandTwo;
}

const sin = (operand) => {
  return Math.sin(operand);
}

const cos = (operand) => {
  return Math.cos(operand);
}

const tan = (operand) => {
  return Math.tan(operand);
}

export default mathService;
