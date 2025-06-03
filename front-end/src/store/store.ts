import { configureStore } from "@reduxjs/toolkit";
import noticeReducer from "./noticeStore/noticeSlice";
import userReducer from "./userStore/userSlice";

export const store = configureStore({
  reducer: { notices: noticeReducer, user: userReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
