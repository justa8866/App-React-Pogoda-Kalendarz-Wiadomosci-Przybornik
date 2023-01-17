import { configureStore } from '@reduxjs/toolkit';
import userReducer from './auth/authSlice';
import menuReducer from './menu/menuSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    menu: menuReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
