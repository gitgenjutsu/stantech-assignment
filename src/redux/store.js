import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import fetchDataReducer from "./redux-slice/fetchDataSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    fetchData: fetchDataReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
