import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/slice"; // Import reducers here

export const store = configureStore({
  reducer: {
    counter: counterReducer, // Add more reducers as needed
  },
});

// Infer RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
