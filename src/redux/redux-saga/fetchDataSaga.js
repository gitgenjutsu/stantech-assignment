import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  fetchPostFailure,
  fetchPostRequest,
  fetchPostSuccess,
} from "../redux-slice/fetchDataSlice";

function* fetchData() {
  try {
    const response = yield call(() =>
      axios.get("https://jsonplaceholder.typicode.com/posts")
    );
    yield put(fetchPostSuccess(response.data));
  } catch (error) {
    yield put(fetchPostFailure("Failed to fetch data"));
  }
}

export function* watchFetchPost() {
  yield takeLatest(fetchPostRequest.type, fetchData);
}
