import { operators } from './constants';

async function mathService(operandOne, operandTwo, operatorFunction) {
    await setTimeout(() => {}, 1000);
    switch(operatorFunction) {
        case operators.PLUS:
            return add(operandOne, operandTwo);
    }
}

function add(operandOne, operandTwo) {
    return operandOne + operandTwo;
}

export default mathService;
