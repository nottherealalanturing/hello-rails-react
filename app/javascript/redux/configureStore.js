import { configureStore } from "@reduxjs/toolkit";
import messages from "./messages";

const store = configureStore({
  reducer: {
    messages,
  },
});

export default store;
