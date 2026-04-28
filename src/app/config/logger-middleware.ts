import type { Middleware } from '@reduxjs/toolkit';

/**
 * Logger middleware — log actions và state changes ra console (chỉ dùng ở development).
 * Tự động bị bỏ qua ở production (xem store.ts).
 */
const loggerMiddleware: Middleware = store => next => (action: unknown) => {
  console.group(action);
  console.info('dispatching', action);
  const result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
};

export default loggerMiddleware;
