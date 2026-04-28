import { configureStore, type UnknownAction, type ThunkAction } from '@reduxjs/toolkit';
import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux';
import { loadingBarMiddleware } from 'react-redux-loading-bar';
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/es/storage/session';

import errorMiddleware from 'app/config/error-middleware';
import sharedReducers from 'app/shared/reducers';

import loggerMiddleware from './logger-middleware';
import notificationMiddleware from './notification-middleware';


const whitelist = [
  'example'
];

const persistConfig = {
  key: 'root',
  storage,
  whitelist
};

const persistedReducer = persistReducer(persistConfig, sharedReducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    const middleware = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          PAUSE,
          PURGE,
          PERSIST,
          REGISTER,
          REHYDRATE,
          'infoModal/setModalContentState',
          'user/getTokenAfterRegister/fulfilled',
          'user/setToken',
          'inputCommon/setValidateInput',
          'inputCommon/setInputValue'
        ],
        ignoredActionPaths: [
          'payload.modalContent',
          'payload.callbackFunction',
          'payload.token_create_time'
        ],
        ignoredPaths: [
          'payload.headers',
          'meta.arg',
          'error.config',
          'payload.modalContent',
          'infoModal.modalContent',
          'infoModal.callbackFunction',
          'user.token_create_time',
          'inputCommon.inputValue.contactUs.files'
        ]
      }
    }).concat(errorMiddleware, notificationMiddleware, loadingBarMiddleware());

    if (import.meta.env.DEV) {
      middleware.push(loggerMiddleware);
    }

    return middleware;
  }
});

const getStore = () => store;

export type IRootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, IRootState, unknown, UnknownAction>;

export default getStore;
