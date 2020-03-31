// Math service which is an async function acting as a 'fake' server
import { replaceAll } from './utils';

const mathService = async (data, previousAnswer) => {
  const timeStart = performance.now();
  let temp = data;
  temp = replaceAll(temp, 'x', '*');
  temp = replaceAll(temp, '÷', '/');
  temp = replaceAll(temp, 'pow', '**');
  temp = replaceAll(temp, 'sin', 'Math.sin');
  temp = replaceAll(temp, 'cos', 'Math.cos');
  temp = replaceAll(temp, 'tan', 'Math.tan');
  temp = replaceAll(temp, 'log', 'Math.log10');
  temp = replaceAll(temp, 'ln', 'Math.log');
  temp = replaceAll(temp, 'e', 'Math.E');
  temp = replaceAll(temp, 'π', 'Math.PI');
  temp = replaceAll(temp, 'Ans', `${previousAnswer}`);

  let result = '';
  try {
    result = eval(temp);
  } catch {
    console.log('The above string could not be expected, most likely this is an unhandled edge case');
    console.log(`String is: '${data}'`);
    result = previousAnswer;
  };

  const timeEnd = performance.now();
  const totalTime = timeEnd - timeStart;
  if (result === undefined) result = '';
  if (totalTime < 1000) {
    await new Promise(resolve => setTimeout(resolve, 1000 - totalTime));
    return result;
  }
  else return result;
}

export default mathService;
