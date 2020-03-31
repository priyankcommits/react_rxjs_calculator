import { replaceAll } from './utils';

const mathService = async (data, previousAnswer) => {
  const timeStart = performance.now();
  data = replaceAll(data, 'x', '*');
  data = replaceAll(data, '÷', '/');
  data = replaceAll(data, 'pow', '**');
  data = replaceAll(data, 'sin', 'Math.sin');
  data = replaceAll(data, 'cos', 'Math.cos');
  data = replaceAll(data, 'tan', 'Math.tan');
  data = replaceAll(data, 'log', 'Math.log10');
  data = replaceAll(data, 'ln', 'Math.log');
  data = replaceAll(data, 'e', 'Math.E');
  data = replaceAll(data, 'π', 'Math.PI');
  data = replaceAll(data, 'Ans', `${previousAnswer}`);

  let result = null;
  try {
    result = eval(data);
  } catch {};

  const timeEnd = performance.now();
  const totalTime = timeEnd - timeStart;
  if (totalTime < 1000) {
    await new Promise(resolve => setTimeout(resolve, 1000 - totalTime));
    return result;
  }
  else return result;
}

export default mathService;
