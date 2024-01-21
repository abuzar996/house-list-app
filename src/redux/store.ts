import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./slice/data-slice";
import { useDispatch } from "react-redux";
export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    data: dataReducer,
  },
});
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
