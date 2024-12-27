import { configureStore } from "@reduxjs/toolkit";
import { useSelector as rawUseSelector, TypedUseSelectorHook } from "react-redux";
import todoReducers from "./modules/Todo";
import authReducers from "./modules/Auth";

const store = configureStore({
  reducer: {
    todo: todoReducers,
    auth: authReducers,
  },
});
export default store;

// useSelectorを型推論できるように
export type RootState = ReturnType<typeof store.getState>;
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;