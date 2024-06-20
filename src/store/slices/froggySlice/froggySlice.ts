import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface InputType {
  inputValue: string;
}

const initialState: InputType = {
  inputValue: '',
};

export const froggySlice = createSlice({
  name: 'froggy',
  initialState,
  reducers: {
    addFroggy(state, action: PayloadAction<string>) {
      state.inputValue = action.payload;
    },
  },
});

export const { addFroggy } = froggySlice.actions;

export default froggySlice.reducer;
