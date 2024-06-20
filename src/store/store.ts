import { froggySlice } from './slices/froggySlice/froggySlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    [froggySlice.name]: froggySlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

