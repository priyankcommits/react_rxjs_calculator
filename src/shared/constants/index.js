// Contains all constants related to Appplication

const buttonTypes = {
  NUMBER: 'number',
  OPERATOR: 'operator',
  FUNCTION: 'function',
  CONSTANT: 'constant',
  RESET: 'AC',
  PARANTHESIS_OPEN: '(',
  PARANTHESIS_CLOSE: ')',
  POINT: '.',
  ANSWER: 'Ans',
  UNDO: 'Undo',
  REDO: 'Redo',
}

const operators = {
  PLUS: '+',
  MINUS: '-',
  MULTIPLY: 'x',
  DIVIDE: '÷',
  POWER: 'pow',
  MODULUS: '%',
}

const calculatorButtons = [
  {value: {name: 'sin'}, type: buttonTypes.FUNCTION, color: 'secondary', keyEvent: 's'},
  {value: {name: 'ln'}, type: buttonTypes.FUNCTION, color: 'secondary', keyEvent: 'l'},
  {value: {name: '7'}, type: buttonTypes.NUMBER, color: 'light', keyEvent: '7'},
  {value: {name: '8'}, type: buttonTypes.NUMBER, color: 'light', keyEvent: '8'},
  {value: {name: '9'}, type: buttonTypes.NUMBER, color: 'light', keyEvent: '9'},
  {value: {name: operators.DIVIDE}, type: buttonTypes.OPERATOR, color: 'secondary', keyEvent: '/'},
  {value: {name: 'cos'}, type: buttonTypes.FUNCTION, color: 'secondary', keyEvent: 'c'},
  {value: {name: 'log'}, type: buttonTypes.FUNCTION, color: 'secondary', keyEvent: 'g'},
  {value: {name: '4'}, type: buttonTypes.NUMBER, color: 'light', keyEvent: '4'},
  {value: {name: '5'}, type: buttonTypes.NUMBER, color: 'light', keyEvent: '5'},
  {value: {name: '6'}, type: buttonTypes.NUMBER, color: 'light', keyEvent: '6'},
  {value: {name: operators.MULTIPLY}, type: buttonTypes.OPERATOR, color: 'secondary', keyEvent: '*'},
  {value: {name: 'tan'}, type: buttonTypes.FUNCTION, color: 'secondary', keyEvent: 't'},
  {value: {name: 'π'}, type: buttonTypes.CONSTANT, color: 'secondary', keyEvent: 'p'},
  {value: {name: '1'}, type: buttonTypes.NUMBER, color: 'light', keyEvent: '1'},
  {value: {name: '2'}, type: buttonTypes.NUMBER, color: 'light', keyEvent: '2'},
  {value: {name: '3'}, type: buttonTypes.NUMBER, color: 'light', keyEvent: '3'},
  {value: {name: operators.MINUS}, type: buttonTypes.OPERATOR, color: 'secondary', keyEvent: '-'},
  {value: {name: operators.POWER}, type: buttonTypes.OPERATOR, color: 'secondary', keyEvent: '^'},
  {value: {name: 'e'}, type: buttonTypes.CONSTANT, color: 'secondary', keyEvent: 'e'},
  {value: {name: '0'}, type: buttonTypes.NUMBER, color: 'light', keyEvent: '0'},
  {value: {name: buttonTypes.POINT}, type: buttonTypes.POINT, color: 'light', keyEvent: '.'},
  {value: {name: buttonTypes.RESET}, type: buttonTypes.RESET, color: 'primary', keyEvent: 'r'},
  {value: {name: operators.PLUS}, type: buttonTypes.OPERATOR, color: 'secondary', keyEvent: '+'},
  {value: {name: buttonTypes.PARANTHESIS_OPEN}, type: buttonTypes.PARANTHESIS_OPEN, color: 'secondary', keyEvent: '('},
  {value: {name: buttonTypes.PARANTHESIS_CLOSE}, type: buttonTypes.PARANTHESIS_CLOSE, color: 'secondary', keyEvent: ')'},
  {value: {name: buttonTypes.UNDO}, type: buttonTypes.UNDO, color: 'warning', keyEvent: 'z'},
  {value: {name: buttonTypes.REDO}, type: buttonTypes.REDO, color: 'warning', keyEvent: 'x'},
  {value: {name: buttonTypes.ANSWER}, type: buttonTypes.CONSTANT, color: 'primary', keyEvent: 'a'},
  {value: {name: operators.MODULUS}, type: buttonTypes.OPERATOR, color: 'secondary', keyEvent: '%'},
]

export { buttonTypes, calculatorButtons, operators };
