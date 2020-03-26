export const buttonTypes = {
    NUMBER: 'number',
    OPERATOR: 'operator',
    FUNCTION: 'function',
    RESET: 'reset',
}

export const operators = {
    PLUS: '+',
    MINUS: '-',
    MULTIPLY: 'x',
    DIVIDE: '÷',
}

const claculatorButtons = [
    {value: {name: 'sin', startsWith: 'sin(', endsWith: ')'}, type: buttonTypes.FUNCTION, color: 'secondary'},
    {value: {name: 'ln', startsWith: 'ln(', endsWith: ')'}, type: buttonTypes.FUNCTION, color: 'secondary'},
    {value: {name: '7'}, type: buttonTypes.NUMBER, color: 'light'},
    {value: {name: '8'}, type: buttonTypes.NUMBER, color: 'light'},
    {value: {name: '9'}, type: buttonTypes.NUMBER, color: 'light'},
    {value: {name: operators.DIVIDE}, type: buttonTypes.OPERATOR, color: 'secondary'},
    {value: {name: 'cos', startsWith: 'cos(', endsWith: ')'}, type: buttonTypes.FUNCTION, color: 'secondary'},
    {value: {name: 'log', startsWith: 'log(', endsWith: ')'}, type: buttonTypes.FUNCTION, color: 'secondary'},
    {value: {name: '4'}, type: buttonTypes.NUMBER, color: 'light'},
    {value: {name: '5'}, type: buttonTypes.NUMBER, color: 'light'},
    {value: {name: '6'}, type: buttonTypes.NUMBER, color: 'light'},
    {value: {name: operators.MULTIPLY}, type: buttonTypes.OPERATOR, color: 'secondary'},
    {value: {name: 'tan', startsWith: 'tan(', endsWith: ')'}, type: buttonTypes.FUNCTION, color: 'secondary'},
    {value: {name: 'π', startsWith: '', endsWith: 'π'}, type: buttonTypes.FUNCTION, color: 'secondary'},
    {value: {name: '1'}, type: buttonTypes.NUMBER, color: 'light'},
    {value: {name: '2'}, type: buttonTypes.NUMBER, color: 'light'},
    {value: {name: '3'}, type: buttonTypes.NUMBER, color: 'light'},
    {value: {name: operators.MINUS}, type: buttonTypes.OPERATOR, color: 'secondary'},
    {value: {name: 'pow', startsWith: '^', endsWith: ''}, type: buttonTypes.FUNCTION, color: 'secondary'},
    {value: {name: 'e', startsWith: '', endsWith: 'e'}, type: buttonTypes.FUNCTION, color: 'secondary'},
    {value: {name: '0'}, type: buttonTypes.NUMBER, color: 'light'},
    {value: {name: '.'}, type: buttonTypes.NUMBER, color: 'light'},
    {value: {name: 'AC'}, type: buttonTypes.RESET, color: 'primary'},
    {value: {name: operators.PLUS}, type: buttonTypes.OPERATOR, color: 'secondary'}
]

export default claculatorButtons;
