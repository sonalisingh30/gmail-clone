import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appsSlice";

const store = configureStore({
  reducer: {
    appSlice: appReducer,
  },
});
export default store;
