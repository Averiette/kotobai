// src/redux/Store.ts
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from '../auth/authSlice';
import googleReducer from '../auth/googleSlice';
import paymentReducer from '@redux/Slices/Payment/paymentSlice';
import registerReducer from '@redux/auth/registerAuthSlice'; 

const rootReducer = combineReducers({
  auth: authReducer,
  google: googleReducer,
  payment: paymentReducer,
  register: registerReducer, 
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
