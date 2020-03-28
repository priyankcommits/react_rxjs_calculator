export const buttonTypes = {
    NUMBER: 'number',
    OPERATOR: 'operator',
    FUNCTION: 'function',
    CONSTANT: 'constant',
    RESET: 'reset',
}

export const operators = {
    PLUS: '+',
    MINUS: '-',
    MULTIPLY: 'x',
    DIVIDE: '÷',
    POWER: 'pow',
}

export const functions = {
    SIN: 'sin',
    COS: 'cos',
    TAN: 'tan',
}

const claculatorButtons = [
    {value: {name: functions.SIN, startsWith: 'sin(', endsWith: ')'}, type: buttonTypes.FUNCTION, color: 'secondary'},
    {value: {name: 'ln', startsWith: 'ln(', endsWith: ')'}, type: buttonTypes.FUNCTION, color: 'secondary'},
    {value: {name: '7'}, type: buttonTypes.NUMBER, color: 'light'},
    {value: {name: '8'}, type: buttonTypes.NUMBER, color: 'light'},
    {value: {name: '9'}, type: buttonTypes.NUMBER, color: 'light'},
    {value: {name: operators.DIVIDE}, type: buttonTypes.OPERATOR, color: 'secondary'},
    {value: {name: functions.COS, startsWith: 'cos(', endsWith: ')'}, type: buttonTypes.FUNCTION, color: 'secondary'},
    {value: {name: 'log', startsWith: 'log(', endsWith: ')'}, type: buttonTypes.FUNCTION, color: 'secondary'},
    {value: {name: '4'}, type: buttonTypes.NUMBER, color: 'light'},
    {value: {name: '5'}, type: buttonTypes.NUMBER, color: 'light'},
    {value: {name: '6'}, type: buttonTypes.NUMBER, color: 'light'},
    {value: {name: operators.MULTIPLY}, type: buttonTypes.OPERATOR, color: 'secondary'},
    {value: {name: functions.TAN, startsWith: 'tan(', endsWith: ')'}, type: buttonTypes.FUNCTION, color: 'secondary'},
    {value: {name: 'π'}, type: buttonTypes.CONSTANT, color: 'secondary'},
    {value: {name: '1'}, type: buttonTypes.NUMBER, color: 'light'},
    {value: {name: '2'}, type: buttonTypes.NUMBER, color: 'light'},
    {value: {name: '3'}, type: buttonTypes.NUMBER, color: 'light'},
    {value: {name: operators.MINUS}, type: buttonTypes.OPERATOR, color: 'secondary'},
    {value: {name: operators.POWER}, type: buttonTypes.OPERATOR, color: 'secondary'},
    {value: {name: 'e'}, type: buttonTypes.CONSTANT, color: 'secondary'},
    {value: {name: '0'}, type: buttonTypes.NUMBER, color: 'light'},
    {value: {name: '.'}, type: buttonTypes.NUMBER, color: 'light'},
    {value: {name: 'AC'}, type: buttonTypes.RESET, color: 'primary'},
    {value: {name: operators.PLUS}, type: buttonTypes.OPERATOR, color: 'secondary'}
]

export default claculatorButtons;
