import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../features/formSlice';
import reservationReducer from '../features/reservationSlice';
import customerReducer from '../features/customerSlice';

export const store = configureStore({
  reducer: {
    // form: formReducer,
    reservations: reservationReducer,
    customer: customerReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
