import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
//the below function will contain the key value pairs
export const store = configureStore({
  reducer: todoReducer,
});
