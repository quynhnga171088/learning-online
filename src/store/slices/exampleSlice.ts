import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

/**
 * Đây là slice mẫu — xoá hoặc thay thế khi không cần nữa.
 * Mỗi tính năng nên có slice riêng trong thư mục này.
 */

interface ExampleState {
  count: number;
  message: string;
}

const initialState: ExampleState = {
  count: 0,
  message: ''
};

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    },
    setMessage(state, action: PayloadAction<string>) {
      state.message = action.payload;
    },
    reset() {
      return initialState;
    }
  }
});

export const { increment, decrement, setMessage, reset } = exampleSlice.actions;
export default exampleSlice.reducer;
