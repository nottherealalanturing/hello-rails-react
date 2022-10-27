import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import messagesReducer from "./messages/messagesSlice";

const reducers = {
  message: messagesReducer,
};

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
