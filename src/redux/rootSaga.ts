import { all } from "redux-saga/effects";
import authSagas from "./auth/sagas";

function* rootSaga() {
  yield all([
    authSagas(),
  ])
}

export default rootSaga;
