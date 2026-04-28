export const isPromise = (value: any): boolean => {
  if (value !== null && typeof value === 'object') {
    return value && typeof value.then === 'function';
  }
  return false;
};