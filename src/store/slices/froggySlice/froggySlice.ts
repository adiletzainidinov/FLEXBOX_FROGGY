import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface InputType {
  inputValue: string;
  levelCount: number;
}

const initialState: InputType = {
  inputValue: '',
  levelCount: 1,
};

export const froggySlice = createSlice({
  name: 'froggy',
  initialState,
  reducers: {
    addFroggy(state, action: PayloadAction<string>) {
      state.inputValue = action.payload;
    },
    levelCountValue(state, action: PayloadAction<number>) {
      state.levelCount = state.levelCount + 1;
      state.levelCount = action.payload;
    },
  },
});

export const { addFroggy, levelCountValue } = froggySlice.actions;

export default froggySlice.reducer;
