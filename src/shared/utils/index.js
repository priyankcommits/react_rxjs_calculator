// Utility functions for Services

const replaceAll = (str, find, replace) => {
  return str.replace(new RegExp(find, 'g'), replace);
}

export { replaceAll };
