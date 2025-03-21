import { all } from "redux-saga/effects";
import { watchFetchPost } from "./redux-saga/fetchDataSaga";

export default function* rootSaga() {
  yield all([watchFetchPost()]);
}
