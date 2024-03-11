import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../store/slices/slice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
