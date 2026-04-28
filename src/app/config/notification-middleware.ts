import type { Middleware } from '@reduxjs/toolkit';

/**
 * Notification middleware — lắng nghe actions và hiển thị thông báo tương ứng.
 * Customize tại đây để tích hợp với toast library (e.g. react-toastify).
 */
const notificationMiddleware: Middleware = _store => next => (action: unknown) => {
  return next(action);
};

export default notificationMiddleware;
