import { combineReducers } from '@reduxjs/toolkit';
import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar';

export interface IRootState {
  readonly loadingBar: any;
}

const rootReducer = combineReducers({
  loadingBar
});

export default rootReducer;